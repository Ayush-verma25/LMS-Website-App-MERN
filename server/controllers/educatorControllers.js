import { clerkClient, getAuth } from "@clerk/express";
import Course from "../models/Course.js";
import { v2 as cloudinary } from "cloudinary";
import Purchase from "../models/Purchase.js";

export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: no valid session found",
      });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { role: "educator" },
    });

    res.json({ success: true, message: "You can Publish a Course now" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Add New Course

export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body;
    const imageFile = req.file;
    const educatorId = getAuth(req).userId;

    if (!imageFile) {
      return res.status(400).json({
        success: false,
        message: "Please upload a thumbnail image",
      });
    }

    const parsedCourseData = await JSON.parse(courseData);
    parsedCourseData.educator = educatorId;
    const NewCourse = await Course.create(parsedCourseData);
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    NewCourse.courseThumbnail = imageUpload.secure_url;
    await NewCourse.save();

    res.json({ success: true, message: "Course Added Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Educator Courses

export const getEducatorCourses = async (req, res) => {
  try {
    const educator = getAuth(req).userId;

    const courses = await Course.find({ educator });

    res.json({
      success: true,
      courses,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Educator Dashboard Data ( Total Earnings, Courses Enrolled, Total Courses )

export const educatorDashboardData = async (req, res) => {
  try {
    const educator = getAuth(req).userId;

    const courses = await Course.find({ educator });

    const totalCourses = courses.length;

    const courseIds = courses.map((course) => course._id);

    // get Total Earnings
    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    });

    const totalEarnings = purchases.reduce(
      (sum, purchase) => sum + purchase.amount,
      0,
    );

    // Collect unique enrolled students
    const enrolledStudentsData = [];
    for (const course of courses) {
      const students = await User.find(
        {
          _id: { $in: course.enrolledStudents },
        },
        "name imageUrl",
      );

      students.forEach((student) => {
        enrolledStudentsData.push({
          courseTitle: course.courseTitle,
          student,
        });
      });
    }

    res.json({
      success: true,
      dashboardData: {
        totalEarnings,
        enrolledStudentsData,
        totalCourses,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get Enrolled students Data with Purchase Data

export const getEnrolledStudentsData = async (req, res) => {
  try {
    const educator = getAuth(req).userId;

    const courses = await Course.find({ educator });
    const courseIds = courses.map((course) => course._id);

    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    })
      .populate("userId", "name imageUrl")
      .populate("courseId", "courseTitle");

    const enrolledStudents = purchases.map((purchase) => ({
      student: purchase.userId,
      courseTitle: purchase.courseId.courseTitle,
      purchaseData: purchase.createdAt,
    }));

    res.json({
      success: true,
      enrolledStudents,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

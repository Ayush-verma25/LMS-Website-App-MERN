import mongoose from "mongoose";

const courseProgressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    courseId: { type: String, required: true },
    completed: { type: Boolean, default: false },
    lectureCompleted: { type: [String], default: [] },
  },
  { minimize: false },
);

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);

export default CourseProgress;

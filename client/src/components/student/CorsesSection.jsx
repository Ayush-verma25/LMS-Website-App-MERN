import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AddContext";
import CourseCard from "./CourseCard";

const CorsesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best Educators across the globe.
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top rated courses across various subjects & Categories.
        From beginner to advanced coding and design to business and wellness.
        <br /> We have something for everyone & our courses are crafted by
        specialized teachers to deliver the best learning experience.
      </p>

      <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list/"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        {" "}
        Explore Courses
      </Link>
    </div>
  );
};

export default CorsesSection;

import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h2 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn Anything, Anywhere, Anytime with SkillSpring
      </h2>
      <p className="text-gray-500 sm:text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facilis
        ullam sed quis adipisci cumque in. <br /> Earum provident eaque
        praesentium, impedit quae numquam saepe dicta. Non unde tenetur qui est.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-green-600">
          Get Started
        </button>
        <button className="flex items-center gap-2">
          Lern More <img src={assets.arrow_icon} alt="arrpe_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

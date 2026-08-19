import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Here from our course enrollers as they share their experiences of using
        SkillSpring successfully,
        <br />
        and how it has helped them in their career and made a difference in
        their lives.
      </p>

      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testomonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={testomonial.image}
                alt={testomonial.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testomonial.name}
                </h1>
                <p className="text-gray-800/80">{testomonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    src={
                      i < Math.floor(testomonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    key={i}
                    className="h-5"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testomonial.feedback}</p>
            </div>
            <a href="#" className="text-green-500 underline px-5">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

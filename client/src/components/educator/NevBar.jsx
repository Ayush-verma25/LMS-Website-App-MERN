import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/react";
import { Link } from "react-router-dom";

const NevBar = () => {
  const educatorData = dummyEducatorData;

  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-12 sm:h-15 lg:h-20 w-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
        />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} alt="profile_img" />
        )}
      </div>
    </div>
  );
};

export default NevBar;

import React from "react";
import profile from "../../public/profile/profile.png";
import Icon from "./Icon";
export default function Profile() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="profile-img w-[40px] h-[40px] rounded-[50%] p-[2px]">
        <img
          src={profile}
          alt={profile}
          className="w-[100%] h-[100%] rounded-[50%] object-cover"
        />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <h1 className="font-normal">Md Shamim</h1>
        </div>
        <Icon iconName="fa-solid fa-chevron-down text-sm" />
      </div>
    </div>
  );
}

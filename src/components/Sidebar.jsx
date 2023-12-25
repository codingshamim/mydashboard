import React from "react";
import MenuItem from "./MenuItem";
export default function Sidebar() {
  return (
    <div className="sideBar pl-10">
      <div className="container mx-auto">
        <ul className="flex flex-col gap-3 pt-2">
          <MenuItem
            itemName="Dashboard"
            to="/admin"
            iconName="fa-solid fa-list"
          />
          <MenuItem
            itemName="Email"
            to="/email"
            iconName="fa-solid fa-envelope"
          />
        </ul>
      </div>
    </div>
  );
}

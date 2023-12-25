import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
export default function MenuItem({ itemName, to, iconName }) {
  return (
    <li className="flex gap-2 items-center menu-item text-[#585757]">
      <Icon iconName={iconName} />
      <NavLink to={to}>{itemName}</NavLink>
    </li>
  );
}

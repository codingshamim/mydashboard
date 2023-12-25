import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div >
      <Header />
      <div className="row grid grid-cols-12 gap-3">
        <div className="site-sidebar col-span-2">
          <Sidebar />
        </div>
        <div className="site-content col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

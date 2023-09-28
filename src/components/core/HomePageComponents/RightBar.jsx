import React from "react";

export default function RightBar({ rightBarStatus }) {
  return (
    <div
      className={`${
        rightBarStatus ? "w-[350px]" : "hidden w-0"
      } transition-all duration-200 bg-white-100/50 h-[calc(100vh-134px)] z-10 p-4`}
    >
      <h1 className="font-semibold">Flood Alert</h1>

      <div>
        SideBar Here
      </div>
    </div>
  );
}

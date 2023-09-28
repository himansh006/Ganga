import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import React from "react";

export default function ContentBar({
  setLeftBarOpen,
  setRightBarOpen,
  leftBarStatus,
  rightBarStatus,
}) {
  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627771.3933752966!2d80.36868693152962!3d27.383662455453962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f21d52693d311%3A0x4d7299c262866519!2sGanges!5e0!3m2!1sen!2sin!4v1695900164721!5m2!1sen!2sin"
        className={`${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${
          !rightBarStatus && "w-[calc(100vw-650px+350px)]"
        } ${!leftBarStatus && !rightBarStatus && "w-screen"} w-[calc(100vw-650px)]`}
        height="600"
        loading="lazy"
      ></iframe>

      {/* Minimize Left Panel */}
      <div
        title={leftBarStatus ? "Collapse" : "Expand"}
        onClick={() => setLeftBarOpen(!leftBarStatus)}
        className=" bg-primaryGreen w-4 h-10 rounded-r-md flex items-center justify-center text-white-100 absolute top-5 shadow shadow-[#12121250] hover:shadow-none transition-all duration-200 cursor-pointer "
      >
        <ChevronLeft
          className={` ${
            leftBarStatus ? "rotate-0" : "rotate-180"
          } transition-all duration-200`}
          size={20}
          strokeWidth={3}
        />
      </div>

      {/* Minimize Right Panel */}
      <div
        title={rightBarStatus ? "Collapse" : "Expand"}
        onClick={() => setRightBarOpen(!rightBarStatus)}
        className=" bg-primaryGreen w-4 h-10 rounded-l-md flex items-center justify-center text-white-100 absolute right-0 top-5 shadow shadow-[#12121250] hover:shadow-none transition-all duration-200 cursor-pointer"
      >
        <ChevronRight
          className={` ${
            rightBarStatus ? "rotate-0" : "rotate-180"
          } transition-all duration-200`}
          size={20}
          strokeWidth={3}
        />
      </div>

      <div>Hi Hello</div>
    </div>
  );
}

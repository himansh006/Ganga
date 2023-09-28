import { Search } from "lucide-react";
import React from "react";

export default function LeftBar() {
  return (
    <div className="w-[300px] bg-white-100/50 h-[calc(100vh-134px)] z-10 p-4 overflow-y-auto overflow-x-hidden">
      <div className="border border-primaryBlue/10 rounded h-8  flex p-3 py-4 text-sm items-center gap-2 text-[#12121270]">
        <Search size={15} />

        <div>
          <input
            className="placeholder:text-[#12121270] flex-1 w-[220px] outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

import { NavOptionsData } from "@/data/NavOptions";
import { ChevronDown } from "lucide-react";
import React from "react";

function SubNavbar() {
  return (
    <div className="py-3 flex items-center shadow-[0_2px_5px] shadow-[#12121220] text-primaryBlue font-semibold text-base z-50">
      <nav className="container mx-auto flex space-x-7">
        {NavOptionsData.map((options, i) => {
          return (
            <div key={i} className="flex flex-row items-center gap-x-1 cursor-pointer hover:text-primaryBlue/80 transition-all duration-200">
              {options.optionName}
              {options.subOptions && (
                <div>
                  <ChevronDown size={15} strokeWidth={3} />
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default SubNavbar;

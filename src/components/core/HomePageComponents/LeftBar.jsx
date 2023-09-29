import { Search } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LeftBar({ leftBarStatus }) {
  return (
    <div
      className={`${
        leftBarStatus ? "w-[300px]" : "hidden w-0"
      } transition-all duration-200  bg-white-100/50 h-[calc(100vh-134px)] z-10 p-4 overflow-y-auto overflow-x-hidden relative`}
    >
      {/* Search Bar */}
      <div className="border border-primaryBlue/10 rounded h-8  flex p-3 py-4 text-sm items-center gap-2 text-[#12121270]">
        <Search size={15} />

        <div>
          <input
            className="placeholder:text-[#12121270] flex-1 w-[220px] outline-none bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Accordion */}
      <div className="pl-8 pt-3 text-sm">
        <Accordion type="single" collapsible className="text-black/80">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">
              Forecast
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold">
              Observed Sites
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

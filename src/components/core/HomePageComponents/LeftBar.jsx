import { Search } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { LeftNavOptions } from "@/data/LeftNavBarData";
import { VerticalBarChart } from "../Chart Cmponent/VerticalBarChart";

export default function LeftBar({ leftBarStatus }) {
  const openModal = () => {
    console.log("open modal");
  };

  return (
    <div
      className={`${
        leftBarStatus ? "w-[300px]" : "hidden w-0"
      } transition-all duration-200  bg-white-100/50 h-[calc(100vh-134px)] z-10 p-4 overflow-y-auto overflow-x-hidden relative shadow-[5px_10px_5px] shadow-[#12121210]`}
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
          {LeftNavOptions.map((tab, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold">
                {tab.tabName}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc flex flex-col gap-y-2 text-sm">
                  {tab.options.map((option, index) => (
                    <li className="ml-5" key={index}>
                      {/* Modal Content Start */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="hover:underline transition-all duration-200 cursor-pointer">
                            {option.title}
                          </div>
                        </DialogTrigger>
                        <DialogContent className="">
                          <DialogHeader>
                            <DialogTitle>{tab.tabName} - {option.title}</DialogTitle>
                            <DialogDescription>
                              {option.component}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      {/* Modal Content End */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

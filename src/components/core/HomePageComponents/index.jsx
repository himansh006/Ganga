import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function ContentBar({
  setLeftBarOpen,
  setRightBarOpen,
  leftBarStatus,
  rightBarStatus,
}) {
  return (
    <div
      className={`relative ${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${
        !rightBarStatus && "w-[calc(100vw-650px+350px)]"
      } ${
        !leftBarStatus && !rightBarStatus && "w-screen"
      } w-[calc(100vw-650px)] h-[calc(100vh-134px)] overflow-y-auto overflow-hidden`}
    >
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627771.3933752966!2d80.36868693152962!3d27.383662455453962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f21d52693d311%3A0x4d7299c262866519!2sGanges!5e0!3m2!1sen!2sin!4v1695900164721!5m2!1sen!2sin"
        className={`${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${
          !rightBarStatus && "w-[calc(100vw-650px+350px)]"
        } ${
          !leftBarStatus && !rightBarStatus && "w-screen"
        } w-[calc(100vw-650px)]`}
        height="650"
        loading="lazy"
      ></iframe> */}
      <div>
        <MapContainer
          center={[28.619181, 77.314201]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[28.619181, 77.314201]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Minimize Left Panel */}
      <div
        title={leftBarStatus ? "Collapse" : "Expand"}
        onClick={() => setLeftBarOpen(!leftBarStatus)}
        className=" bg-primaryGreen w-4 h-10 rounded-r-md flex items-center justify-center text-white-100 fixed top-40 shadow shadow-[#12121250] hover:shadow-none transition-all duration-200 cursor-pointer z-[100]"
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
        className={` bg-primaryGreen w-4 h-10 rounded-l-md flex items-center justify-center text-white-100 fixed ${
          rightBarStatus ? "right-[350px]" : "right-0"
        } top-40 shadow shadow-[#12121250] hover:shadow-none  cursor-pointer z-[100]`}
      >
        <ChevronRight
          className={` ${
            rightBarStatus ? "rotate-0" : "rotate-180"
          } transition-all duration-200`}
          size={20}
          strokeWidth={3}
        />
      </div>

      <h1 className="font-semibold px-4 pt-4 text-lg">{`Flood Impact Area(>40% inundation): `}</h1>

      <div className="m-2 mx-4 border rounded-lg">
        <Table className="border rounded-lg">
          <TableHeader className="rounded-lg">
            <TableRow>
              <TableHead className="font-semibold text-base text-[#121212]">
                State
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Districe
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Tehsil
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Village
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Depth
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Arrival Time
              </TableHead>
              <TableHead className="font-semibold text-base text-[#121212]">
                Duration
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(10)
              .fill(0)
              .map((ele, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="py-2">State</TableCell>
                    <TableCell className="py-2">Districe</TableCell>
                    <TableCell className="py-2">Tehsil</TableCell>
                    <TableCell className="py-2">Village</TableCell>
                    <TableCell className="py-2">Depth</TableCell>
                    <TableCell className="py-2">Arrival Time</TableCell>
                    <TableCell className="py-2">Duration</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

{
  /* 
<MapContainer center={[28.619181, 77.314201]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[28.619181, 77.314201]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> 
*/
}

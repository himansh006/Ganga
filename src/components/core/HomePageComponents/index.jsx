import React from "react";

export default function ContentBar() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627771.3933752966!2d80.36868693152962!3d27.383662455453962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f21d52693d311%3A0x4d7299c262866519!2sGanges!5e0!3m2!1sen!2sin!4v1695900164721!5m2!1sen!2sin"
        // width="800"
        className="w-[calc(100vw-650px)]"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

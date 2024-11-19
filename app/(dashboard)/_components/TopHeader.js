import { AlignJustify } from "lucide-react";
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex p-5 border-b items-center first-letter:justify-between md:justify-end">
      <AlignJustify className="md-hidden"></AlignJustify>
      <img
        src="/1037325.png"
        width="50"
        height="50"
        className="md:hidden"
      ></img>
    </div>
  );
};

export default TopHeader;

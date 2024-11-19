"use client";
import { Files, Shield, Upload } from "lucide-react";
import React, { useState } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: Files,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];
  const [activateIndex, setActivateIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <img src="/1037325.png" width={50} height={50} alt="Logo" />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            key={item.id} // Unique key prop
            className={`flex gap-2 p-4 px-6
              hover:bg-gray-100 w-full text-gray-500 ${
                activateIndex === index ? "bg-blue-50 text-primary" : ""
              }`}
            onClick={() => setActivateIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

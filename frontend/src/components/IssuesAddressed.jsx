import React from "react";
import water from "../assets/waterDroplet.png";
import building from "../assets/building.png";
import image from "../assets/image.png";
import computer from "../assets/computer.png";
import safety from "../assets/safety.jpg";

const list = [
  { src: water, title: "Water Issues" },
  { src: image, title: "Administration Issues" },
  { src: building, title: "Building Issues" },
  { src: computer, title: "Technical Issues" },
  { src: safety, title: "Safety Issues" },
];

const IssuesAddressed = () => {
  return (
    <div className="px-36 mt-20 w-full">
      <div className="relative overflow-hidden w-full pb-6">
      
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          
          
          {list.map((item, i) => (
            <div key={i} className="shrink-0 flex flex-col items-center mx-10">
              <img src={item.src} className="h-40 w-40 rounded-full shadow-2xl" />
              <p className="font-semibold text-2xl text-center">{item.title}</p>
            </div>
          ))}

          {/* Duplicate List for seamless loop */}
          {list.map((item, i) => (
            <div key={`dup-${i}`} className="shrink-0 flex flex-col items-center mx-10">
              <img src={item.src} className="h-40 w-40 rounded-full shadow-2xl" />
              <p className="font-semibold text-2xl text-center">{item.title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default IssuesAddressed;

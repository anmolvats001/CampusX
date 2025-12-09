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
    <div className="px-4 md:px-9 lg:px-36 mt-10 md:mt-20 w-full">
      <div className="relative overflow-hidden w-full pb-4 md:pb-6">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] hover:pause-animation">
          {list.map((item, i) => (
            <div key={i} className="shrink-0 flex flex-col items-center mx-4 md:mx-6 lg:mx-10 px-2">
              <img 
                src={item.src} 
                className="h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full shadow-lg md:shadow-2xl" 
                alt={item.title}
              />
              <p className="font-semibold text-sm md:text-xl lg:text-2xl text-center mt-2 md:mt-3">
                {item.title}
              </p>
            </div>
          ))}
          
          {/* Duplicate List for seamless loop */}
          {list.map((item, i) => (
            <div key={`dup-${i}`} className="shrink-0 flex flex-col items-center mx-4 md:mx-6 lg:mx-10 px-2">
              <img 
                src={item.src} 
                className="h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full shadow-lg md:shadow-2xl" 
                alt={item.title}
              />
              <p className="font-semibold text-sm md:text-xl lg:text-2xl text-center mt-2 md:mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssuesAddressed;

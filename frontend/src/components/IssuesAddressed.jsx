import React from "react";
import water from "../assets/waterDroplet.png";
import building from "../assets/building.png";
import image from "../assets/image.png"
import computer from "../assets/computer.png"
import safety from "../assets/safety.jpg"
const IssuesAddressed = () => {
  return (
    <div className="px-36 mt-20 w-full">
      <div className=" pb-6 w-full">
        <div>
            <div className="flex justify-between">
                <div className="flex flex-col w-60 h-64 shadow-xl rounded-3xl">
            <img src={water} alt="" className="h-56"/>
            <p className="font-semibold text-2xl text-center">Water Issues</p>
        </div>
          <div className="flex flex-col w-60 h-64 shadow-xl rounded-3xl">
            <img src={image} alt="" className="h-48 object-contain"/>
            <p className="font-semibold text-2xl text-center">Administration Issues</p>
        </div>
            </div>
        <div className="w-full flex justify-center">
            <div className="flex flex-col w-60 h-64 shadow-xl rounded-3xl">
            <img src={building} alt="" className="h-56"/>
            <p className="font-semibold text-2xl text-center">Building Issues</p>
        </div>
        </div>
        <div className="flex justify-between">
                <div className="flex flex-col w-60 h-64 shadow-xl rounded-3xl">
            <img src={computer} alt="" className="h-56"/>
            <p className="font-semibold text-2xl text-center">Technical Issues</p>
        </div>
          <div className="flex flex-col w-60 h-64 shadow-xl rounded-3xl">
            <img src={safety} alt="" className="h-48 object-contain"/>
            <p className="font-semibold text-2xl text-center">Safety Issues</p>
        </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesAddressed;

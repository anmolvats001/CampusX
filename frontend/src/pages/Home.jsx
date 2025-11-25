import React, { use, useEffect, useRef } from 'react'
import WhyCampusConnect from '../components/WhyCampusConnect'
import DrinkingWater from '../assets/DrinkingWater.png';
import Administrativeblock from "../assets/Administrativeblock.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from 'react-router-dom';
import IssuesAddressed from '../components/IssuesAddressed';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainheading=useRef();
  const contentbox=useRef();
  const data=useRef();
  useEffect(()=>{
   let tl=gsap.timeline();
    tl.from(mainheading.current,{
      scale:0,
      duration:1.5,

    });
    tl.from(data.current,{
      scale:0,
      duration:0.7,
      opacity:0,
      delay:-0.6
    })
    gsap.utils.toArray(".text-content1").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 50%",
          markers: false,
        },
        x: -100,
        opacity: 0,
        duration: 0.7,
      });
    });
   gsap.utils.toArray(".text-content2").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 50%",
          markers: false,
        },
        x: 100,
        opacity: 0,
        duration: 0.7,
      });
    });
  },[])
  return (
    <div className="w-full overflow-x-hidden h-fit py-20 pt-36 bg-[#FFFFFF] text-[#1E293B]">
      <div className='bg-[url(C:\VsCodeProgram\Campus-connect\Project-1\frontend\src\assets\bg.jpeg)] bg-cover bg-center'>
        <h1 className="capitalize font-extrabold text-6xl md:text-7xl text-center [word-spacing:-0.1rem] text-[#1E293B]" ref={mainheading}>
          Welcome to Campus <br />
          <span className="text-[#2563EB] transform inline-block ">
            Connect
          </span>
        </h1>
        <h3 className="mt-10 text-lg md:text-xl font-medium text-center text-[#64748B] italic" ref={data}>
          Speak up without fear — your feedback stays anonymous.
          <br />
          We connect students and management securely and transparently.
        </h3>
        <div className="flex justify-center mt-10 text-lg">
          <button className="rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-300 px-6 py-2 font-semibold text-white shadow-sm hover:shadow-md">
            Explore Complaints
          </button>
        </div>
      </div>
      <div className="px-6 md:px-36 mt-20">
        <p className="text-center capitalize font-bold text-[#1E293B] text-2xl md:text-3xl mt-9">
          Your voice matters — let's fix ABES together 🔊
        </p>
        <hr className="my-6 border-[#E5E7EB] mb-10" />
        <div className="flex flex-col gap-12"ref={contentbox}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mb-6 md:mb-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-[3px] border-black"
                src={DrinkingWater}
                alt=""
              />
            </div>
            <div className="border-2 border-[#E2E8F0] rounded-2xl w-full md:w-[75%] h-20 md:h-24 relative md:right-11 bg-[#F8FAFC] shadow-sm px-20 pr-11 text-lg font-serif italic  text-justify rounded-r-full text-content1">Struggling for water shouldn’t be part of student life. When taps run dry or systems fail, it affects everyone. Don’t wait for change — start it with CampusConnect and report water issues directly to your faculty today.</div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <div className="border-2 border-[#E2E8F0] rounded-l-full w-full md:w-[75%] h-20 md:h-24 relative md:left-11 bg-[#F8FAFC] shadow-sm pl-11 pr-20 text-lg font-serif italic  text-justify text-content2">Delays or confusion in the administration office shouldn’t hold students back. Raise your concerns on CampusConnect and help build a smoother, more transparent and responsive system for every student.</div>
            <div className="rounded-full overflow-hidden z-10 mt-6 md:mt-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-[3px] border-black"
                src={Administrativeblock}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mt-6 md:mt-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-[3px] border-black"
                src={Administrativeblock}
                alt=""
              />
            </div>
            <div className="border-2 border-[#E2E8F0] rounded-2xl w-full md:w-[75%] h-20 md:h-24 relative md:right-11 bg-[#F8FAFC] shadow-sm px-20 pr-11 text-lg font-serif italic  text-justify rounded-r-full text-content1">Strong campuses start with strong infrastructure. If you see something broken or unsafe, don’t ignore it — be the change and report it through your voice on CampusConnect to make your campus better for everyone.</div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <div className="border-2 border-[#E2E8F0] rounded-l-full w-full md:w-[75%] h-20 md:h-24 relative md:left-11 bg-[#F8FAFC] shadow-sm pl-11 pr-20 text-lg font-serif italic  text-justify text-content2">Delays or confusion in the administration office shouldn’t hold students back. Raise your concerns on CampusConnect and help build a smoother, more transparent and responsive system for every student.</div>
            <div className="rounded-full overflow-hidden z-10 mt-6 md:mt-0">
              <img
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-[3px] border-black"
                src={Administrativeblock}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-36 mt-24">
        <p className="text-center font-bold text-3xl md:text-4xl mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-5xl">I</span>ssues{" "}
          <span className="text-[#2563EB] text-5xl">C</span>overed ⚠️{" "}
        </p>
        <hr className="my-6 border-[#E5E7EB] mb-9" />
      </div>
      <div>
        <IssuesAddressed/>
      </div>
      <div className="px-6 md:px-36 mt-24">
        <p className="text-center font-bold text-3xl md:text-4xl mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-5xl">W</span>hy{" "}
          <span className="text-[#2563EB] text-5xl">C</span>ampus{" "}
          <span className="text-[#2563EB] text-5xl">C</span>onnect 🤔❓
        </p>
        <hr className="my-6 border-[#E5E7EB] mb-9" />
      </div>
      <div className="px-6">
        <WhyCampusConnect />
      </div>
      
    </div>
  )
}

export default Home

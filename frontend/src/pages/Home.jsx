import React, { use, useContext, useEffect, useRef, useState } from 'react'
import WhyCampusConnect from '../components/WhyCampusConnect'
import DrinkingWater from '../assets/DrinkingWater.png';
import Administrativeblock from "../assets/Administrativeblock.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import feedback1 from "../assets/feedback1.jpeg"
import feedback2 from "../assets/feedback2.jpeg"
import home1 from "../assets/home1.jpeg"
import home2 from "../assets/home2.jpeg"
import home3 from "../assets/home3.jpeg"
import home4 from "../assets/home4.jpeg"
import IssuesAddressed from '../components/IssuesAddressed';
import { AppContext } from '../Context/context';
import Shrimmer from '../components/Shrimmer';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainheading=useRef();
  const targetRef=useRef();
  const contentbox=useRef();
  const data=useRef();
  const feedbackscroll=useRef();
  const [loader,setShowLoader]=useState(true);
  const {dark,setDark}=useContext(AppContext);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  function scrollleft() {
  feedbackscroll.current.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth",
  });
}
const scrollToDiv = () => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

function scrollright() {
  feedbackscroll.current.scrollBy({
    left:window.innerWidth,
    behavior: "smooth",
  });
}
useEffect(() => {
  setDark(false)
    const timer = setTimeout(() => {
      setShowLoader(false);
      setDark(true);
    }, 1000); 

    return () => {clearTimeout(timer);}
  }, []);
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
    <div className="w-full overflow-x-hidden h-fit py-20 pt-16 bg-[#FFFFFF] text-[#1E293B]">
      <div
  className="relative bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  {/* Overlay with opacity */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
    <p
      className="capitalize font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center [word-spacing:-0.1rem] text-white leading-tight sm:leading-snug"
      ref={mainheading}
    >
      Welcome to Campus <br className="hidden sm:block" />
      <span className="text-[#2563EB] inline-block">
        Connect
      </span>
    </p>

    <p
      className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl font-medium text-center text-gray-300 italic px-2 sm:px-4"
      ref={data}
    >
      Speak up without fear — your feedback stays anonymous.
      <br className="hidden sm:block" />
      We connect students and management securely and transparently.
    </p>

    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 text-lg">
      <button className="rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-300 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 font-semibold text-white shadow-sm hover:shadow-md text-sm sm:text-base" onClick={scrollToDiv}>
        Explore Complaints
      </button>
    </div>
  </div>
</div>
{
     loader?<Shrimmer/>: <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-12 sm:mt-16 md:mt-20">
        <p className="text-center capitalize font-bold text-[#1E293B] text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-9">
          Your voice matters — let's fix ABES together 🔊
        </p>
        <hr className="my-4 sm:my-6 border-[#E5E7EB] mb-8 sm:mb-10" />
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12" ref={contentbox}>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mb-4 sm:mb-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-44">
              <img
                className="w-full h-full object-cover rounded-full border-[2px] sm:border-[3px] border-black"
                src={home4}
                alt=""
              />
            </div>
            <div className="lg:border-2 lg:border-[#E2E8F0] rounded-2xl w-full sm:w-[75%] h-auto min-h-[5rem] sm:min-h-[6rem] py-4 sm:py-0 sm:h-20 md:h-24 relative sm:right-6 md:right-11 lg:bg-[#F8FAFC] lg:shadow-sm px-4 sm:px-8 md:px-20 md:pr-11 text-sm sm:text-base md:text-lg font-serif italic text-justify sm:text-left md:text-justify rounded-r-full text-content1 flex items-center">Struggling for water shouldn’t be part of student life. When taps run dry or systems fail, it affects everyone. Don’t wait for change — start it with CampusConnect and report water issues directly to your faculty today.</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-end">
            <div className="lg:border-2 lg:border-[#E2E8F0] rounded-l-full w-full sm:w-[75%] h-auto min-h-[5rem] sm:min-h-[6rem] py-4 sm:py-0 sm:h-20 md:h-24 relative sm:left-6 md:left-11 lg:bg-[#F8FAFC] lg:shadow-sm px-4 sm:px-8 md:pl-11 md:pr-20 text-sm sm:text-base md:text-lg font-serif italic text-justify sm:text-left md:text-justify text-content2 flex items-center order-2 sm:order-1">Delays or confusion in the administration office shouldn’t hold students back. Raise your concerns on CampusConnect and help build a smoother, more transparent and responsive system for every student.</div>
            <div className="rounded-full overflow-hidden z-10 mt-4 sm:mt-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-44 order-1 sm:order-2">
              <img
                className="w-full h-full object-cover rounded-full border-[2px] sm:border-[3px] border-black"
                src={home1}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="rounded-full overflow-hidden z-10 mt-4 sm:mt-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-44">
              <img
                className="w-full h-full object-cover rounded-full border-[2px] sm:border-[3px] border-black"
                src={home2}
                alt=""
              />
            </div>
            <div className="lg:border-2 lg:border-[#E2E8F0] rounded-2xl w-full sm:w-[75%] h-auto min-h-[5rem] sm:min-h-[6rem] py-4 sm:py-0 sm:h-20 md:h-24 relative sm:right-6 md:right-11 lg:bg-[#F8FAFC] lg:shadow-sm px-4 sm:px-8 md:px-20 md:pr-11 text-sm sm:text-base md:text-lg font-serif italic text-justify sm:text-left md:text-justify rounded-r-full text-content1 flex items-center">Strong campuses start with strong infrastructure. If you see something broken or unsafe, don’t ignore it — be the change and report it through your voice on CampusConnect to make your campus better for everyone.</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-end">
            <div className="lg:border-2 lg:border-[#E2E8F0] rounded-l-full w-full sm:w-[75%] h-auto min-h-[5rem] sm:min-h-[6rem] py-4 sm:py-0 sm:h-20 md:h-24 relative sm:left-6 md:left-11 lg:bg-[#F8FAFC] lg:shadow-sm px-4 sm:px-8 md:pl-11 md:pr-20 text-sm sm:text-base md:text-lg font-serif italic text-justify sm:text-left md:text-justify text-content2 flex items-center order-2 sm:order-1">Delays or confusion in the administration office shouldn’t hold students back. Raise your concerns on CampusConnect and help build a smoother, more transparent and responsive system for every student.</div>
            <div className="rounded-full overflow-hidden z-10 mt-4 sm:mt-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-44 order-1 sm:order-2">
              <img
                className="w-full h-full object-cover rounded-full border-[2px] sm:border-[3px] border-black"
                src={home3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-12 sm:mt-16 md:mt-20 lg:mt-24" ref={targetRef}>
        <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">I</span>ssues{" "}
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">C</span>overed ⚠️{" "}
        </p>
        <hr className="my-4 sm:my-6 border-[#E5E7EB] mb-6 sm:mb-9" />
      </div>
      <div>
        <IssuesAddressed/>
      </div>
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">W</span>hy{" "}
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">C</span>ampus{" "}
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">C</span>onnect 🤔❓
        </p>
        <hr className="my-4 sm:my-6 border-[#E5E7EB] mb-6 sm:mb-9" />
      </div>
      <div className="px-4 sm:px-6">
        <WhyCampusConnect />
      </div>
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-9 text-[#1E293B]">
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">V</span>aluable{" "}
          <span className="text-[#2563EB] text-3xl sm:text-4xl md:text-5xl">F</span>eedbacks{" "}
        </p>
        <hr className="my-4 sm:my-6 border-[#E5E7EB] mb-6 sm:mb-9" />
      </div>
      <div className='w-full relative px-2 sm:px-4'>
        <i className="fi fi-br-angle-left absolute left-2 sm:left-4 md:left-8 lg:left-28 top-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold bg-white/80 rounded-full p-1 sm:p-2 cursor-pointer z-10" onClick={scrollleft}></i>
        <i className="fi fi-bs-angle-right absolute right-2 sm:right-4 md:right-8 lg:right-28 top-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold bg-white/80 rounded-full p-1 sm:p-2 cursor-pointer z-10" onClick={scrollright}></i>
        <div className='flex scroller h-[100%] overflow-x-scroll' ref={feedbackscroll}>
        <img src={feedback1} alt="" className='shrink-0 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain w-full' />
        <img src={feedback2} alt="" className='shrink-0 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain w-full' />
      </div>
      </div>
    </div>
  )
}

export default Home
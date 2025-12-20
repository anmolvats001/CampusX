import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const About = () => {
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }, []);
    const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/login");
      toast.warn("Login First");
    }
  }, []);
  return (
    <div className="w-full h-fit  pt-16 flex justify-center ">
      <div className=" px-11 py-6 w-full  rounded-2xl">
        <div className="w-full flex justify-center pt-8">
          <h1 className="font-extrabold text-3xl ">🏫 ABOUT</h1>
        </div>
        <div className=" flex justify-center py-12 font-[350] text-lg">
          <div className="w-[70%] flex flex-col gap-7 items-center">
            <div>Campus Connect is a digital platform created to make our college a better and more responsive place for everyone. It allows students to easily report any issues they notice on campus — whether it’s a 💧 leaking tap, 🧹 poor hygiene, broken furniture, or any other maintenance problem. Every complaint submitted is sent directly to the concerned faculty or department for quick action.</div>
          <div>
            Students can also track the status of their complaints 📊 — from submission to recognition and resolution — ensuring full transparency. Faculty members can review, update, and mark issues as ✅ solved once the problem is fixed.
          </div>
          <div>
            Our goal is to build a cleaner, safer, and more connected campus through open communication and teamwork between students and staff. 🤝
          </div>
          </div>
        </div>
            </div>
    </div>
  )
}

export default About;

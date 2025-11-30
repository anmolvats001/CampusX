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
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      video: null,
      id: "water-01",
      hading: "Hello ji",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui consectetur obcaecati, officia, asperiores possimus esse harum praesentium doloremque sint dolores et voluptate veritatis omnis quasi nostrum. Dolor, aut nisi veritatis, ea fuga perspiciatis dignissimos explicabo, ex maiores tempora voluptas suscipit modi!",
      resolved: true,
      checked: true,
      likes: 0,
      dislikes: 0,
      comments: 0,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      video: null,
      id: "water-01",
      hading: "Hello ji",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui consectetur obcaecati, officia, asperiores possimus esse harum praesentium doloremque sint dolores et voluptate veritatis omnis quasi nostrum. Dolor, aut nisi veritatis, ea fuga perspiciatis dignissimos explicabo, ex maiores tempora voluptas suscipit modi!",
      resolved: true,
      checked: true,
      likes: 0,
      dislikes: 0,
      comments: 0,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      video: null,
      id: "water-01",
      hading: "Hello ji",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui consectetur obcaecati, officia, asperiores possimus esse harum praesentium doloremque sint dolores et voluptate veritatis omnis quasi nostrum. Dolor, aut nisi veritatis, ea fuga perspiciatis dignissimos explicabo, ex maiores tempora voluptas suscipit modi!",
      resolved: true,
      checked: true,
      likes: 0,
      dislikes: 0,
      comments: 0,
    },
    
  ];
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
        <div className="flex flex-col gap-7 w-full items-center py-12">
          {data.map((e, i) => {
            return (
              <div className="h-96  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-102 rounded-4xl w-[80%]  relative">
                <div className="flex gap-2.5 px-6 py-2 items-center">
                  
                  <div>
                    <h1 className=" uppercase font-extrabold text-xl px-7 py-3">Director message</h1>
                  </div>
                </div>
                <div className="flex px-5">
                  <div className="w-full px-7 flex gap-5">
                    <img
                      className="h-72 w-48 object-cover rounded-xl"
                      src={e.image}
                      alt=""
                    />
                    <div className="flex flex-col gap-4 ">
                     <p className="text">{e.Content}</p>
                      
                    </div>
                  </div>
                  
                </div>
                <div className="absolute right-5 flex flex-col items-end px-3 bottom-6  w-[30%] font-bold"> 
                  <div>Anmol vats</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default About;

import React, { useContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sider from "../components/Sider";
import RightSider from "../components/RightSider";
import IssueNavBar from "../components/IssueNavBar";
import { AppContext } from "../Context/context";

const IssuesLayout = () => {
  const { commvisible, setcommvis, dark,timeAgo ,profileon,setDark} = useContext(AppContext);
  const textareaRef = useRef();

const handleInput = () => {
  const textarea = textareaRef.current;

  textarea.style.height = "auto";
  const newHeight = Math.max(textarea.scrollHeight, 30);

  textarea.style.height = `${Math.min(newHeight, 100)}px`;
};

  const data = [
  {
    "name": "Arjun Das",
    "profile": "https://randomuser.me/api/portraits/men/32.jpg",
    "publishedOn": "2025-11-26",
    "data": "The air conditioning unit in Lab 405 (Microprocessors Lab) hasn't been working correctly for the last few days. It's either completely off or blowing hot air. Given the concentration of equipment and the number of students, the lab environment becomes extremely hot and uncomfortable, making focused work impossible. Please get the AC repaired immediately.",
    "title": "Faulty AC in Microprocessors Lab (405)",
    "block": "Main Lab",
    "branch": "EEE",
    "liked": true,
    "likes": 41
  },
  {
    "name": "Sakshi Gupta",
    "profile": "https://randomuser.me/api/portraits/women/18.jpg",
    "publishedOn": "2025-11-25",
    "data": "There's a serious lack of power outlets in Classroom 201 in the CD Block. With more project-based work and mandatory laptop usage, students struggle to find a spot to charge their devices during long classes. Requesting installation of more functional charging points to support our academic needs.",
    "title": "Insufficient Power Outlets in Classroom 201",
    "block": "CD",
    "branch": "IT",
    "liked": false,
    "likes": 28
  },
  {
    "name": "Vikram Yadav",
    "profile": "https://randomuser.me/api/portraits/men/77.jpg",
    "publishedOn": "2025-11-24",
    "data": "The main gate entry point needs better traffic management during peak hours (8:30 AM - 9:30 AM). The congestion, especially caused by two-wheelers and staff vehicles, makes it very difficult and risky for pedestrians to enter the campus. Dedicated lanes or a security presence to guide traffic would greatly help.",
    "title": "Traffic Congestion at Main Gate Entry",
    "block": "Gate",
    "branch": "Civil",
    "liked": true,
    "likes": 55
  },
  {
    "name": "Deepika Rao",
    "profile": "https://randomuser.me/api/portraits/women/6.jpg",
    "publishedOn": "2025-11-23",
    "data": "Many of the seating benches outside the AH Block are broken or severely damaged. Students rely on these spots for group study or breaks, and their poor condition makes them unusable. Requesting the maintenance team to repair or replace the damaged outdoor furniture promptly.",
    "title": "Damaged Outdoor Seating near AH Block",
    "block": "AH",
    "branch": "Architecture",
    "liked": false,
    "likes": 15
  },
  {
    "name": "Rohit Kumar",
    "profile": "https://randomuser.me/api/portraits/men/89.jpg",
    "publishedOn": "2025-11-22",
    "data": "The ventilation system in the basement parking area seems to be ineffective. The air is often heavy with vehicle exhaust fumes, which is unhealthy and uncomfortable. This needs immediate inspection and repair to ensure proper air quality and safety for everyone using the parking facility.",
    "title": "Poor Ventilation in Basement Parking",
    "block": "Parking",
    "branch": "Mechanical",
    "liked": true,
    "likes": 39
  },
  {
    "name": "Meena Devi",
    "profile": "https://randomuser.me/api/portraits/women/33.jpg",
    "publishedOn": "2025-11-21",
    "data": "The sports equipment available for general student use, particularly badminton rackets and basketballs, is old and often damaged. Investing in new, better-quality equipment would encourage more student participation in sports and recreation activities after class hours.",
    "title": "Need for New Sports Equipment",
    "block": "Sports Complex",
    "branch": "MBA",
    "liked": true,
    "likes": 20
  },
  {
    "name": "Kartik Jain",
    "profile": "https://randomuser.me/api/portraits/men/19.jpg",
    "publishedOn": "2025-11-20",
    "data": "The process for booking seminar halls for student society events is overly complex and requires too many physical signatures. It would be much more efficient if an online booking and approval system could be implemented, reducing paperwork and saving time for organizers.",
    "title": "Streamline Seminar Hall Booking Process",
    "block": "Admin",
    "branch": "CSE",
    "liked": false,
    "likes": 17
  },
  {
    "name": "Simran Kaur",
    "profile": "https://randomuser.me/api/portraits/women/8.jpg",
    "publishedOn": "2025-11-19",
    "data": "The availability of advanced textbooks and recent international editions in the main library's Civil Engineering section is lacking. Students are often forced to rely on older material or expensive online resources. Requesting an urgent update and expansion of the relevant book inventory.",
    "title": "Outdated Civil Engineering Books in Library",
    "block": "Library",
    "branch": "Civil",
    "liked": true,
    "likes": 30
  },
  {
    "name": "Gaurav Singh",
    "profile": "https://randomuser.me/api/portraits/men/4.jpg",
    "publishedOn": "2025-11-18",
    "data": "The biometric attendance system in the PG Block seems slow and frequently fails to recognize fingerprints, causing long queues and delays, especially before morning classes. It needs recalibration or replacement with a more reliable and faster system to minimize disruption.",
    "title": "Slow Biometric Attendance System in PG Block",
    "block": "PG",
    "branch": "M.Tech",
    "liked": false,
    "likes": 22
  },
  {
    "name": "Nisha Verma",
    "profile": "https://randomuser.me/api/portraits/women/50.jpg",
    "publishedOn": "2025-11-17",
    "data": "There's a persistent, foul smell coming from the drainage near the back side of the Hostel Mess. This is not only unhygienic but also attracts pests. The drainage system needs immediate cleaning and disinfection to resolve this health hazard before it escalates.",
    "title": "Foul Smell from Drainage near Hostel Mess",
    "block": "Hostel",
    "branch": "B.Sc.",
    "liked": true,
    "likes": 48
  },
  {
    "name": "Pranav Hegde",
    "profile": "https://randomuser.me/api/portraits/men/21.jpg",
    "publishedOn": "2025-11-16",
    "data": "The computers in the CAD/CAM lab on the first floor of the Mechanical Block are running very slow. The software often crashes, which wastes valuable lab time, especially during practical sessions. The systems require hardware upgrades or performance optimization to handle modern engineering software.",
    "title": "Slow Computers in CAD/CAM Lab",
    "block": "Mechanical",
    "branch": "Mechanical",
    "liked": false,
    "likes": 26
  },
  {
    "name": "Isha Mittal",
    "profile": "https://randomuser.me/api/portraits/women/95.jpg",
    "publishedOn": "2025-11-15",
    "data": "The notice boards in the common areas of the EC Block are completely cluttered with outdated posters, faded circulars, and unofficial announcements. This makes it impossible to find genuinely current and important information. A clean-up and regular maintenance policy for the notice boards is necessary.",
    "title": "Cluttered Notice Boards in EC Block",
    "block": "EC",
    "branch": "ECE",
    "liked": true,
    "likes": 19
  }
]
  return (
    <div className="w-screen h-screen bg-black">
    <div onClick={()=>{dark?setDark(false):setDark(true)}} className={'fixed bottom-9 right-5 rounded-full  px-4 text-2xl py-3 z-100'}>{dark?<i class="fi fi-ss-moon-stars white text-white"></i>:<i class="fi fi-sr-sun text-yellow-600 text-3xl"></i>}</div>
    <div className="h-screen fixed overflow-y-hidden">
      
      <div className="flex h-full w-screen overflow-y-hidden relative">
        <Sider />
          
          <Outlet />{" "}

        {!profileon&& <RightSider/>}
        {commvisible && (
          <>
            <div
              className={`${
                dark ? "dark" : "light"
              } absolute w-[30%]   z-100 h-full right-0 top-0 px-4 py-2.5 flex justify-center items-center border-l-1 border-gray-800`}
            >
              <div className="h-full overflow-y-scroll w-[100%] pt-5 scroller">
                <p className="font-bold text-xl ">Comments ...</p>
                <div className="flex px-1.5 mt-3 gap-2"><textarea
  ref={textareaRef}
  onInput={handleInput}
  placeholder="Enter your thoughts"
  rows="1"
  className={`focus:outline-0 
    w-[80%] 
    border-gray-800 
    rounded-2xl 
    scroller 
    border-2 
    py-1 
    px-3
    ${dark? "text-gray-300":"text-gray-600"}
    
    resize-none
    overflow-y-auto
    max-h-[100px]
    min-h-[50px]
  `}
></textarea>
<p className={`${
                !dark ? "dark" : "light"
              } rounded-3xl px-3.5 h-10 font-bold py-1 flex justify-center items-center`}>Post</p>
</div>
                <div className="mt-4 flex flex-col gap-3">
                  {data.map((e,i)=>(
                  <div
                    key={i}
                    className="w-full border-gray-800 border-1 rounded-2xl h-fit  px-3.5 py-2.5"
                  >
                                   {" "}
                    <div className="flex flex-col gap-2">
                                       {" "}
                      <div className="flex justify-between">
                        <div className="flex gap-2 px-2.5 ">
                                             {" "}
                          <img
                            src={e.profile}
                            className="w-10 h-10 object-cover rounded-full "
                            alt={`Profile picture of ${e.name}`}
                          />
                                             {" "}
                          <div>
                                                 {" "}
                            <p className="font-semibold  text-sm ">{e.name}</p>{" "}
                                                 {" "}
                            <p className="text-[10px] text-gray-400">
                              ({e.branch})
                            </p>
                                               {" "}
                          </div>
                                             {" "}
                          <p className="text-[12px] font-semibold text-gray-400 px-1 mt-1">
                                                  {timeAgo(e.publishedOn)}     
                                         {" "}
                          </p>
                                           {" "}
                        </div>
                      </div>
                      <div className=" pr-6 pl-12  ">
                                           {" "}
                        <p
                          className={
                            dark
                              ? "text-[14px] text-gray-200"
                              : "text-[14px] text-gray-900"
                          }
                        >
                          {e.data}
                        </p>
                                         {" "}
                      </div>
                      <div className="flex px-11 mt-5 gap-8">
                        <div
                          className={
                            (dark ? "text-gray-500" : "text-gray-700") +
                            " flex cursor-pointer items-center rounded-3xl hover:text-red-800 " +
                            (e.liked && "text-red-800")
                          }
                        >
                          <i class="fi fi-ss-social-network"></i>{" "}
                          <p className="text-xs">{e.likes}</p>
                        </div>
                        <div
                          className={
                            (dark ? "text-gray-500" : "text-gray-700") +
                            " group flex items-center rounded-3xl gap-1 cursor-pointer hover:text-orange-600 relative"
                          }
                        >
                          <i className="fi fi-tr-heart-partner-handshake"></i>
                          <p className="text-sm">{e.comments}</p>

                          <div className="absolute px-3 py-1 bottom-8 left-6 bg-white rounded shadow hidden group-hover:block">
                            agree
                          </div>
                        </div>
                      </div>
                                     {" "}
                    </div>
                                 {" "}
                  </div>
                  ))}
                         {" "}
                </div>
              </div>
            </div>
            <div
              className="absolute w-screen z-99 h-full top-0 bg-black opacity-70  "
              onClick={() => {
                setcommvis(false);
              }}
            ></div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default IssuesLayout;

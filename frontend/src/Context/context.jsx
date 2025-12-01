import { createContext, useEffect, useState } from "react";
import userphoto from "../assets/user1.png"
// 1️⃣ Create Context
export const AppContext = createContext();

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dark,setDark]=useState(true);
  const [val,setVal]=useState("home");
  const [commvisible,setcommvis]=useState(false);
  const [comment,setcomment]=useState([]);
  const [userData,setUserData]=useState({});
  const [profileon, setProfileOn] = useState(() => {
  const saved = localStorage.getItem("profileon");
  return saved ? JSON.parse(saved) : false;
});

useEffect(() => {
  localStorage.setItem("profileon", JSON.stringify(profileon));
}, [profileon]);

  useEffect(()=>{
    setUserData({
      name:"Anmol Vats",
      bio:"Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
      image:`${userphoto}`,
      college:"ABES Engineering College",
      mobile_no:7983704543,
      email:"vatsanmol4@gmail.com",
      branch:"CSE",
      posts:[ {
      name: "Riya Sharma",
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      publishedOn: "2025-01-09",
      resolved: false,
      title: "Poor WIFI Connectivity in New Labs",
      block: "AB2",
      branch: "IT",
      files: [
        {
          src: "https://picsum.photos/id/350/800/500",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/351/800/500",
          type: "image",
        },
      ],
      data: "The WiFi connectivity in the new computer labs of AB2 Block has become a serious issue for students during practical sessions. The network frequently disconnects, speeds drop significantly, and sometimes the system fails to connect at all. This greatly affects students who rely on online tools, coding platforms, and cloud-based resources during lab hours. A reliable internet connection is essential in a technical environment, and these interruptions disrupt the overall learning process. I request the technical team to check the routers and strengthen the network so students can work smoothly without constant interruptions.",
      liked: true,
      comments: 12,
      likes: 45,
    },
    {
      name: "Harsh Verma",
      profile: "https://randomuser.me/api/portraits/men/31.jpg",
      publishedOn: "2025-01-08",
      resolved: true,
      title: "Cleanliness Issue in Boys Washroom",
      block: "BH-1",
      branch: "ECE",
      data: "The cleanliness of the boys’ washroom in BH-1 has been consistently poor for the past month. Dustbins are often overflowing, water leaks from the taps, and floors remain wet and slippery throughout the day. Sometimes there is no handwash or tissue paper, which raises hygiene concerns. A clean washroom is a basic necessity, and its poor condition affects health and comfort. I request the housekeeping team to increase the cleaning frequency and ensure that supplies are regularly maintained.",
      files: [
        {
          src: "https://picsum.photos/id/400/800/500",
          type: "image",
        },
      ],
      liked: false,
      comments: 1,
      likes: 5,
    },

    {
      name: "Sanya Gupta",
      profile: "https://randomuser.me/api/portraits/women/25.jpg",
      publishedOn: "2025-01-11",
      resolved: false,
      title: "Broken Benches in Classroom",
      block: "KC",
      branch: "CSE",
      data: "Several benches in KC Block classrooms, especially on the second floor, are damaged and uncomfortable to use. Some seats are loose, others have missing screws, and a few desks wobble so much that writing becomes almost impossible. This disrupts the learning environment. I request the maintenance team to repair or replace the damaged benches so students can study without discomfort.",
      files: [
        {
          src: "https://picsum.photos/id/111/400/250",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/112/400/250",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/113/400/250",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/114/400/250",
          type: "image",
        },
      ],
      liked: true,
      comments: 8,
      likes: 30,
    },

    {
      name: "Aditya Singh",
      profile: "https://randomuser.me/api/portraits/men/51.jpg",
      publishedOn: "2025-01-12",
      resolved: false,
      title: "Noise Disturbance During Classes",
      block: "AB1",
      branch: "ME",
      data: "There has been continuous noise disturbance near the AB1 classrooms due to ongoing construction and frequent movement of equipment. The loud sounds make it difficult to concentrate, and teachers often pause lectures. I request that construction tasks be scheduled during non-class hours or temporary sound barriers be installed.",
      files: [
        {
          src: "https://picsum.photos/id/212/800/500",
          type: "image",
        },
      ],
      liked: false,
      comments: 4,
      likes: 11,
    },

   ],
   address:"fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
   gender:"Male",

    })

  },[])
    const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hr ago`;
    if (diffDay === 1) return "Yesterday";

    return past.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser,dark,setDark,val,setVal,setcommvis,commvisible,timeAgo,comment,setcomment,userData,setUserData,profileon,setProfileOn}}>
      {children}
    </AppContext.Provider>
  );
};

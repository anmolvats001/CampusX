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
  const [profileon, setProfileOn] = useState(false);
  const [postvis,setPostVis]=useState(false);
  const [filter,setFilter]=useState(null);
  const [PostData,setPostdata]=useState({});
  const [data,setData]=useState([]);
  const [onfile, setOnFile] = useState(null);
  const [on, seton] = useState(false);
  const [inchargelogin,setInchargelogin]=useState(false);
  const [adminlogin,setAdminLogin]=useState(false);
  const [studentLogin,setStudentLogin]=useState(false);
  const [inchargeData,setInchargeData]=useState(null);
  const [adminData,setAdminData]=useState({});
  useEffect(()=>{
let arr = [
  {
    name: "Anmol Vats",
    profile: "https://randomuser.me/api/portraits/men/11.jpg",
    publishedOn: "2025-11-29",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/200/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge", 
    data: "Over the past few weeks, the water situation in the KC Block has become increasingly difficult for students. Basic facilities like drinking water taps and washroom water supply are either running very weak or stop working entirely during peak hours. This creates unnecessary inconvenience, especially for students who spend long hours in classrooms or labs. Several times, we’ve had to leave the building just to find accessible drinking water, which disrupts regular academic schedules. Proper water availability is a fundamental requirement, and its shortage directly affects hygiene, comfort, and overall campus experience. I request that the maintenance team inspect the system in the KC Block and resolve this issue as soon as possible so students can rely on a consistent and safe water supply.",
    title: "Water problem in KC Block",
    block: "KC",
    branch: "CSE",
    problem: "water",
    files: [
      { src: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/04/08/Pictures/water-crisis_b87f0d38-fda2-11e5-a193-21f6840f498e.jpg", type: "image" },
      { src: "https://picsum.photos/id/101/400/250", type: "image" },
      { src: "https://picsum.photos/id/102/400/250", type: "image" },
    ],
    liked: false,
    comments: 5,
    likes: 18,
  },
  {
    name: "Riya Sharma",
    profile: "https://randomuser.me/api/portraits/women/21.jpg",
    publishedOn: "2025-01-09",
    resolvedByStudent: true,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Resolved by Student's name
    verifiedBy: "Riya Sharma",
    title: "Poor WIFI Connectivity in New Labs",
    block: "AB2",
    branch: "IT",
    problem: "administration",
    files: [
      { src: "https://picsum.photos/id/350/800/500", type: "image" },
      { src: "https://picsum.photos/id/351/800/500", type: "image" },
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
    resolvedByStudent: true,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/201/400/250",
    // Updated verifiedBy: Resolved by Incharge (Incharge takes precedence)
    verifiedBy: "Admin/Incharge",
    title: "Cleanliness Issue in Boys Washroom",
    block: "BH-1",
    branch: "ECE",
    problem: "hygiene",
    data: "The cleanliness of the boys’ washroom in BH-1 has been consistently poor for the past month. Dustbins are often overflowing, water leaks from the taps, and floors remain wet and slippery throughout the day. Sometimes there is no handwash or tissue paper, which raises hygiene concerns. A clean washroom is a basic necessity, and its poor condition affects health and comfort. I request the housekeeping team to increase the cleaning frequency and ensure that supplies are regularly maintained.",
    files: [
      { src: "https://picsum.photos/id/400/800/500", type: "image" },
    ],
    liked: false,
    comments: 1,
    likes: 5,
  },
  {
    name: "Sanya Gupta",
    profile: "https://randomuser.me/api/portraits/women/25.jpg",
    publishedOn: "2025-01-11",
    resolvedByStudent: false,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Pending
    verifiedBy: "Pending",
    title: "Broken Benches in Classroom",
    block: "KC",
    branch: "CSE",
    problem: "water",
    data: "Several benches in KC Block classrooms, especially on the second floor, are damaged and uncomfortable to use. Some seats are loose, others have missing screws, and a few desks wobble so much that writing becomes almost impossible. This disrupts the learning environment. I request the maintenance team to repair or replace the damaged benches so students can study without discomfort.",
    files: [
      { src: "https://picsum.photos/id/111/400/250", type: "image" },
      { src: "https://picsum.photos/id/112/400/250", type: "image" },
      { src: "https://picsum.photos/id/113/400/250", type: "image" },
      { src: "https://picsum.photos/id/114/400/250", type: "image" },
    ],
    liked: true,
    comments: 8,
    likes: 30,
  },
  {
    name: "Aditya Singh",
    profile: "https://randomuser.me/api/portraits/men/51.jpg",
    publishedOn: "2025-01-12",
    resolvedByStudent: true,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Resolved by Student's name
    verifiedBy: "Aditya Singh",
    title: "Noise Disturbance During Classes",
    block: "AB1",
    branch: "ME",
    problem: "safety",
    data: "There has been continuous noise disturbance near the AB1 classrooms due to ongoing construction and frequent movement of equipment. The loud sounds make it difficult to concentrate, and teachers often pause lectures. I request that construction tasks be scheduled during non-class hours or temporary sound barriers be installed.",
    files: [
      { src: "https://picsum.photos/id/212/800/500", type: "image" },
    ],
    liked: false,
    comments: 4,
    likes: 11,
  },
  {
    name: "Neha Verma",
    profile: "https://randomuser.me/api/portraits/women/41.jpg",
    publishedOn: "2025-01-13",
    resolvedByStudent: true,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/202/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Mess Food Quality Issue",
    block: "Hostel Block",
    branch: "CE",
    problem: "food",
    data: "The quality of food served in the hostel mess has declined noticeably. Many students reported undercooked chapatis, oily vegetables, and repetitive menus. This directly affects students’ health. I request the mess management to supervise the kitchen, improve hygiene, and provide a more balanced menu.",
    files: [
      { src: "https://picsum.photos/id/35/400/250", type: "image" },
      { src: "https://picsum.photos/id/36/400/250", type: "image" },
    ],
    liked: true,
    comments: 20,
    likes: 72,
  },
  {
    name: "Riya Sharma",
    profile: "https://randomuser.me/api/portraits/women/32.jpg",
    publishedOn: "2025-01-14",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/203/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Frequent Power Cuts in LT Block",
    block: "LT",
    branch: "ECE",
    problem: "administration",
    data: "LT Block has been facing frequent power cuts during lecture hours. This interrupts classes and affects lab equipment. Proper electricity is essential for smooth functioning. I request the maintenance team to look into the issue and ensure uninterrupted supply.",
    files: [
      { src: "https://picsum.photos/id/15/400/250", type: "image" },
      { src: "https://picsum.photos/id/18/400/250", type: "image" },
    ],
    liked: false,
    comments: 7,
    likes: 19,
  },
  {
    name: "Aarav Gupta",
    profile: "https://randomuser.me/api/portraits/men/19.jpg",
    publishedOn: "2025-01-15",
    resolvedByStudent: true,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Resolved by Student's name
    verifiedBy: "Aarav Gupta",
    title: "Unclean Washrooms in AB Block",
    block: "AB",
    branch: "ME",
    problem: "hygiene",
    data: "The washrooms in AB Block are often dirty and lack proper cleaning. Foul smell and shortage of basic supplies make them unhygienic. I request that the cleaning staff increase maintenance frequency.",
    files: [
      { src: "https://picsum.photos/id/100/800/500", type: "image" },
    ],
    liked: true,
    comments: 3,
    likes: 25,
  },
  {
    name: "Priya Verma",
    profile: "https://randomuser.me/api/portraits/women/55.jpg",
    publishedOn: "2025-01-16",
    resolvedByStudent: false,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Pending
    verifiedBy: "Pending",
    title: "Low Quality Food in College Canteen",
    block: "Canteen",
    branch: "CSE",
    problem: "food",
    data: "The food quality in the college canteen has dropped, with stale items and unhygienic servings. This affects students' health. I request the administration to inspect the kitchen and enforce strict hygiene.",
    files: [
      { src: "https://picsum.photos/id/1070/800/500", type: "image" },
      { src: "https://picsum.photos/id/210/400/250", type: "image" },
      { src: "https://picsum.photos/id/211/400/250", type: "image" },
    ],
    liked: true,
    comments: 15,
    likes: 61,
  },
  {
    name: "Harsh Kumar",
    profile: "https://randomuser.me/api/portraits/men/44.jpg",
    publishedOn: "2025-01-17",
    resolvedByStudent: true,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Resolved by Student's name
    verifiedBy: "Harsh Kumar",
    title: "Weak Wi-Fi Connectivity in Library",
    block: "Library",
    branch: "IT",
    problem: "administration",
    data: "Wi-Fi inside the library is extremely weak, affecting research and online study. Students depend on a stable connection, especially during project periods. I request the team to upgrade the routers.",
    files: [
      { src: "https://picsum.photos/id/1053/800/500", type: "image" },
    ],
    liked: false,
    comments: 6,
    likes: 14,
  },
  {
    name: "Nisha Raj",
    profile: "https://randomuser.me/api/portraits/women/62.jpg",
    publishedOn: "2025-01-18",
    resolvedByStudent: true,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/204/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Broken Equipment in Physics Lab",
    block: "Lab Block",
    branch: "EEE",
    problem: "building",
    data: "Many instruments in the Physics lab like voltmeters and resistors are broken or uncalibrated. This affects practical sessions. I request immediate repair or replacement.",
    files: [
      { src: "https://picsum.photos/id/300/800/500", type: "image" },
    ],
    liked: true,
    comments: 2,
    likes: 21,
  },
  {
    name: "Sarthak Singh",
    profile: "https://randomuser.me/api/portraits/men/70.jpg",
    publishedOn: "2025-01-19",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/205/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Parking Space Shortage Near Main Block",
    block: "Main",
    branch: "CSE",
    problem: "administration",
    data: "There is a major shortage of parking space near the Main Block. Students struggle to find parking and get delayed for classes. I request the management to reorganize or expand parking.",
    files: [
      { src: "https://picsum.photos/id/160/400/250", type: "image" },
      { src: "https://picsum.photos/id/161/400/250", type: "image" },
    ],
    liked: true,
    comments: 10,
    likes: 38,
  },
  {
    name: "Simran Kaur",
    profile: "https://randomuser.me/api/portraits/women/67.jpg",
    publishedOn: "2025-01-20",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/206/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Security Issues Near Hostel Road",
    block: "Hostel",
    branch: "MBA",
    problem: "safety",
    data: "The road leading to the hostel has poor lighting, making students feel unsafe. Installing lights and CCTV would improve safety. I request urgent action from the administration.",
    files: [
      { src: "https://picsum.photos/id/20/800/500", type: "image" },
    ],
    liked: false,
    comments: 1,
    likes: 7,
  },
  {
    name: "Yash Kapoor",
    profile: "https://randomuser.me/api/portraits/men/73.jpg",
    publishedOn: "2025-01-21",
    resolvedByStudent: true,
    resolvedByIncharge: false,
    verifiedImage: null,
    // Updated verifiedBy: Resolved by Student's name
    verifiedBy: "Yash Kapoor",
    title: "Broken Benches in Classroom",
    block: "KC",
    branch: "CSE",
    problem: "building",
    data: "Many benches in KC Block are unstable or broken, making it difficult to focus during lectures. I request the maintenance team to repair them immediately.",
    files: [
      { src: "https://picsum.photos/id/115/800/500", type: "image" },
    ],
    liked: true,
    comments: 9,
    likes: 28,
  },
  {
    name: "Kunal Dabas",
    profile: "https://randomuser.me/api/portraits/men/75.jpg",
    publishedOn: "2025-01-22",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/207/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Heating/AC Problem in Auditorium",
    block: "Auditorium",
    branch: "BBA",
    problem: "administration",
    data: "The heating and cooling system in the Main Auditorium is inconsistent. It gets extremely cold during winter lectures and too hot during summer events, making it difficult for attendees to concentrate. I request that the HVAC system be inspected and maintained for proper climate control.",
    files: [
      { src: "https://picsum.photos/id/40/800/500", type: "image" },
    ],
    liked: false,
    comments: 0,
    likes: 16,
  },
];
setInchargeData({
  name:"Incharge ",
  work:"water",
   dob: "2006-05-04",
  address:"fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
   gender:"Male",
  bio:"Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
  image:`${userphoto}`,
   college:"ABES Engineering College",
   mobile_no:7983704543,
   email:"vatsanmol4@gmail.com",
  yourwork:[
    {
    name: "Kunal Dabas",
    profile: "https://randomuser.me/api/portraits/men/75.jpg",
    publishedOn: "2025-01-22",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/207/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Heating/AC Problem in Auditorium",
    block: "Auditorium",
    branch: "BBA",
    problem: "administration",
    data: "The heating and cooling system in the Main Auditorium is inconsistent. It gets extremely cold during winter lectures and too hot during summer events, making it difficult for attendees to concentrate. I request that the HVAC system be inspected and maintained for proper climate control.",
    files: [
      { src: "https://picsum.photos/id/40/800/500", type: "image" },
    ],
    liked: false,
    comments: 0,
    likes: 16,
  },
  {
    name: "Simran Kaur",
    profile: "https://randomuser.me/api/portraits/women/67.jpg",
    publishedOn: "2025-01-20",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/206/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Security Issues Near Hostel Road",
    block: "Hostel",
    branch: "MBA",
    problem: "safety",
    data: "The road leading to the hostel has poor lighting, making students feel unsafe. Installing lights and CCTV would improve safety. I request urgent action from the administration.",
    files: [
      { src: "https://picsum.photos/id/20/800/500", type: "image" },
    ],
    liked: false,
    comments: 1,
    likes: 7,
  },
  {
    name: "Sarthak Singh",
    profile: "https://randomuser.me/api/portraits/men/70.jpg",
    publishedOn: "2025-01-19",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/205/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Parking Space Shortage Near Main Block",
    block: "Main",
    branch: "CSE",
    problem: "administration",
    data: "There is a major shortage of parking space near the Main Block. Students struggle to find parking and get delayed for classes. I request the management to reorganize or expand parking.",
    files: [
      { src: "https://picsum.photos/id/160/400/250", type: "image" },
      { src: "https://picsum.photos/id/161/400/250", type: "image" },
    ],
    liked: true,
    comments: 10,
    likes: 38,
  },
  {
    name: "Nisha Raj",
    profile: "https://randomuser.me/api/portraits/women/62.jpg",
    publishedOn: "2025-01-18",
    resolvedByStudent: true,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/204/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Broken Equipment in Physics Lab",
    block: "Lab Block",
    branch: "EEE",
    problem: "building",
    data: "Many instruments in the Physics lab like voltmeters and resistors are broken or uncalibrated. This affects practical sessions. I request immediate repair or replacement.",
    files: [
      { src: "https://picsum.photos/id/300/800/500", type: "image" },
    ],
    liked: true,
    comments: 2,
    likes: 21,
  },
  {
    name: "Neha Verma",
    profile: "https://randomuser.me/api/portraits/women/41.jpg",
    publishedOn: "2025-01-13",
    resolvedByStudent: true,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/202/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Mess Food Quality Issue",
    block: "Hostel Block",
    branch: "CE",
    problem: "food",
    data: "The quality of food served in the hostel mess has declined noticeably. Many students reported undercooked chapatis, oily vegetables, and repetitive menus. This directly affects students’ health. I request the mess management to supervise the kitchen, improve hygiene, and provide a more balanced menu.",
    files: [
      { src: "https://picsum.photos/id/35/400/250", type: "image" },
      { src: "https://picsum.photos/id/36/400/250", type: "image" },
    ],
    liked: true,
    comments: 20,
    likes: 72,
  },
  {
    name: "Riya Sharma",
    profile: "https://randomuser.me/api/portraits/women/32.jpg",
    publishedOn: "2025-01-14",
    resolvedByStudent: false,
    resolvedByIncharge: true,
    verifiedImage: "https://picsum.photos/id/203/400/250",
    // Updated verifiedBy: Resolved by Incharge
    verifiedBy: "Admin/Incharge",
    title: "Frequent Power Cuts in LT Block",
    block: "LT",
    branch: "ECE",
    problem: "administration",
    data: "LT Block has been facing frequent power cuts during lecture hours. This interrupts classes and affects lab equipment. Proper electricity is essential for smooth functioning. I request the maintenance team to look into the issue and ensure uninterrupted supply.",
    files: [
      { src: "https://picsum.photos/id/15/400/250", type: "image" },
      { src: "https://picsum.photos/id/18/400/250", type: "image" },
    ],
    liked: false,
    comments: 7,
    likes: 19,
  },
  ]
});
setAdminData({
  name:"Admin ",
  work:"water",
   dob: "2006-05-04",
  address:"fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
   gender:"Male",
  bio:"Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
  image:`${userphoto}`,
   college:"ABES Engineering College",
   mobile_no:7983704543,
   email:"vatsanmol4@gmail.com",
   
})
setData(arr)
},[])

  useEffect(()=>{
    setUserData({
      name:"Anmol Vats",
      bio:"Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
      image:`${userphoto}`,
      college:"ABES Engineering College",
      mobile_no:7983704543,
      email:"vatsanmol4@gmail.com",
      branch:"CSE",
       dob: "2006-05-04",
       address:"fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
   gender:"Male",
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
    <AppContext.Provider value={{ user, setUser,dark,setDark,val,setVal,setcommvis,commvisible,timeAgo,comment,setcomment,userData,setUserData,profileon,setProfileOn,postvis,setPostVis,filter,setFilter,PostData,setPostdata,data,setData,on,onfile,seton,setOnFile,inchargelogin,setInchargelogin,adminlogin,setAdminLogin,studentLogin,setStudentLogin,inchargeData,setInchargeData,setAdminData,adminData}}>
      {children}
    </AppContext.Provider>
  );
};

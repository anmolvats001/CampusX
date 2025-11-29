import { useContext } from "react";
import { AppContext } from "../Context/context";

const MainPage = () => {
  const { dark } = useContext(AppContext);
  const isWithin24Hours = (dateString) => {
  const published = new Date(dateString);
  const now = new Date();

  const diffMs = now - published; // difference in milliseconds
  const diffHours = diffMs / (1000 * 60 * 60);

  return diffHours;
};
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

  const data= [
  {
    name: "Anmol Vats",
    profile: "https://randomuser.me/api/portraits/men/11.jpg",
    publishedOn: "2025-11-29",
    resolved: false,
    data:
      "Over the past few weeks, the water situation in the KC Block has become increasingly difficult for students. Basic facilities like drinking water taps and washroom water supply are either running very weak or stop working entirely during peak hours. This creates unnecessary inconvenience, especially for students who spend long hours in classrooms or labs. Several times, we’ve had to leave the building just to find accessible drinking water, which disrupts regular academic schedules. Proper water availability is a fundamental requirement, and its shortage directly affects hygiene, comfort, and overall campus experience. I request that the maintenance team inspect the system in the KC Block and resolve this issue as soon as possible so students can rely on a consistent and safe water supply.",
    title: "Water problem in KC Block",
    block: "KC",
    branch: "CSE",
    files: [
      {
        src: "https://hls.harvard.edu/wp-content/uploads/2023/09/water-crisis-in-Dehli-tanker-collection-GettyImages-1241338599-2400x1600-1-800x1180.jpg",
        type: "image",
      },
      {
        src: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201808/sewage-plant-x404.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Riya Sharma",
    profile: "https://randomuser.me/api/portraits/women/21.jpg",
    publishedOn: "2025-01-09",
    resolved: false,
    title: "Poor WIFI Connectivity in New Labs",
    block: "AB2",
    branch: "IT",
    data:
      "The WiFi connectivity in the new computer labs of AB2 Block has become a serious issue for students during practical sessions. The network frequently disconnects, speeds drop significantly, and sometimes the system fails to connect at all. This greatly affects students who rely on online tools, coding platforms, and cloud-based resources during lab hours. A reliable internet connection is essential in a technical environment, and these interruptions disrupt the overall learning process. I request the technical team to check the routers and strengthen the network so students can work smoothly without constant interruptions.",
    files: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/router-1861612_1280.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Harsh Verma",
    profile: "https://randomuser.me/api/portraits/men/31.jpg",
    publishedOn: "2025-01-08",
    resolved: true,
    title: "Cleanliness Issue in Boys Washroom",
    block: "BH-1",
    branch: "ECE",
    data:
      "The cleanliness of the boys’ washroom in BH-1 has been consistently poor for the past month. Dustbins are often overflowing, water leaks from the taps, and floors remain wet and slippery throughout the day. Sometimes there is no handwash or tissue paper, which raises hygiene concerns. A clean washroom is a basic necessity, and its poor condition affects health and comfort. I request the housekeeping team to increase the cleaning frequency and ensure that supplies are regularly maintained.",
    files: [
      {
        src: "https://cdn.pixabay.com/photo/2017/03/23/12/04/toilet-2164353_1280.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Sanya Gupta",
    profile: "https://randomuser.me/api/portraits/women/25.jpg",
    publishedOn: "2025-01-11",
    resolved: false,
    title: "Broken Benches in Classroom",
    block: "KC",
    branch: "CSE",
    data:
      "Several benches in KC Block classrooms, especially on the second floor, are damaged and uncomfortable to use. Some seats are loose, others have missing screws, and a few desks wobble so much that writing becomes almost impossible. This disrupts the learning environment. I request the maintenance team to repair or replace the damaged benches so students can study without discomfort.",
    files: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/02/20/27/classroom-1793338_1280.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Aditya Singh",
    profile: "https://randomuser.me/api/portraits/men/51.jpg",
    publishedOn: "2025-01-12",
    resolved: false,
    title: "Noise Disturbance During Classes",
    block: "AB1",
    branch: "ME",
    data:
      "There has been continuous noise disturbance near the AB1 classrooms due to ongoing construction and frequent movement of equipment. The loud sounds make it difficult to concentrate, and teachers often pause lectures. I request that construction tasks be scheduled during non-class hours or temporary sound barriers be installed.",
    files: [
      {
        src: "https://cdn.pixabay.com/photo/2016/02/18/22/16/drill-1206858_1280.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Neha Verma",
    profile: "https://randomuser.me/api/portraits/women/41.jpg",
    publishedOn: "2025-01-13",
    resolved: true,
    title: "Mess Food Quality Issue",
    block: "Hostel Block",
    branch: "CE",
    data:
      "The quality of food served in the hostel mess has declined noticeably. Many students reported undercooked chapatis, oily vegetables, and repetitive menus. This directly affects students’ health. I request the mess management to supervise the kitchen, improve hygiene, and provide a more balanced menu.",
    files: [
      {
        src: "https://cdn.pixabay.com/photo/2017/05/07/08/56/canteen-2291603_1280.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Riya Sharma",
    profile: "https://randomuser.me/api/portraits/women/32.jpg",
    publishedOn: "2025-01-14",
    resolved: false,
    title: "Frequent Power Cuts in LT Block",
    block: "LT",
    branch: "ECE",
    data:
      "LT Block has been facing frequent power cuts during lecture hours. This interrupts classes and affects lab equipment. Proper electricity is essential for smooth functioning. I request the maintenance team to look into the issue and ensure uninterrupted supply.",
    files: [
      { src: "https://media.istockphoto.com/id/1134226246/photo/power-cut-in-building.jpg", type: "image" },
      { src: "https://cdn.pixabay.com/photo/2016/11/14/03/16/breaker-1821745_1280.jpg", type: "image" },
    ],
  },

  {
    name: "Aarav Gupta",
    profile: "https://randomuser.me/api/portraits/men/19.jpg",
    publishedOn: "2025-01-15",
    resolved: true,
    title: "Unclean Washrooms in AB Block",
    block: "AB",
    branch: "ME",
    data:
      "The washrooms in AB Block are often dirty and lack proper cleaning. Foul smell and shortage of basic supplies make them unhygienic. I request that the cleaning staff increase maintenance frequency.",
    files: [
      {
        src: "https://media.istockphoto.com/id/1166853924/photo/dirty-public-restroom.jpg",
        type: "image",
      },
    ],
  },

  {
    name: "Priya Verma",
    profile: "https://randomuser.me/api/portraits/women/55.jpg",
    publishedOn: "2025-01-16",
    resolved: false,
    title: "Low Quality Food in College Canteen",
    block: "Canteen",
    branch: "CSE",
    data:
      "The food quality in the college canteen has dropped, with stale items and unhygienic servings. This affects students' health. I request the administration to inspect the kitchen and enforce strict hygiene.",
    files: [
      { src: "https://media.istockphoto.com/id/1345426131/photo/dirty-food.jpg", type: "image" },
      { src: "https://cdn.pixabay.com/photo/2017/03/17/11/17/dirty-2156514_1280.jpg", type: "image" },
    ],
  },

  {
    name: "Harsh Kumar",
    profile: "https://randomuser.me/api/portraits/men/44.jpg",
    publishedOn: "2025-01-17",
    resolved: false,
    title: "Weak Wi-Fi Connectivity in Library",
    block: "Library",
    branch: "IT",
    data:
      "Wi-Fi inside the library is extremely weak, affecting research and online study. Students depend on a stable connection, especially during project periods. I request the team to upgrade the routers.",
    files: [
      { src: "https://media.istockphoto.com/id/1207810977/photo/wifi-router-and-wireless-internet-access.jpg", type: "image" },
    ],
  },

  {
    name: "Nisha Raj",
    profile: "https://randomuser.me/api/portraits/women/62.jpg",
    publishedOn: "2025-01-18",
    resolved: true,
    title: "Broken Equipment in Physics Lab",
    block: "Lab Block",
    branch: "EEE",
    data:
      "Many instruments in the Physics lab like voltmeters and resistors are broken or uncalibrated. This affects practical sessions. I request immediate repair or replacement.",
    files: [
      { src: "https://media.istockphoto.com/id/1367967091/photo/science-lab-with-broken-equipment.jpg", type: "image" },
    ],
  },

  {
    name: "Sarthak Singh",
    profile: "https://randomuser.me/api/portraits/men/70.jpg",
    publishedOn: "2025-01-19",
    resolved: false,
    title: "Parking Space Shortage Near Main Block",
    block: "Main",
    branch: "CSE",
    data:
      "There is a major shortage of parking space near the Main Block. Students struggle to find parking and get delayed for classes. I request the management to reorganize or expand parking.",
    files: [
      { src: "https://media.istockphoto.com/id/1072477120/photo/overcrowded-parking-lot.jpg", type: "image" },
    ],
  },

  {
    name: "Simran Kaur",
    profile: "https://randomuser.me/api/portraits/women/67.jpg",
    publishedOn: "2025-01-20",
    resolved: true,
    title: "Security Issues Near Hostel Road",
    block: "Hostel",
    branch: "MBA",
    data:
      "The road leading to the hostel has poor lighting, making students feel unsafe. Installing lights and CCTV would improve safety. I request urgent action from the administration.",
    files: [
      { src: "https://media.istockphoto.com/id/157528804/photo/dark-street.jpg", type: "image" },
    ],
  },

  {
    name: "Yash Kapoor",
    profile: "https://randomuser.me/api/portraits/men/73.jpg",
    publishedOn: "2025-01-21",
    resolved: false,
    title: "Broken Benches in Classroom",
    block: "KC",
    branch: "CSE",
    data:
      "Many benches in KC Block are unstable or broken, making it difficult to focus during lectures. I request the maintenance team to repair them immediately.",
    files: [
      { src: "https://media.istockphoto.com/id/1169672491/photo/old-broken-school-desks.jpg", type: "image" },
    ],
  },
];

  return (
    <div className={`${dark ? "dark" : "light"} h-screen w-[100%] border border-gray-800`}>
      <div className="overflow-y-scroll scroller h-full">
        <div className=" h-fit flex items-center pt-20 flex-col gap-14">
          {
            data.map((e,i)=>{
              return <div className="w-full border-gray-800 border-1 rounded-2xl h-fit  px-3.5 py-2.5">
                <div className="flex flex-col gap-2">
                      <div className="flex gap-2 "><img src={e.profile} className="w-10 h-10 object-cover rounded-full " alt="" /><div><p className="font-semibold  text-sm ">{e.name}</p> <p className="text-[10px] text-gray-500">({e.branch})</p></div><p className="text-[12px] font-semibold text-gray-400 px-1">
                        {timeAgo(e.publishedOn)}
                      </p>
                  </div>
                  <div className=" px-7 "><p className="text-[15px] text-gray-200">{e.data}</p></div>
                  <div className="max-h-[500px] h-[500px] px-7"><div className="h-[500px] bg-amber-500 flex flex-wrap">

                    {
                      e.files.map((a,i)=>(
                        <div><img src={a.src} alt="" className="h-[500px]"/></div>
                      ))
                    }
                    </div></div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MainPage;

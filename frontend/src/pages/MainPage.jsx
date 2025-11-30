import { useContext, useEffect } from "react";
import { AppContext } from "../Context/context";

const MainPage = () => {
  const { dark } = useContext(AppContext);
 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);
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

const data = [
    {
      name: "Anmol Vats",
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      publishedOn: "2025-11-29",
      resolved: false,
      data: "Over the past few weeks, the water situation in the KC Block has become increasingly difficult for students. Basic facilities like drinking water taps and washroom water supply are either running very weak or stop working entirely during peak hours. This creates unnecessary inconvenience, especially for students who spend long hours in classrooms or labs. Several times, we’ve had to leave the building just to find accessible drinking water, which disrupts regular academic schedules. Proper water availability is a fundamental requirement, and its shortage directly affects hygiene, comfort, and overall campus experience. I request that the maintenance team inspect the system in the KC Block and resolve this issue as soon as possible so students can rely on a consistent and safe water supply.",
      title: "Water problem in KC Block",
      block: "KC",
      branch: "CSE",
      files: [
        {
          src: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/04/08/Pictures/water-crisis_b87f0d38-fda2-11e5-a193-21f6840f498e.jpg", 
          type: "image",
        },
        {
          src: "https://picsum.photos/id/101/400/250", 
          type: "image",
        },
        {
          src: "https://picsum.photos/id/102/400/250", 
          type: "image",
        },
      ],
      liked: false, 
      comments: 5, 
      likes: 18, 
    },

    {
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

    {
      name: "Neha Verma",
      profile: "https://randomuser.me/api/portraits/women/41.jpg",
      publishedOn: "2025-01-13",
      resolved: true,
      title: "Mess Food Quality Issue",
      block: "Hostel Block",
      branch: "CE",
      data: "The quality of food served in the hostel mess has declined noticeably. Many students reported undercooked chapatis, oily vegetables, and repetitive menus. This directly affects students’ health. I request the mess management to supervise the kitchen, improve hygiene, and provide a more balanced menu.",
      files: [
        {
          src: "https://picsum.photos/id/35/400/250",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/36/400/250", 
          type: "image",
        },
      ],
      liked: true, 
      comments: 20, 
      likes: 72, 
    },

    {
      name: "Riya Sharma",
      profile: "https://randomuser.me/api/portraits/women/32.jpg",
      publishedOn: "2025-01-14",
      resolved: false,
      title: "Frequent Power Cuts in LT Block",
      block: "LT",
      branch: "ECE",
      data: "LT Block has been facing frequent power cuts during lecture hours. This interrupts classes and affects lab equipment. Proper electricity is essential for smooth functioning. I request the maintenance team to look into the issue and ensure uninterrupted supply.",
      files: [
        {
          src: "https://picsum.photos/id/15/400/250", 
          type: "image",
        },
        {
          src: "https://picsum.photos/id/18/400/250", 
          type: "image",
        },
      ],
      liked: false, 
      comments: 7, 
      likes: 19, 
    },

    {
      name: "Aarav Gupta",
      profile: "https://randomuser.me/api/portraits/men/19.jpg",
      publishedOn: "2025-01-15",
      resolved: true,
      title: "Unclean Washrooms in AB Block",
      block: "AB",
      branch: "ME",
      data: "The washrooms in AB Block are often dirty and lack proper cleaning. Foul smell and shortage of basic supplies make them unhygienic. I request that the cleaning staff increase maintenance frequency.",
      files: [
        {
          src: "https://picsum.photos/id/100/800/500",
          type: "image",
        },
      ],
      liked: true, 
      comments: 3, 
      likes: 25, 
    },

    {
      name: "Priya Verma",
      profile: "https://randomuser.me/api/portraits/women/55.jpg",
      publishedOn: "2025-01-16",
      resolved: false,
      title: "Low Quality Food in College Canteen",
      block: "Canteen",
      branch: "CSE",
      data: "The food quality in the college canteen has dropped, with stale items and unhygienic servings. This affects students' health. I request the administration to inspect the kitchen and enforce strict hygiene.",
      files: [
        {
          src: "https://picsum.photos/id/1070/800/500",
          type: "image",
        },
        {
          src: "https://picsum.photos/id/210/400/250", 
          type: "image",
        },
        {
          src: "https://picsum.photos/id/211/400/250", 
          type: "image",
        },
      ],
      liked: true, 
      comments: 15, 
      likes: 61, 
    },

    {
      name: "Harsh Kumar",
      profile: "https://randomuser.me/api/portraits/men/44.jpg",
      publishedOn: "2025-01-17",
      resolved: false,
      title: "Weak Wi-Fi Connectivity in Library",
      block: "Library",
      branch: "IT",
      data: "Wi-Fi inside the library is extremely weak, affecting research and online study. Students depend on a stable connection, especially during project periods. I request the team to upgrade the routers.",
      files: [
        {
          src: "https://picsum.photos/id/1053/800/500",
          type: "image",
        },
      ],
      liked: false, 
      comments: 6, 
      likes: 14, 
    },

    {
      name: "Nisha Raj",
      profile: "https://randomuser.me/api/portraits/women/62.jpg",
      publishedOn: "2025-01-18",
      resolved: true,
      title: "Broken Equipment in Physics Lab",
      block: "Lab Block",
      branch: "EEE",
      data: "Many instruments in the Physics lab like voltmeters and resistors are broken or uncalibrated. This affects practical sessions. I request immediate repair or replacement.",
      files: [
        {
          src: "https://picsum.photos/id/300/800/500",
          type: "image",
        },
      ],
      liked: true, 
      comments: 2, 
      likes: 21, 
    },

    {
      name: "Sarthak Singh",
      profile: "https://randomuser.me/api/portraits/men/70.jpg",
      publishedOn: "2025-01-19",
      resolved: false,
      title: "Parking Space Shortage Near Main Block",
      block: "Main",
      branch: "CSE",
      data: "There is a major shortage of parking space near the Main Block. Students struggle to find parking and get delayed for classes. I request the management to reorganize or expand parking.",
      files: [
        {
          src: "https://picsum.photos/id/160/400/250", 
          type: "image",
        },
        {
          src: "https://picsum.photos/id/161/400/250", 
          type: "image",
        },
      ],
      liked: true, 
      comments: 10, 
      likes: 38, 
    },

    {
      name: "Simran Kaur",
      profile: "https://randomuser.me/api/portraits/women/67.jpg",
      publishedOn: "2025-01-20",
      resolved: true,
      title: "Security Issues Near Hostel Road",
      block: "Hostel",
      branch: "MBA",
      data: "The road leading to the hostel has poor lighting, making students feel unsafe. Installing lights and CCTV would improve safety. I request urgent action from the administration.",
      files: [
        {
          src: "https://picsum.photos/id/20/800/500",
          type: "image",
        },
      ],
      liked: false, 
      comments: 1, 
      likes: 7, 
    },

    {
      name: "Yash Kapoor",
      profile: "https://randomuser.me/api/portraits/men/73.jpg",
      publishedOn: "2025-01-21",
      resolved: false,
      title: "Broken Benches in Classroom",
      block: "KC",
      branch: "CSE",
      data: "Many benches in KC Block are unstable or broken, making it difficult to focus during lectures. I request the maintenance team to repair them immediately.",
      files: [
        {
          src: "https://picsum.photos/id/115/800/500",
          type: "image",
        },
      ],
      liked: true, 
      comments: 9, 
      likes: 28, 
    },
    {
      name: "Kunal Dabas",
      profile: "https://randomuser.me/api/portraits/men/75.jpg",
      publishedOn: "2025-01-22",
      resolved: false,
      title: "Heating/AC Problem in Auditorium",
      block: "Auditorium",
      branch: "BBA",
      data: "The heating and cooling system in the Main Auditorium is inconsistent. It gets extremely cold during winter lectures and too hot during summer events, making it difficult for attendees to concentrate. I request that the HVAC system be inspected and maintained for proper climate control.",
      files: [
        {
          src: "https://picsum.photos/id/40/800/500",
          type: "image",
        },
      ],
      liked: false, 
      comments: 0, 
      likes: 16, 
    },
  ];
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[100%] border border-gray-800 `}
    >
      <div className="overflow-y-scroll w-full scroller h-full relative">
        <div className=" h-fit flex items-center pt-20 flex-col gap-14">
          {data.map((e, i) => {
            return (
              <div key={i} className="w-full border-gray-800 border-1 rounded-2xl h-fit  px-3.5 py-2.5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
    <div className="flex gap-2 px-2.5 ">
                    <img
                      src={e.profile}
                      className="w-10 h-10 object-cover rounded-full "
                      alt={`Profile picture of ${e.name}`}
                    />
                    <div>
                      <p className="font-semibold  text-sm ">{e.name}</p>{" "}
                      <p className="text-[10px] text-gray-400">({e.branch})</p>
                    </div>
                    <p className="text-[12px] font-semibold text-gray-400 px-1 mt-1">
                      {timeAgo(e.publishedOn)}
                    </p>
                  </div>
<p className={(e.resolved?"text-green-500":"text-red-500")+" font-semibold text-xs  mr-16"}>{e.resolved?"Resolved":"Pending"}</p>
</div>
                  <div className=" px-9  ">
                    <p className={dark?"text-[15px] text-gray-200":"text-[15px] text-gray-900"}>{e.data}</p>
                  </div>
                  <div className="max-h-[500px] w-full h-fit px-7">
                    <div className="w-full mt-3.5 overflow-hidden rounded-xl">
                      {e.files && e.files.length === 1 && (
                        <div className="max-h-[500px]">
                          <img
                            src={e.files[0].src}
                            className="h-full w-full object-cover rounded-xl"
                            alt={`Attached image for ${e.title}`}
                          />
                        </div>
                      )}

                      {e.files && e.files.length === 2 && (
                        <div className="grid grid-cols-2 gap-1 max-h-[500px]">
                          {e.files.map((a, j) => (
                            <div key={j}>
                              <img
                                src={a.src}
                                className="w-full max-h-full object-cover rounded-xl"
                                alt={`Attached image ${j+1} for ${e.title}`}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {e.files && e.files.length === 3 && (
                        <div className="grid grid-cols-3 gap-1 h-[500px]">
                          <div className="col-span-2">
                            <img
                              src={e.files[0].src}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 1 for ${e.title}`}
                            />
                          </div>
                          <div className="grid grid-rows-2 gap-1">
                            <img
                              src={e.files[1].src}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 2 for ${e.title}`}
                            />
                            <img
                              src={e.files[2].src}
                              className="w-full h-full object-cover rounded-xl"
                              alt={`Attached image 3 for ${e.title}`}
                            />
                          </div>
                        </div>
                      )}

                      {e.files && e.files.length === 4 && (
                        <div className="grid grid-cols-2 gap-1 max-h-[500px]">
                          {e.files.map((a, k) => (
                            <div key={k} className="h-[250px]">
                              <img
                                src={a.src}
                                className="w-full h-full object-cover rounded-xl"
                                alt={`Attached image ${k+1} for ${e.title}`}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
<div className="flex px-11 mt-5 gap-8"><div className={(dark?"text-gray-500":"text-gray-700") +" flex cursor-pointer items-center rounded-3xl hover:text-red-800 "+(e.liked&&"text-red-800")}><i class="fi fi-ss-social-network"></i> <p className="text-xs">{e.likes}</p></div>
<div className={(dark?"text-gray-500":"text-gray-700") +" flex items-center rounded-3xl gap-1 cursor-pointer hover:text-blue-500"}>
    <i className="fi fi-ts-comment-dots text-sm"></i> <p className="text-sm">{e.comments}</p>
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

<div className={(dark?"text-gray-500":"text-gray-700") +" flex items-center rounded-3xl cursor-pointer hover:text-green-700 gap-1"}><i className="fi fi-rr-share-square text-sm"></i><p className="text-xs">share</p></div></div>
                </div>
              </div>
            );
          })}
        </div>
<div className={`${
        !dark ? "bg-black text-white" : "bg-white text-black"
      }" sticky bottom-10 right-10 w-16 h-16  float-right flex justify-center items-center rounded-full cursor-pointer`}><p className={`${
        !dark ? "bg-black text-white" : "bg-white text-black"
      } text-4xl font-bold`}>+</p></div>
      </div>
    </div>
  );
};

export default MainPage;
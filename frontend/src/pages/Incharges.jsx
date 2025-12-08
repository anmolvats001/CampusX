import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import userphoto from "../assets/user1.png";
import { toast } from "react-toastify";
const Incharges = () => {
  const [incharges, setIncharges] = useState([]);
  const { data, dark } = useContext(AppContext);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [val,setval]=useState("no");
  const removetheincharge = () => {
  toast(
    <div className="flex items-center gap-3">
      <span className="text-xs">Wanna Remove the Incharge:</span>

      {/* YES BUTTON */}
      <button
        className={`${dark ? "bg-gray-800 text-white" : "bg-gray-200"} px-3 py-1 rounded`}
        onClick={() => {
          setval("yes");
          console.log("YES clicked");
          toast.dismiss(); // close toast immediately
        }}
      >
        Yes
      </button>

      {/* NO BUTTON */}
      <button
        className={`${dark ? "bg-gray-800 text-white" : "bg-gray-200"} px-3 py-1 rounded`}
        onClick={() => {
          setval("no");
          console.log("NO clicked");
          toast.dismiss();
        }}
      >
        No
      </button>
    </div>,
    {
      autoClose: false, // important: keep toast open until user clicks
      closeOnClick: false,
    }
  );
};

  useEffect(() => {
    setIncharges([
      {
        name: "Incharge 21",
        work: "water",
        dob: "2006-05-04",
        address:
          "fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
        gender: "Male",
        bio: "Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
        image: `${userphoto}`,
        college: "ABES Engineering College",
        mobile_no: 7983704543,
        email: "vatsanmol4@gmail.com",
        yourwork: [
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
        ],
      },
      {
        name: "Incharge 2",
        work: "water",
        dob: "2006-05-04",
        address:
          "fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
        gender: "Male",
        bio: "Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
        image: `${userphoto}`,
        college: "ABES Engineering College",
        mobile_no: 7983704543,
        email: "vatsanmol4@gmail.com",
        yourwork: [
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
        ],
      },
      {
        name: "Incharge 2",
        work: "water",
        dob: "2006-05-04",
        address:
          "fafrana road bhrampuri gali no. 2 Modinagar (201204) ghaziabad uttarPradesh",
        gender: "Male",
        bio: "Frontend Developer with a growing skill set in React, GSAP, and modern web design patterns. I enjoy turning ideas into interactive, user-friendly experiences and collaborating on projects that challenge me to think deeper. Currently expanding my knowledge in scalable UI systems, accessibility, and performance-oriented development.",
        image: `${userphoto}`,
        college: "ABES Engineering College",
        mobile_no: 7983704543,
        email: "vatsanmol4@gmail.com",
        yourwork: [
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
        ],
      },
    ]);
  }, []);
  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative thisPage`}
    >
      <div className="w-full px-3.5 flex pt-5 items-center">
        <p className="text-2xl font-semibold capitalize px-3 pt-2  w-full ">
          Incharges
        </p>
      </div>
      <div className="overflow-y-scroll w-full scroller h-full relative">
               {" "}
        <div className=" h-fit flex items-center py-8 pb-16 px-5 flex-col gap-10">
          {incharges.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-xl relative"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="user"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.work}</p>
                </div>
              </div>

              {/* Basic Details */}
              <div className="mt-4 space-y-1 capitalize">
                <p>
                  <span className="font-semibold">Gender:</span> {item.gender}
                </p>
                <p>
                  <span className="font-semibold">DOB:</span> {item.dob}
                </p>
                <p>
                  <span className="font-semibold">College:</span> {item.college}
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {item.mobile_no}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {item.email}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {item.address}
                </p>
              </div>
              <div className="flex gap-3 ">
                <p>Resolved:</p>
                <p>{item.yourwork.length}</p>
              </div>
              {/* Bio */}
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {item.bio}
              </p>

              <div className="absolute top-5 right-6">
                <i
                  className="fi fi-br-menu-dots-vertical "
                  onClick={() => {
                    setOpenMenuId(openMenuId === index ? null : index);
                  }}
                ></i>

                {openMenuId === index && (
                  <div className={"px-3.5 absolute right-6 rounded-2xl py-2"}>
                    <p
                      className="text-red-700 cursor-pointer"
                      onClick={() => removetheincharge(index)}
                    >
                      Remove
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incharges;

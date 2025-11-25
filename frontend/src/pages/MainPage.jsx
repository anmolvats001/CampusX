import React, { useEffect } from 'react'
import MediaScroller from '../components/MediaScroller'
import video from "../assets/video.mp4"
import redo from "../assets/redo.png"
import comment from "../assets/comments.png"
import IssueNavBar from '../components/IssueNavBar'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate=useNavigate();
  useEffect(()=>{

  },[])
  const data = [
    {
      name: "Anmol Vats",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
      branch: "CSE",
      liked: true,
      likes: 10,
      comments: 100,
      resolved: true,
      date: "10-10-2006",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia.",
      files: [
        {
          src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
          type: "image",
        },
        {
          src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          type: "image",
        },
        {
          src: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
          type: "image",
        },
      ],
    },
    {
      name: "Anmol Vats",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
      branch: "CSE",
      liked: false,
      likes: 10,
      comments: 100,
      resolved: true,
      date: "10-10-2006",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia.",
      files: [
        {
          src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
          type: "image",
        },
        {
          src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          type: "image",
        },
        {
          src: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
          type: "image",
        },
      ],
    },
    {
      name: "Anmol Vats",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
      branch: "CSE",
      liked: true,
      likes: 10,
      comments: 100,
      resolved: false,
      date: "10-10-2006",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia.",
      files: [
        {
          src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
          type: "image",
        },
        {
          src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          type: "image",
        },
        {
          src: video,
          type: "video",
        },
      ],
    },
    {
      name: "Anmol Vats",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
      branch: "CSE",
      liked: true,
      likes: 10,
      comments: 100,
      resolved: false,
      date: "10-10-2006",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia.",
      files: [
        {
          src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
          type: "image",
        },
        {
          src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          type: "image",
        },
        {
          src: video,
          type: "video",
        },
      ],
    },
  ];

  return (
    <div className="h-fit w-full bg-black flex flex-col gap-12 items-center pt-6 pb-16">
      <IssueNavBar />

      {data.map((e, i) => (
        <div key={i} className="w-[35%] h-fit text-white" onClick={()=>{
          navigate(`/issues/info/${i+1}`);
        }}>

          <div className="w-full h-fit py-3 flex items-center gap-3">
            <img
              src={e.profile}
              className="w-10 h-10 object-cover rounded-full"
              alt=""
            />
            <div>
              <p className="font-bold">{e.name}</p>
              <p className="text-gray-500 text-xs">{e.date}</p>
            </div>
          </div>

          <div className="relative border-2 border-gray-900 px-3 py-2 rounded-xl">
            <MediaScroller items={e.files} />

            <div className="right-4 top-3 absolute capitalize">
              {e.resolved ? (
                <p className="rounded-3xl bg-green-500 px-3 py-1">resolved</p>
              ) : (
                <p className="rounded-3xl px-3 py-1 bg-gray-400 text-white">
                  unresolved
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-8 text-white pt-8 pb-1">
            <div className="flex gap-1">
              {!e.liked ? (
                <i className="fi fi-rr-heart text-3xl"></i>
              ) : (
                <i className="fi fi-sr-heart text-3xl"></i>
              )}
            </div>

            <img src={comment} className="w-8 h-8" alt="" />
            <img src={redo} className="w-6 h-6" alt="" />
          </div>

          <p className="text-white">{e.likes} likes</p>

          <div className="relative w-full pt-3">
            <p className="text-gray-100 line-clamp-2 pr-12">{e.content}</p>
            <div className="absolute bottom-0 right-0 flex items-center">
              <p className="text-blue-400 px-1.5 rounded-2xl font-medium text-sm">
                more...
              </p>
            </div>
          </div>

          <div className="mt-3.5">
            <p className="text-gray-400 capitalize">view all comments</p>
            <p className="text-gray-600 capitalize mt-2.5">
              Add your comment ...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;

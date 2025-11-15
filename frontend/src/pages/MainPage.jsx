import React from 'react'
import MediaScroller from '../components/MediaScroller'
import video from "../assets/video.mp4"
import redo from "../assets/redo.png"
import comment from "../assets/comments.png"
const MainPage = () => {
  const data=[{
    name:"Anmol Vats",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
    branch:"CSE",
    liked:true,
    likes:10,
    comments:100,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia, pariatur consectetur autem quia, placeat aspernatur iure unde aut. Perspiciatis, unde fuga!",
    files:[{
      src:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      type:"image",
    },
    {
      src:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      type:"image"
    },
    {
      src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
      type:"image"
    }
  ]

  },
{
    name:"Anmol Vats",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
    branch:"CSE",
    likes:10,
    liked:false,
    comments:100,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia, pariatur consectetur autem quia, placeat aspernatur iure unde aut. Perspiciatis, unde fuga!",
    files:[{
      src:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      type:"image",
    },
    {
      src:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      type:"image"
    },
    {
      src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
      type:"image"
    }
  ]

  },
{
    name:"Anmol Vats",
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
    branch:"CSE",
    likes:10,
    liked:true,
    comments:100,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis odit impedit officia, pariatur consectetur autem quia, placeat aspernatur iure unde aut. Perspiciatis, unde fuga!",
    files:[{
      src:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      type:"image",
    },
    {
      src:"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      type:"image"
    },
    {
      src:video,
      type:"video"
    }
  ]

  }]
  return (
    <div className='h-fit w-full bg-black flex flex-col gap-12 items-center pt-40 pb-16'>
      {data.map((e,i)=>(
        <div className='w-[35%] h-[fit]'>
        <div className='w-full h-20% flex gap-3 items-center text-white'>
          <img src={e.profile} className='w-10 h-10 object-cover rounded-full' alt="" />
          <p>Anmol vats</p>
        </div>
        <MediaScroller items={e.files}/>
        <div className='flex gap-8 text-white py-8'>
          <div className='flex gap-1'>
            {!e.liked ?(<i class="fi fi-rr-heart"></i>):(<i class="fi fi-sr-heart"></i>)}
            <p className='text-gray-400'>{e.likes}</p>
          </div>
          <img src={comment} className='w-4 h-4 relative top-0.5' alt="" />

          <img src={redo} className='w-4 h-4 relative top-0.5' alt="" />
        </div>
        <div className="relative w-full">
  <p className="text-gray-200 line-clamp-2 pr-12">
    {e.content}
  </p>

  <div className="absolute bottom-0 right-0 flex items-center">
    <p className="text-blue-400 px-1.5 rounded-2xl font-medium text-sm">more...</p>
  </div>
</div>

      </div>
      ))}
      </div>
  )
}

export default MainPage

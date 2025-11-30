import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import video from "../assets/video.mp4"

const Info = () => {
    const {id}=useParams();
    const [data,setData]=useState({});
    const [mainImage,setMainImage]=useState();
    const [comments,setComments]=useState([]);
     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
      }, []);
    useEffect(()=>{
       let val={
              name: "Anmol Vats",
              profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
              branch: "CSE",
              liked: true,
              likes: 10,
              comments: 100,
              resolved: false,
              date: "10-10-2006",
              title:"hello ji ",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, delectus dignissimos. Laborum voluptates reiciendis accusamus unde fuga, natus odio architecto tempore non molestiae temporibus cupiditate ullam iure nisi nemo minus expedita consequuntur neque corporis obcaecati ipsam accusantium consectetur. Quos repellat ullam delectus, illo provident recusandae vel.",
              files: [
                {
                  src: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
                  type: "image",
                },
                {
                  src: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
                  type: "image",
                },
                {
                  src: video,
                  type: "video",
                },
              ],
            }
            let comments=[{name: "Anmol Vats",
              profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
              branch: "CSE",
              liked: true,
              likes: 10,
              date: "10-10-2006",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, delectus dignissimos. Laborum voluptates reiciendis accusamus unde fuga, natus odio architecto tempore non molestiae temporibus cupiditate ullam iure nisi nemo minus expedita consequuntur neque corporis obcaecati ipsam accusantium consectetur. Quos repellat ullam delectus, illo provident recusandae vel.",
              
            },
          {name: "Anmol Vats",
              profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
              branch: "CSE",
              liked: true,
              likes: 10,
              date: "10-10-2006",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, delectus dignissimos. Laborum voluptates reiciendis accusamus unde fuga, natus odio architecto tempore non molestiae temporibus cupiditate ullam iure nisi nemo minus expedita consequuntur neque corporis obcaecati ipsam accusantium consectetur. Quos repellat ullam delectus, illo provident recusandae vel.",
              
            },
          {name: "Anmol Vats",
              profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s",
              branch: "CSE",
              liked: true,
              likes: 10,
              date: "10-10-2006",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, delectus dignissimos. Laborum voluptates reiciendis accusamus unde fuga, natus odio architecto tempore non molestiae temporibus cupiditate ullam iure nisi nemo minus expedita consequuntur neque corporis obcaecati ipsam accusantium consectetur. Quos repellat ullam delectus, illo provident recusandae vel.",
              
            }];
            setComments(comments);
        setData(val)
            val?.files?.map((e,i)=>{
                if(e.type=="image"){setMainImage(e.src);
                    return;
                }
            })
    },[])
  return (
    <div className="h-fit w-full bg-black flex flex-col gap-12 items-center pt-16 pb-16">
        <div className='w-[50%] h-fit max-h-[60%] flex flex-col  items-center'>
            <img className='object-cover w-[50%] h-[500px]' src={mainImage} alt="" />
            
        </div>
        <div className='flex w-full justify-center'>
            <div className='flex gap-2 self-start w-[40%] items-center'><img className='w-10 rounded-full h-10 object-cover' src={data.profile} alt="" /><div><p className='text-[13px] font-semibold text-white'>{data.name}</p><p className='text-[9px] text-gray-400 '>({data.branch})</p></div></div>
        </div>
        <div className='w-[45%] flex flex-col ml-12 gap-4'>
            <p className='text-2xl text-white capitalize font-bold '>{data.title}</p>
            <p className='font-xs text-gray-300 '>{data.content}</p>
        </div>
        <div className='w-[45%] flex flex-col ml-12 gap-4'>
          <p className='font-bold text-xl text-gray-400'>Comments ...</p>
          <div className='flex gap-2 w-full justify-between'><textarea name="" id=""placeholder='Enter the comment ....' className='border-gray-800 border-2 px-2 py-1.5 text-white focus:outline-none rounded-xl w-[90%] resize-none'></textarea> <div className='flex flex-col justify-center '>
            <p className='border-none flex justify-center items-center bg-blue-500 text-white rounded-4xl h-fit px-4 py-1.5'>Post</p></div></div>
        </div>
        <div className='w-[45%] flex flex-col ml-12 gap-4'>
          <div className='flex flex-wrap '>
            {
              data?.files?.map((e,i)=>{
                return <div>
                { e.type=="image"&& <img src={e.src} alt="" />}
                {e.type=="video"&& <video autoPlay muted src={e.src}/>}
                </div>
              })            
            }
          </div>
        </div>
        <div>
          {

          }
        </div>
    </div>
  )
}

export default Info;

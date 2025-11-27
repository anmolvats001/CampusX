import React, { useContext } from 'react'
import { AppContext } from '../Context/context'

const RightSider = () => {
    const {dark,setDark}=useContext(AppContext);
    const data=[{
      title:"New water complain from KC Block",
      block:"KC"
    },{
      title:"Chair broken and it tears the cloth",
      block:"AB"
    },{
      title:"excessive leakage",
      block:"Bhabha"
    },
    {
      title:"Teacher misbehaving in classes",
      block:"Ramanujan"
    }
  ]
  return (
   <div className={(dark ? "dark":"light") +" h-full w-[30%] border-[1px] border-gray-800 relative"}>
    <div onClick={()=>{dark?setDark(false):setDark(true)}} className={'absolute bottom-9 right-5 rounded-full  px-4 text-2xl py-3 '}>{dark?<i class="fi fi-ss-moon-stars white "></i>:<i class="fi fi-sr-sun text-yellow-600 text-3xl"></i>}</div>
    <div className='pt-10 px-4'>
      <div className='py-2.5 px-3.5 outfit border-1 border-gray-800 rounded-3xl'>
        <p className='text-2xl  font-semibold'>What's happening ?</p>
        <div className=' mt-6 flex flex-col gap-3'>
          {
            data.map((e,i)=>(
              <div key={i}>
                <p>{e.title}</p>
                <p className='text-[13px] text-gray-500'>({e.block} Block)</p>
              </div>
            ))
          }
          </div>
          
      </div>
      <div className='py-2.5 px-3.5 outfit text-gray-600 text-sm flex gap-2 mt-4'><a href="">+91 7983704504</a><p>|</p> <a href="">vatsanmol4@gmail.com</a><p>|</p> <a href="">policy</a></div>
      <div className='py-2.5 px-3.5 outfit text-gray-600 text-sm flex justify-center'><p>© 2025 CampusX</p></div>
    </div>
    </div>
  )
}

export default RightSider

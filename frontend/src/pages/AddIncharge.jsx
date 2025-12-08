import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../Context/context';
import user from "../assets/user.png"
import { useNavigate } from 'react-router-dom';
const AddIncharge = () => {
    const [inchargeImg,setinchargeImg]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [bio,setbio]=useState("");
    const [work,setwork]=useState("Water");
    const [address,setAddress]=useState("");
   const {dark,adminlogin}=useContext(AppContext);
   const navigate=useNavigate();
    // const {backEndUrl,atoken}=useContext(AdminContext);
 
    const onSubmitHandler=async(e)=>{
        toast.success("added successfully")
        navigate("/issues/home")
    //     e.preventDefault();
    //     try {
    //         if(!inchargeImg){
    //             toast.error("Image Not Selected")
    //         }
    //     const formData= new FormData();
    //     formData.append("image",inchargeImg);
    //     formData.append("name",name);
    //     formData.append("email",email);
    //     formData.append("password",password);
    //     formData.append("experience",experience);
    //     formData.append("fees",fees);
    //     formData.append("bio",bio);
    //     formData.append("work",work);
    //     formData.append("degree",degree);
    //     formData.append("address",JSON.stringify({line1:address1,line2:address2}));
    //     const {data}=await axios.post(backEndUrl+"/api/admin/add-Incharge",formData,{headers:{atoken}});
    //     console.log(data)
    //     if(data.success){
    //         toast.success(data.message);
    //         setinchargeImg(false);
    //         setName("");
    //         setPassword("");
    //         setEmail("");
    //         setbio("");
    //         setDegree("");
    //         setFees("");
    //         setAddress1("")
    //         setAddress2("")
    //     }
    //     else{
    //         toast.error(data.message)
    //     }
    //     } catch (error) {
    //         toast.error(error.message)
    //         console.log(error)
    //     }
    }
  return (
   adminlogin && <div
      className={`${
        dark ? "dark" : "light"
      } h-screen w-[45%] border border-gray-800 relative`}
    >
        <p className="text-2xl font-semibold capitalize px-5 pt-7  w-full ">
         Add Incharge
        </p>
      <div className="w-full px-3.5 flex pt-5 items-center">
        
     <div className=' px-8 py-8 border-1 border-gray-700 rounded-2xl w-full max-w-4xl max-h-[80vh] scroller overflow-y-scroll'>
            <div className='flex items-center gap-4 mb-8 '>
                <label htmlFor="inch-img">
                    <img className='w-16 h-16 object-cover overflow-hidden rounded-full cursor-pointer' src={inchargeImg? URL.createObjectURL(inchargeImg) :user} alt="" />
                </label>
                <input onChange={(e)=>setinchargeImg(e.target.files[0])} type="file" id='inch-img' hidden/>
                <p>Upload Incharge <br /> Picture</p>
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-10'>
                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Incharge Name</p>
                        <input onChange={(e)=>setName(e.target.value)} value={name} className='border  border-gray-700 rounded px-3 py-2' type="text"placeholder='Name' required />
                    </div>
                    <div  className='flex-1 flex flex-col gap-1'>
                        <p>Incharge Email</p>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border  border-gray-700 rounded px-3 py-2' type="email"placeholder='Email' required />
                    </div>
                    <div  className='flex-1 flex flex-col gap-1'>
                        <p>Incharge Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-gray-700 rounded px-3 py-2' type="password"placeholder='Password' required />
                    </div>

                    
                </div>
                <div className='w-full lg:flex-1 flex flex-col gap-1'>
                    <div  className='flex-1 flex flex-col gap-1'>
                        <p>work</p>
                        <select key={1} onChange={(e)=>setwork(e.target.value)} value={work} className={'border  border-gray-700 rounded px-3 py-2 '+(dark?"dark":"light")}>
                            <option value="Water">Water</option>
                            <option value="Administration">Administration</option>
                            <option value="Food">Food</option>
                            <option value="security">security</option>
                            <option value="Hygiene">Hygiene</option>
                            <option value="Building">Building</option>
                        </select>
                    </div>
                    
                    <div  className='flex-1 flex flex-col gap-1'>
                        <p>Address</p>
                        <input onChange={(e)=>setAddress(e.target.value)} value={address} className='border  border-gray-700 rounded px-3 py-2' type="text"placeholder='address 1' required />
                       
                    </div>
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2'>Bio Incharge</p>
                  <textarea onChange={(e)=>setbio(e.target.value)} value={bio} className='w-full px-4 pt-2 border rounded border-gray-700 focus:outline-none resize-none' type="text"placeholder='Write bio Incharge' required />
            </div>
            <button type='submit' className='primary px-10 py-3 mt-2.5 rounded-full text-white' onClick={onSubmitHandler}>Add Incharge</button>
        </div>
    </div>
    </div>
  )
}
export default AddIncharge

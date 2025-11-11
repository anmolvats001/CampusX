import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-fit px-20 pt-28 flex justify-center '>
      <div className='border-2 px-4 py-6 w-[60%] rounded-2xl border-[#B38B59]'>
        <h1 className='text-center uppercase text-[#EDE3C8] text-3xl  font-extrabold'>Contact info 📞</h1>
         <p class="text-center my-6 border-b-2 border-b-[#B38B59]  text-[#d9d2bc] rounded-2xl ">
    Have questions, suggestions, or found an issue on campus? <br /> 
    We’d love to hear from you! Reach out using the details below.
  </p>
        <div className=' text-[20px] flex flex-col gap-6 mt-7 p-3 text-[#d9d2bc]'>
            <div className='flex gap-5'><h3 className='font-semibold'>Email :</h3><a href="mailto:campusconnect0611@gmail.com">campusconnect0611@gmail.com</a></div>
            <div className='flex gap-5'><h3 className='font-semibold'>Mobile :</h3><a href="tel:+91 7983704504">+91 7983704504</a></div>
            <div className='flex gap-5'><h3 className='font-semibold'>Address :</h3><h4> 19th KM Stone <br /> NH-09 Ghaziabad (UP) <br /> PIN - 201009</h4></div>
            <div className='flex gap-5'><h3 className='font-semibold'>Follow us :</h3><div className='flex gap-4'><a href="">Instagram</a>  | <a href="">FaceBook</a>  |   <a href="">Linkedin</a></div></div>
        </div>
      </div>
    </div>
  )
}

export default Contact

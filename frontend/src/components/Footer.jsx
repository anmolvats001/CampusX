import React from 'react'
import logo from '../assets/logo.png';  // if this file is inside src/

const Footer = () => {
  return (
    <footer className='w-full bg-[#2B2B2B] border-t-2 border-t-[#B38B59] h-20 relative top-14 px-16 text-white font-sans'>
     
      <div className='flex gap-7 items-center'>
        <img className='w-20 object-cover' src={logo} alt="" />
      <div className='flex w-6xl justify-between'>
        <div className='flex gap-6'>
          <p> © 2025 Campus Connect. All rights reserved. | </p>
      <p>Help us to make our college best</p>
        </div>
        <div className='flex justify-between gap-8'>
           <a className='flex items-center gap-1' href="tel:+91 7983704504"><i className="fi fi-sr-phone-call relative top-0.5"></i><p>+91 7983704504</p></a> 
       <a className='flex items-center gap-0.5' href="mailto:campusconnect0611@gmail.com"><i className="fi fi-rr-envelope relative mt-1"></i><p>campusconnect0611@gmail.com</p></a>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer

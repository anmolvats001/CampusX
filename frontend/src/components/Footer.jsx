import React from 'react'
import logo from '../assets/logo.png';  // if this file is inside src/
import { NavLink, useNavigate } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='w-full bg-[#424242] border-t-2 border-t-[#B38B59] h-fit relative top-14 text-white font-sans'>
    <div className='flex justify-between'>
       <div className=' py-10 px-16 rounded-2xl shadow-lg'>
        
        <p className='font-bold text-xl relative left-5 top-4 text-blue-50'>CONTACT US</p>
        <div className='text-[18px] flex flex-col gap-6 mt-7 p-3 text-amber-100'>
          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-black'>Email :</h3>
            <a
              href='mailto:campusconnect0611@gmail.com'
              className='hover:text-[#1D4ED8] transition-all duration-200'
            >
              campusconnect0611@gmail.com
            </a>
          </div>

          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-black'>Mobile :</h3>
            <a
              href='tel:+917983704504'
              className='hover:text-[#1D4ED8] transition-all duration-200'
            >
              +91 7983704504
            </a>
          </div>

          <div className='flex gap-5'>
            <h3 className='font-semibold text-black'>Address :</h3>
            <h4 className='leading-relaxed'>
              19th KM Stone , NH-09 Ghaziabad (UP) <br /> PIN - 201009
            </h4>
          </div>

          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-black'>Follow us :</h3>
            <div className='flex gap-4 text-[#5673c2]'>
              <a href='' className='hover:text-black transition-all duration-200'>
                Instagram
              </a>
              |
              <a href='' className='hover:text-black transition-all duration-200'>
                Facebook
              </a>
              |
              <a href='' className='hover:text-black transition-all duration-200'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3  pt-15 pr-60'>
        <p className='font-bold text-xl text-blue-50'>QUICK LINKS</p>
        <a href={"/"}>Home</a>
        <a href={"/issues"}>Issues</a>
        <a href={"/about"}>About</a>
        <a href={"/report"}>Report</a>
      </div>
      <div className='flex flex-col gap-3  pt-15 pr-60'>
        <a href={"/privacy"}>Privacy Policy</a>
        <a href={"/contact"}>Contact Us</a>
        <a href={"/team"}>Our Team</a>
      </div>
    </div>
      <div className='flex gap-7 items-center  bg-[#2b2b2b] px-16'>
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

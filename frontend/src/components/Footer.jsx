import React from 'react'
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#424242] border-t-2 border-t-[#B38B59] h-fit relative top-14 text-white font-sans'>
      <div className='flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
        {/* Contact Section */}
        <div className='py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 rounded-xl sm:rounded-2xl shadow-lg w-full lg:w-1/2 mb-6 lg:mb-0'>
          <p className='font-bold text-lg sm:text-xl relative lg:left-5 top-4 text-blue-50'>CONTACT US</p>
          <div className='text-sm sm:text-base lg:text-[18px] flex flex-col gap-4 sm:gap-5 lg:gap-6 mt-5 sm:mt-6 lg:mt-7 p-2 sm:p-3 text-amber-100'>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center'>
              <h3 className='font-semibold text-gray-400 whitespace-nowrap'>Email :</h3>
              <a
                href='mailto:campusconnect0611@gmail.com'
                className='hover:text-[#1D4ED8] transition-all duration-200 break-all sm:break-normal'
              >
                campusconnect0611@gmail.com
              </a>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center'>
              <h3 className='font-semibold text-gray-400 whitespace-nowrap'>Mobile :</h3>
              <a
                href='tel:+917983704504'
                className='hover:text-[#1D4ED8] transition-all duration-200'
              >
                +91 7983704504
              </a>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>
              <h3 className='font-semibold text-gray-400 whitespace-nowrap'>Address :</h3>
              <h4 className='leading-relaxed text-sm sm:text-base'>
                19th KM Stone , NH-09 Ghaziabad (UP) <br /> PIN - 201009
              </h4>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center'>
              <h3 className='font-semibold text-gray-400 whitespace-nowrap'>Follow us :</h3>
              <div className='flex gap-3 sm:gap-4 text-[#5673c2] flex-wrap'>
                <a href='https://www.instagram.com/camp_us.connect/' className='hover:text-gray-400 transition-all duration-200 text-sm sm:text-base'>
                  Instagram
                </a>
                <span className='text-gray-500'>|</span>
                <a href='https://www.facebook.com/profile.php?id=61585172416064' className='hover:text-gray-400 transition-all duration-200 text-sm sm:text-base'>
                  Facebook
                </a>
                <span className='text-gray-500'>|</span>
                <a href='https://www.linkedin.com/in/anmol-vats-821592336/' className='hover:text-gray-400 transition-all duration-200 text-sm sm:text-base'>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Sections */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 lg:gap-0 w-full lg:w-1/2 lg:pl-8 xl:pl-12'>
          <div className='flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 lg:pt-15'>
            <p className='font-bold text-lg sm:text-xl text-blue-50'>QUICK LINKS</p>
            <a href={"/"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>Home</a>
            <a href={"/issues/home"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>Issues</a>
            <a href={"/about"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>About</a>
            <a href={"/feedback"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>feedback</a>
          </div>
          
          <div className='flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 lg:pt-15'>
            <a href={"/privacy"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>Privacy Policy</a>
            <a href={"/contact"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>Contact Us</a>
            <a href={"/team"} className='hover:text-[#1D4ED8] transition-all duration-200 text-sm sm:text-base'>Our Team</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-7 items-center bg-[#2b2b2b] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5'>
        <img className='w-12 sm:w-16 lg:w-20 object-cover' src={logo} alt="Campus Connect Logo" />
        
        <div className='flex flex-col lg:flex-row w-full justify-between items-center lg:items-start gap-4 lg:gap-0'>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 text-center sm:text-left'>
            <p className='text-xs sm:text-sm'>© 2025 Campus Connect. All rights reserved.</p>
            <p className='text-xs sm:text-sm hidden sm:block'>|</p>
            <p className='text-xs sm:text-sm'>Help us to make our college best</p>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 text-sm'>
            <a className='flex items-center gap-1 hover:text-[#1D4ED8] transition-all duration-200 text-xs sm:text-sm' href="tel:+91 7983704504">
              <i className="fi fi-sr-phone-call relative top-0.5 text-xs sm:text-sm"></i>
              <p>+91 7983704504</p>
            </a> 
            <a className='flex items-center gap-1 hover:text-[#1D4ED8] transition-all duration-200 text-xs sm:text-sm' href="mailto:campusconnect0611@gmail.com">
              <i className="fi fi-rr-envelope relative mt-0.5 text-xs sm:text-sm"></i>
              <p>campusconnect0611@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
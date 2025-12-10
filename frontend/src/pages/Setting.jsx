import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const {dark, setcommvis} = useContext(AppContext);
    const navigate = useNavigate();
    const [contactOpen, setContactOpen] = useState(false);
    
    useEffect(() => {
        setcommvis(false)
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);
    
    return (
        <div
            className={`${dark ? "dark" : "light"} h-screen w-full  lg:w-[45%] border border-gray-800 relative`}
        >
            <div className="overflow-y-scroll w-full scroller h-full relative">
                {/* Header */}
                <p className='text-xl sm:text-2xl lg:text-3xl font-bold pt-6  px-12 '>
                    Settings
                </p>
                
                {/* Settings List */}
                <div className='flex flex-col gap-2 sm:gap-3 lg:gap-3.5 px-4 sm:px-6 lg:px-10 capitalize pt-4 sm:pt-5 lg:pt-6 font-semibold'>
                    {/* Edit Profile */}
                    <div 
                        className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`} 
                        onClick={() => navigate("/issues/edit-profile")}
                    >
                        <p className='text-sm sm:text-base'>Edit Profile</p>
                        <i className="fi fi-br-angle-small-right text-sm sm:text-base"></i>
                    </div>
                    
                    {/* Change Password */}
                    <div 
                        className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`} 
                        onClick={() => navigate("/issues/change-pass")}
                    >
                        <p className='text-sm sm:text-base'>Change Password</p>
                        <i className="fi fi-br-angle-small-right text-sm sm:text-base"></i>
                    </div>
                    
                    {/* Contact - Updated for mobile click */}
                    <div className="relative">
                        <div 
                            className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`}
                            onClick={() => setContactOpen(!contactOpen)}
                        >
                            <p className='text-sm sm:text-base'>Contact</p>
                            <i className={`fi fi-br-angle-small-right text-sm sm:text-base transition-transform duration-300 ${contactOpen ? 'rotate-90' : ''}`}></i>
                        </div>
                        
                        {/* Contact Details */}
                        <div 
                            className={`
                                flex flex-col gap-2 text-gray-500 ml-4 sm:ml-6 
                                overflow-hidden transition-all duration-300 ease-in-out
                                text-xs sm:text-sm
                                ${dark ? 'text-gray-400' : 'text-gray-600'}
                                ${contactOpen 
                                    ? 'max-h-96 opacity-100 my-2' 
                                    : 'max-h-0 opacity-0'
                                }
                            `}
                        >
                            <div className="p-1 hover:text-gray-300">
                                <a 
                                    href="mailto:vatsanmol4@gmail.com" 
                                    className='hover:text-blue-400 transition-colors block py-1'
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center gap-2">
                                        <i className="fi fi-sr-envelope text-xs"></i>
                                        <span>vatsanmol4@gmail.com</span>
                                    </div>
                                </a>
                            </div>
                            <div className="p-1 hover:text-gray-300">
                                <a 
                                    href="tel:+917983704504" 
                                    className='hover:text-blue-400 transition-colors block py-1'
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center gap-2">
                                        <i className="fi fi-sr-phone-call text-xs"></i>
                                        <span>+91 7983704504</span>
                                    </div>
                                </a>
                            </div>
                            <div className="p-1 hover:text-gray-300">
                                <a 
                                    href="#" 
                                    className='hover:text-blue-400 transition-colors block py-1'
                                    onClick={(e) => { e.stopPropagation(); /* Handle Facebook click */ }}
                                >
                                    <div className="flex items-center gap-2">
                                        <i className="fi fi-brands-facebook text-xs"></i>
                                        <span>Facebook</span>
                                    </div>
                                </a>
                            </div>
                            <div className="p-1 hover:text-gray-300">
                                <a 
                                    href="#" 
                                    className='hover:text-blue-400 transition-colors block py-1'
                                    onClick={(e) => { e.stopPropagation(); /* Handle Instagram click */ }}
                                >
                                    <div className="flex items-center gap-2">
                                        <i className="fi fi-brands-instagram text-xs"></i>
                                        <span>Instagram</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Help */}
                    <div 
                        className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`} 
                        onClick={() => navigate("/help")}
                    >
                        <p className='text-sm sm:text-base'>Help</p>
                        <i className="fi fi-br-angle-small-right text-sm sm:text-base"></i>
                    </div>
                    
                    {/* Give Feedback */}
                    <div 
                        className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`}
                    >
                        <p className='text-sm sm:text-base'>Give Feedback</p>
                        <i className="fi fi-br-angle-small-right text-sm sm:text-base"></i>
                    </div>
                </div>
                
                {/* Logout Button */}
                <div className='px-4 sm:px-8 lg:px-20 py-6 sm:py-7 flex justify-end'>
                    <p 
                        className='font-bold px-3 sm:px-3 py-1.5 sm:py-1 bg-red-600 hover:bg-red-700 text-white rounded-xl sm:rounded-2xl cursor-pointer transition-colors text-sm sm:text-base'
                        onClick={() => navigate("/")}
                    >
                        Logout
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Setting;
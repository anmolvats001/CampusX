import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const {dark, setcommvis} = useContext(AppContext);
    const navigate = useNavigate();
    
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
                    
                    {/* Contact */}
                    <div className="group">
                        <div className={`flex justify-between py-2 px-3 rounded-lg cursor-pointer border-b border-gray-800 ${dark ? "hover:bg-gray-900" : "hover:bg-gray-100"} transition-colors`}>
                            <p className='text-sm sm:text-base'>Contact</p>
                            <i className="fi fi-br-angle-small-right text-sm sm:text-base"></i>
                        </div>
                        
                        <div className="flex flex-col gap-2 text-gray-500 ml-4 sm:ml-6 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:my-2 text-xs sm:text-sm">
                            <div className="hover:text-gray-300 p-1">
                                <a href="mailto:vatsanmol4@gmail.com" className='hover:text-blue-400 transition-colors'>vatsanmol4@gmail.com</a>
                            </div>
                            <div className="hover:text-gray-300 p-1">
                                <a href="tel:+917983704504" className='hover:text-blue-400 transition-colors'>+91 7983704504</a>
                            </div>
                            <div className="hover:text-gray-300 p-1">
                                <a href="#" className='hover:text-blue-400 transition-colors'>Facebook</a>
                            </div>
                            <div className="hover:text-gray-300 p-1">
                                <a href="#" className='hover:text-blue-400 transition-colors'>Instagram</a>
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

export default Setting
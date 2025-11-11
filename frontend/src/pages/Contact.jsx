import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-fit px-20 pt-28 flex justify-center bg-[#F9FAFB]'>
      <div className='border border-gray-200 px-10 py-10 w-[60%] rounded-2xl shadow-lg bg-white'>
        <h1 className='text-center uppercase text-[#1E3A8A] text-3xl font-extrabold mb-4'>
          Contact Info 📞
        </h1>

        <p className='text-center my-6 border-b border-gray-300 pb-4 text-gray-600'>
          Have questions, suggestions, or found an issue on campus? <br />
          We’d love to hear from you! Reach out using the details below.
        </p>

        <div className='text-[18px] flex flex-col gap-6 mt-7 p-3 text-gray-700'>
          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-[#2563EB]'>Email :</h3>
            <a
              href='mailto:campusconnect0611@gmail.com'
              className='hover:text-[#1D4ED8] transition-all duration-200'
            >
              campusconnect0611@gmail.com
            </a>
          </div>

          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-[#2563EB]'>Mobile :</h3>
            <a
              href='tel:+917983704504'
              className='hover:text-[#1D4ED8] transition-all duration-200'
            >
              +91 7983704504
            </a>
          </div>

          <div className='flex gap-5'>
            <h3 className='font-semibold text-[#2563EB]'>Address :</h3>
            <h4 className='leading-relaxed'>
              19th KM Stone <br /> NH-09 Ghaziabad (UP) <br /> PIN - 201009
            </h4>
          </div>

          <div className='flex gap-5 items-center'>
            <h3 className='font-semibold text-[#2563EB]'>Follow us :</h3>
            <div className='flex gap-4 text-[#1E3A8A]'>
              <a href='' className='hover:text-[#2563EB] transition-all duration-200'>
                Instagram
              </a>
              |
              <a href='' className='hover:text-[#2563EB] transition-all duration-200'>
                Facebook
              </a>
              |
              <a href='' className='hover:text-[#2563EB] transition-all duration-200'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

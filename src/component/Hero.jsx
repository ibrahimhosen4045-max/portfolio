import React from 'react'
import profile_img from '../assets/profile.png'

const Hero = () => {
  return (
    <div id='home' className='mt-5 lg:mt-20 w-full overflow-hidden'>
      <div className='flex flex-col items-center gap-8.75'>
        
          <div className='max-w-65 max-h-65 lg:max-w-80 lg:max-h-80  overflow-hidden rounded-full  '>
            <img src={profile_img} alt="" className='max-w-70 lg:max-w-89'/>
          </div>
        
        <h1 className='text-center text-[50px] lg:text-[90px] w-[90%] lg:w-[70%] font-medium -my-2 lg:my-1'><span className='bg-linear-to-l from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent'>I'm Ibrahim Hosen,</span> frontend devoloper based in BD.</h1>
        <p className='w-[70%] lg:w-1/2 text-center leading-9 text-[18px] lg:text-[24px] -my-5 lg:my-1'>I am  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reprehenderit officiis ut fuga perferendis asperiores.</p>
        <div className='flex items-center justify-center gap-3 lg:gap-6 font-medium text-[18px] lg:text-[24px] mb-7 mt-5 lg:mb-13'>
            <div className="px-4 lg:px-6 py-2 lg:py-3  text-white rounded-full bg-linear-to-l from-[#DA7C25] to-[#B923E1]
            hover:from-[#B923E1] hover:to-[#DA7C25] transition duration-500  cursor-pointer hover:border-2"><a href='#contact' onClick={()=> setMenu("contact")}>Connect With Me</a></div>
            <div className="inline-block p-0.5 rounded-full bg-linear-to-r from-[#DA7C25] to-[#B923E1] hover:from-[#B923E1] hover:to-[#DA7C25] transition duration-500 cursor-pointer">
              <div className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-black text-white">
                My Resume
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero

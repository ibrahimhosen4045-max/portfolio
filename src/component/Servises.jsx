import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import service_data from '../assets/services_data'
import arrow_icon from '../assets/arrow_icon.svg'

const Servises = () => {
  return (
    <div className='w-full overflow-hidden'>
    <div id='services' className='flex flex-col justify-center items-center gap-20 mb-30'>
      <div className=' relative'>
        <h1 className='text-[50px] sm:text-[70px] lg:text-[80px] font-semibold px-8'>My Services</h1>
        <img src={theme_pattern} alt="" className=' absolute bottom-1 right-3 lg:right-0 -z-10 w-32.5 sm:w-40  lg:w-auto'/>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-3'>
        {service_data.map((service, index)=>{
            return <div key={index} className='flex
            flex-col justify-center gap-5 p-8 lg:p-15 border-2 border-white rounded-2xl  cursor-pointer poos 
    transition-all duration-400
    hover:border-[#ff00ff]
    hover:bg-[linear-gradient(45deg,#3f0028,#582300)]
    hover:scale-105'>
                <h1 className='text-[24px] font-semibold'>{service.s_no}</h1>
                <h1 className='text-[39px] font-extrabold  bg-linear-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>{service.s_name}</h1>
                <p className='text-gray-300 text-[24px] max-w-87.5'>{service.s_desc}</p>
                <div className='flex gap-5 items-center mt-5'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default Servises

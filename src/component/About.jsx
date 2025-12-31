import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from '../assets/profile.png'

const About = () => {
  return (
    <div className='w-full overflow-hidden'>
    <div id='about' className="flex flex-col items-center container mx-auto gap-10 px-4 my-20 lg:my-30">

      {/* Heading */}
      <div className="relative text-center items-start ">
        <h1 className="text-[50px] sm:text-[70px] lg:text-[80px] font-semibold">
          About me
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-2 right-13 lg:right-20 translate-x-1/2 -z-10 w-32.5 sm:w-40  lg:w-auto"
        />
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

        {/* Image */}
        <div className="w-[70%] sm:w-[60%] lg:w-[80vh]">
          <img src={profile_img} alt="" className="w-full mx-auto" />
        </div>

        {/* Text + Skills */}
        <div className="flex flex-col gap-10 lg:gap-16 w-full">

          {/* Description */}
          <div className="flex flex-col gap-4 text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi quam illo ratione?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi quam illo ratione?
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">

            {[
              { name: "HTML & CSS", width: "80%" },
              { name: "React JS", width: "60%" },
              { name: "Tailwind", width: "85%" },
              { name: "Javascript", width: "55%" },
            ].map((skill, i) => (
              <div key={i} className="flex items-center hover:scale-x-105 transition duration-200 gap-2">
                <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-medium w-50">
                  {skill.name}
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    style={{ width: skill.width }}
                    className="h-2 rounded-full bg-linear-to-l from-[#DF8908] to-[#B415FF]"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 w-full gap-6 mb-16">

        {[
          { value: "0+", label: "YEARS OF EXPERIENCE" },
          { value: "0+", label: "PROJECTS COMPLETED" },
          { value: "0+", label: "HAPPY CLIENTS" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center lg:gap-2 py-3 lg:py-6 rounded-xl shadow-sm bg-white/5 "
          >
            <h1 className="text-[36px] sm:text-[50px] lg:text-[60px] font-bold bg-linear-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
              {item.value}
            </h1>
            <p className="text-sm sm:text-lg font-medium text-center">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
    </div>
  )
}

export default About

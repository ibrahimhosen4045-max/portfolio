import React from 'react'
import footer_logo from '../assets/footer_logo.svg'
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="my-12 px-4 sm:px-8 lg:px-20 flex flex-col gap-8  lg:w-11/12 mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">

          {/* Left */}
          <div className="flex flex-col gap-4 max-w-md">
            <img src={footer_logo} alt="" className="w-40" />
            <p className="text-[16px] sm:text-[18px] lg:text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae reprehenderit beatae odio facilis ipsam
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-9">

            {/* Input */}
            <div className="flex items-center gap-4 sm:gap-6 px-6 py-4 bg-[#32323B] rounded-full hover:scale-x-105 transition duration-300 w-full sm:w-auto">
              <img src={user_icon} alt="" className="w-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none border-none bg-transparent text-[#a0a0a0] text-[16px] sm:text-[18px] w-full"
              />
            </div>

            {/* Button */}
            <div className=" self-center text-[16px] sm:text-[18px] lg:text-[20px] py-4 px-10 rounded-full bg-linear-to-r from-[#B415FF] to-[#DF8908] cursor-pointer hover:scale-105 transition-all duration-300 ">
              Subscribe
            </div>

          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between text-[14px] sm:text-[16px] lg:text-[18px]">

          <p className="text-center lg:text-left">
            &copy; 2023 Alex Bennett. all rights reserved.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer

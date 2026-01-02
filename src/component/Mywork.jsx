import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import arrow_icon from '../assets/arrow_icon.svg'

import img1 from '../assets/work/work-1.png'
import img2 from '../assets/work/work-11.png'
import img3 from '../assets/work/work-111.png'
import img4 from '../assets/work/work-2.png'
import img5 from '../assets/work/work-22.png'
import img7 from '../assets/work/work-3.png'
import img8 from '../assets/work/work-33.png'
import img9 from '../assets/work/work-333.png'
import img10 from '../assets/work/work-4.png'
import img11 from '../assets/work/work-44.png'
import img12 from '../assets/work/work-444.png'
import img13 from '../assets/work/work-5.png'
import img14 from '../assets/work/work-55.png'

import { PiCursorClickFill } from 'react-icons/pi'

const Mywork = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        id="work"
        className="flex flex-col items-center justify-center gap-20
                    my-20"
      >
        {/* Heading */}
        <div className="relative">
          <h1 className="text-[40px] sm:text-[70px] lg:text-[80px] font-semibold px-8">
            My latest work
          </h1>
          <img
            src={theme_pattern}
            alt=""
            className="absolute bottom-1 right-3 lg:right-0 -z-10 w-32.5 sm:w-40 lg:w-auto"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-3">

          {/* Card 1 */}
          <div className="w-full lg:w-105 h-auto lg:h-70 overflow-hidden rounded-2xl
                          hover:scale-105 transition-all duration-300
                          hover:border-yellow-400 border-2">
            <a
              href="https://rent-car-lemon-eight.vercel.app"
              target="blank"
              className="block w-full h-full relative"
            >
              <div className="h-1/2 flex">
                <img src={img1} className="w-1/2 object-cover" />
                <img src={img3} className="w-1/2 object-cover" />
              </div>
              <div>
                <img src={img2} className="h-1/2 object-cover" />
              </div>
              <div className="bg-black/20 absolute inset-0 z-10"></div>
              <div className="absolute z-50 top-3 right-3">
                <PiCursorClickFill className="text-2xl text-yellow-400" />
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-105 h-auto lg:h-70 overflow-hidden rounded-2xl
                          hover:scale-105 transition-all duration-300
                          hover:border-yellow-400 border-2">
            <a
              href="https://movieses-rust.vercel.app"
              target="blank"
              className="block w-full h-full relative"
            >
              <img src={img4} className="h-9/12 object-cover" />
              <img src={img5} className="h-1/4 object-cover" />
              <div className="bg-black/20 absolute inset-0 z-10"></div>
              <div className="absolute z-50 top-3 right-3">
                <PiCursorClickFill className="text-2xl text-yellow-400" />
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-105 h-auto lg:h-70 overflow-hidden rounded-2xl
                          hover:scale-105 transition-all duration-300
                          hover:border-yellow-400 border-2">
            <a
              href="https://euphonious-caramel-18dfbf.netlify.app"
              target="blank"
              className="block w-full h-full relative"
            >
              <div className="h-1/2 flex">
                <img src={img7} className="w-1/2 object-cover" />
                <img src={img9} className="w-1/2 object-cover" />
              </div>
              <div>
                <img src={img8} className="h-1/2 object-cover" />
              </div>
              <div className="bg-black/20 absolute inset-0 z-10"></div>
              <div className="absolute z-50 top-3 right-3">
                <PiCursorClickFill className="text-2xl text-yellow-400" />
              </div>
            </a>
          </div>

          {/* Card 4 */}
          <div className="w-full lg:w-105 h-auto lg:h-70 overflow-hidden rounded-2xl
                          hover:scale-105 transition-all duration-300
                          hover:border-yellow-400 border-2">
            <a
              href="https://figma-filw.vercel.app"
              target="blank"
              className="block w-full h-full relative"
            >
              <div className="h-1/2 flex">
                <img src={img10} className="w-1/2 object-cover" />
                <img src={img11} className="w-1/2 object-cover" />
              </div>
              <div>
                <img src={img12} className="h-1/2 object-cover" />
              </div>
              <div className="bg-black/20 absolute inset-0 z-10"></div>
              <div className="absolute z-50 top-3 right-3">
                <PiCursorClickFill className="text-2xl text-yellow-400" />
              </div>
            </a>
          </div>

          {/* Card 5 */}
          <div className="w-full lg:w-105 h-auto lg:h-70 overflow-hidden rounded-2xl
                          hover:scale-105 transition-all duration-300
                          hover:border-yellow-400 border-2">
            <a
              href="https://digital-assets-ecommerce.vercel.app"
              target="blank"
              className="block w-full h-full relative"
            >
              <img src={img13} className="h-1/2 object-cover" />
              <img src={img14} className="h-1/2 object-cover" />
              <div className="bg-black/20 absolute inset-0 z-10"></div>
              <div className="absolute z-50 top-3 right-3">
                <PiCursorClickFill className="text-2xl text-yellow-400" />
              </div>
            </a>
          </div>
        </div>

        {/* Show more */}
        <div className="flex gap-3.5 border-2 border-white
                        px-10 lg:px-16 py-5 lg:py-7
                        text-[18px] lg:text-[22px] font-medium
                        rounded-full mb-20 cursor-pointer
                        transition-all duration-500 hover:gap-7">
          <p>Show More</p>
          <img src={arrow_icon} className="w-6 lg:w-auto" />
        </div>
      </div>
    </div>
  )
}

export default Mywork

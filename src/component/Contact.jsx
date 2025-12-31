import React, { useState } from 'react'
import Swal from 'sweetalert2'

import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.target

    const formData = new FormData(form)
    formData.append("access_key", "b5cfc504-74ba-4146-b93f-8b207ea93a2b")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Success")
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for contacting me 😊",
          icon: "success",
          confirmButtonColor: "#B415FF",
        })
        form.reset()
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#DF8908",
        })
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error!",
        text: "Please check your internet connection.",
        icon: "error",
        confirmButtonColor: "#DF8908",
      })
    }
  }

  return (
    <div id="contact" className="w-full overflow-hidden">
      <div className="flex flex-col items-center gap-14 my-16 px-4 sm:px-8 lg:px-20">

        {/* Heading */}
        <div className="relative text-center">
          <h1 className="text-[45px] sm:text-[70px] lg:text-[80px] font-semibold px-8">
            Get in touch
          </h1>
          <img
            src={theme_pattern}
            alt=""
            className="absolute bottom-1 right-3 lg:right-0 -z-10 w-32.5 sm:w-40  lg:w-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 w-full justify-between container">

          {/* Left Section */}
          <div className="flex flex-col gap-8">
            <h1 className="text-[42px] sm:text-[60px] lg:text-[80px] font-bold bg-[linear-gradient(279deg,#DF8908_80%,#B415FF_100%)] bg-clip-text text-transparent">
              Let's talk
            </h1>

            <p className="text-[#D8D8D8] text-[18px] sm:text-[20px] leading-8 max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur veniam autem sit fugit ullam fugiat ipsa dolorem
              magnam numquam voluptas.
            </p>

            <div className="flex flex-col gap-6 text-[18px] sm:text-[22px] text-[#D8D8D8]">
              <div className="flex items-center gap-4">
                <img src={mail_icon} alt="" className="w-6" />
                <p>example@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <img src={call_icon} alt="" className="w-6" />
                <p>+013456789</p>
              </div>

              <div className="flex items-center gap-4">
                <img src={location_icon} alt="" className="w-6" />
                <p>CA, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={onSubmit} className="flex flex-col gap-6 ">

            <label className="text-[18px] sm:text-[22px] text-[#D8D8D8] font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full sm:w-[420px] lg:w-[700px] h-14 pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-[16px] sm:text-[18px]"
            />

            <label className="text-[18px] sm:text-[22px] text-[#D8D8D8] font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-[420px] lg:w-[700px] h-14 pl-5 rounded bg-[#32323c] text-[#A0A0A0] text-[16px] sm:text-[18px]"
            />

            <label className="text-[18px] sm:text-[22px] text-[#D8D8D8] font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full sm:w-[420px] lg:w-[700px] p-5 rounded bg-[#32323c] text-[#A0A0A0] text-[16px] sm:text-[18px]"
            ></textarea>

            <button
              type="submit"
              className=" self-center lg:self-start text-white rounded-full bg-linear-to-r from-[#B415FF] to-[#DF8908]
              text-[18px] sm:text-[22px] py-4 px-10 sm:px-14 hover:scale-105 transition duration-300"
            >
              Submit Now
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact

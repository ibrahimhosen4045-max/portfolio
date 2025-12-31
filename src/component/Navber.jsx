import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import underline from '../assets/nav_underline.svg'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navber = () => {
  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [showTempNav, setShowTempNav] = useState(false)

  const handleMenuClick = (name) => {
    setMenu(name)
    setIsOpen(false)
    setShowTempNav(false)
  }

  // 👉 PAGE CLICK → TEMP NAV SHOW ONLY ON EMPTY SPACE
  useEffect(() => {
    const handleClick = (e) => {
      // যদি navbar / mobile menu এ click হয়, trigger হবে না
      if (e.target.closest(".nav-ignore-click")) return

      setShowTempNav(true)
      setTimeout(() => setShowTempNav(false), 5000)
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  return (
    <>
      {/* NORMAL NAVBAR (unchanged design) */}
      <div className="py-3 w-full overflow-hidden nav-ignore-click">
        <div className="flex justify-between items-center container mx-auto px-4">
          <h1 className=' fonset font-story text-4xl font-bold bg-linear-to-b from-[#e97a12] to-[#B923E1] bg-clip-text text-transparent'>PORTFOLIO</h1>

          <img
            src={menu_open}
            alt=""
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          <ul className="hidden lg:flex gap-12 items-center">
            {["home", "about", "services", "work", "contact"].map((item) => (
              <li key={item} className="flex flex-col gap-1 cursor-pointer">
                <a href={`#${item}`} onClick={() => setMenu(item)}>
                  {item === "home" ? "Home" :
                   item === "about" ? "About Me" :
                   item === "services" ? "Services" :
                   item === "work" ? "Portfolio" :
                   "Contact"}
                </a>
                {menu === item && (
                  <img src={underline} alt="" className="m-auto" />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block px-6.5 py-3.5 rounded-full text-white bg-linear-to-l from-[#DA7C25] to-[#B923E1]
            hover:from-[#B923E1] hover:to-[#DA7C25] transition duration-500 hover:scale-110 cursor-pointer">
            <a href="#contact" onClick={() => setMenu("contact")}>
              Connect With Me
            </a>
          </div>
        </div>
      </div>

      {/* TEMP FLOATING NAVBAR (same design, just fixed) */}
      {showTempNav && (
        <div className="fixed top-0 left-0 w-full z-100 bg-black nav-ignore-click">
          <div className="flex justify-between items-center container mx-auto px-4 py-3">
          <img src={logo} alt="logo" />

          <img
            src={menu_open}
            alt=""
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          <ul className="hidden lg:flex gap-12 items-center">
            {["home", "about", "services", "work", "contact"].map((item) => (
              <li key={item} className="flex flex-col gap-1 cursor-pointer">
                <a href={`#${item}`} onClick={() => setMenu(item)}>
                  {item === "home" ? "Home" :
                   item === "about" ? "About Me" :
                   item === "services" ? "Services" :
                   item === "work" ? "Portfolio" :
                   "Contact"}
                </a>
                {menu === item && (
                  <img src={underline} alt="" className="m-auto" />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block px-6.5 py-3.5 rounded-full text-white bg-linear-to-l from-[#DA7C25] to-[#B923E1]
            hover:from-[#B923E1] hover:to-[#DA7C25] transition duration-500 hover:scale-110 cursor-pointer">
            <a href="#contact" onClick={() => setMenu("contact")}>
              Connect With Me
            </a>
          </div>
        </div>
        </div>
      )}

      {/* MOBILE MENU (unchanged) */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 right-0 bg-black/80 z-50 left-1/2 h-screen nav-ignore-click">
          <div className="bg-[#1F0016] h-full w-full p-6">
            <div className='flex justify-end'>
              <img
              src={menu_close}
              alt=""
              className="mb-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            </div>

            <ul className="flex flex-col gap-6 text-white text-xl">
              {["home", "about", "services", "work", "contact"].map((item) => (
                <li key={item} className="flex items-center">
                  <a href={`#${item}`} onClick={() => handleMenuClick(item)}>
                    {item}
                  </a>
                  {menu === item && <img src={underline} alt="" className="m-auto" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navber

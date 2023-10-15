import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [navber, setNavber] = useState(false);

  const manuLinks = [
    {
      logo: "home-outline",
      link: "#home",
      tiptool: "Home",
    },
    {
      logo: "person-outline",
      link: "#about",
      tiptool: "ABOUT",
    },
    {
      logo: "construct-outline",
      link: "#skills",
      tiptool: "SKILLS",
    },
    {
      logo: "briefcase-outline",
      link: "#projects",
      tiptool: "PRJECTS",
    },
   
  ];
  const social_media = [
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/khali_d._rafiq/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&fbclid=IwAR2g5A7R2IscSGY-OdNFCc1q8YuWh7a0wU73Nsma7Wzkx7RyJZ7JnZ4uC1U",
      tiptool: "instagram",
    },
    {
      logo: "logo-facebook",
      link: "https://www.facebook.com/khalidbinrafiq.niloy?mibextid=ZbWKwL",
      tiptool: "facebook",
    },
    {
      logo: "logo-linkedin",
      link: "#",
      tiptool: "linkedin",
    },
    {
      logo: "logo-whatsapp",
      link: "#",
      tiptool: "whatsapp",
    },
  ];

  // change color on scrolling
  useEffect(() => {
    const changeBgcolor = () => {
      if (window.scrollY > 0) {
        setNavber(true);
      } else setNavber(false);
    };
    window.addEventListener("scroll", changeBgcolor);
    return () => {
      window.removeEventListener("scroll", changeBgcolor);
    };
  }, []);

  const nebchangecolor = ` fixed z-[999] w-full ${
    navber ? "lg:bg-[#DFDFD9]  md:bg-[#DFDFD9]  opacity-[90%]" : ""
  }`;

  // Aos set up
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={nebchangecolor}>
      <nav className="w-[1800px]">
        {/* dropdown mobile navber */}
        <div className="dropdown lg:hidden ">
          <label
            tabIndex={0}
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle duration-1000  bg-white mt-5 ml-2 opacity-[50%]"
          >
            {open ? (
              <AiOutlineClose className="text-lg" />
            ) : (
              <HiOutlineMenuAlt4 className="text-lg" />
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm  mt-3 z-[1] p-2 shadow bg-white h-96 rounded-box  duration-1000 transform translate-transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } gap-5`}
          >


            {/* section logo */}
            {manuLinks.map((menu) => (
              <div  className="ml-3">
                <div className="text-gray-600 text-xl  hover:text-white cursor-pointer tooltip" data-aos="zoom-out" data-tip={menu.tiptool}>
                  <a href={menu.link}>
                    <ion-icon name={menu.logo}> {menu.logo}</ion-icon>
                  </a>
                </div>
             
               
              </div>
            ))}



            {/* social media logo*/}
              {social_media?.map((icon) => (
                <div
                  key={icon}
                  className="text-gray-600 text-xl hover:text-white cursor-pointer tooltip "
                  data-tip={icon.tiptool}
                  data-aos="flip-left"
                >
                  <a href={icon.link}>
                    <ion-icon name={icon.logo}> {icon.logo}</ion-icon>
                  </a>
                </div>
              ))}

          </ul>
          
        </div>

        <div className="navbar ">
          <div className="flex-1 gap-30 hidden lg:flex ">
            <div className="mt-8 text-xl flex items=center md:justify-start justify-center gap-10 lg:gap-32 lg:ml-20 mb-8">
              {social_media?.map((icon) => (
                <div
                  key={icon}
                  className="text-gray-600 hover:text-white cursor-pointer tooltip "
                  data-tip={icon.tiptool}
                  data-aos="flip-left"
                >
                  <a href={icon.link}>
                    <ion-icon name={icon.logo}> {icon.logo}</ion-icon>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-none float-right hidden lg:flex ">
            <ul className="menu menu-horizontal px-1  gap-24 ">
              {manuLinks.map((menu) => (
                <div className="text-gray-600 text-xl hover:text-white cursor-pointer tooltip" data-aos="zoom-out" data-tip={menu.tiptool}>
                  <a href={menu.link}>
                    <ion-icon name={menu.logo}> {menu.logo}</ion-icon>
                  </a>
                </div>
              ))}
            </ul>
          </div> 
        </div>
      </nav> 
    </div>
  );
};

export default Navber;

import React from 'react';

import { AiOutlineSetting } from "react-icons/ai";


import { SiFirebase, SiTailwindcss,SiMicrosoftexcel,SiMicrosoftword,SiMicrosoftpowerpoint } from "react-icons/si";
import { FaPhotoVideo } from "react-icons/fa";
import {MdSsidChart } from "react-icons/md";


import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
const RecatMarqure = () => {
    return (
        <div>
            <div className=" flex justify-center lg:p-0 pt-3">
                <div className="lg:w-[48rem] w-screen lg:mt-5">
                  <Marquee>
                    <div className="lg:w-[10rem] w-[5rem] gap-10">
                    <label className='hidden lg:flex' htmlFor="ms-word">MS-Excel</label>
                      <SiMicrosoftexcel
                        className="lg:text-[4rem] text-[2rem]  text-green-800"
                        data-aos="zoom-in"
                      />
                   
                    </div>
                    <div className="lg:w-[10rem] w-[5rem] " >
                      
                      <SiMicrosoftword id='ms-word'
                        className="lg:text-[4rem] text-[2rem]  text-blue-600 "
                        data-aos="zoom-in"  
                      />
                   <label  className='hidden lg:flex'htmlFor="ms-word">MS-WORD</label>
                    </div>
                    <div className="lg:w-[10rem] w-[5rem]">
                    <label className='hidden lg:flex' htmlFor="ms-word">Power-point</label>
                      <SiMicrosoftpowerpoint
                        className="lg:text-[4rem] text-[2rem] text-yellow-600"
                        data-aos="zoom-in"
                      />
                    </div>
                    <div className="lg:w-[10rem] w-[5rem]">
                    
                      <FaPhotoVideo
                        className="lg:text-[4rem] text-[2rem] text-black"
                        data-aos="zoom-in"
                      />
                      <label className='hidden lg:flex' htmlFor="ms-word">Video-editing</label>
                    </div>
                    <div className="lg:w-[10rem] w-[5rem]">
                    <label className='hidden lg:flex' htmlFor="ms-word">ERP</label>
                      <AiOutlineSetting
                        className="lg:text-[4rem] text-[2rem] text-white"
                        data-aos="zoom-in"
                      />
                    </div>
                    <div className="lg:w-[10rem] w-[5rem]">
                    
                      <MdSsidChart
                        className="lg:text-[4rem] text-[2rem] text-white"
                        data-aos="zoom-in"
                      />
                      <label className='hidden lg:flex' htmlFor="ms-word">DSS</label>
                    </div>
                   
                  </Marquee>
                </div>
              </div>
        </div>
    );
};

export default RecatMarqure;
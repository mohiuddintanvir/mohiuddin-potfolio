import React, { useEffect } from "react";
import img1 from "../img/About.jpg";
import RecatMarqure from "./reactmarqure/RecatMarqure";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css"

const About = () => {
  const info = [
    {
      text: "month experience",
      count: "8 ",
    },
    {
      text: "Complete projects",
      count: "14",
    },
    {
      text: "Task complete",
      count: "02",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
         <section id="about" className="py-40 text-white bg-[#11164B] lg:flex  hidden" >
      <div className="text-center   " data-aos="fade-right">
        
        <h3 className="text-4xl font-bold">
          About <span className="text-cyan-600">me</span>
        </h3>
        <p className="text-gray-400 my-1 text-lg ">My introduction</p>
        <div className=" flex md:flex-row items-center flex-col-reverse md:gap-6 gap-12 lg:px-10 lg:max-w-6xl lg:mx-auto" >
          <div className="lg:p-2">
            <div className="text-gray-400 my-3"   >
              <p className="text-justify lg:leading-9 ml-10 h-full lg:w-11/12 lg:mx-auto">
                Highly motivated and detail-oriented business graduate with a
                strong background in Business Administration (Major: Management
                Information System). Excited to apply my skills and knowledge to
                enhance business operations and contribute to a dynamic
                organization. I possess an understanding of how technology can
                be leveraged to enhance business operations and drive growth.
                Adaptable and quick to learn, I am eager to contribute my
                knowledge to a dynamic organization where I can develop
                practical business expertise.<br/>
                <div>
<h1 aria-label="My ">
 <span className="text-cyan-600">My</span>  &nbsp;<span class="typewriter"></span>:
</h1>
</div>
              </p>
            </div>
            {/* skill title */}

            <div className="flex mt-7 justify-center  items-center gap-7">
              <RecatMarqure></RecatMarqure>
            </div>

            {/* <div className="mt-20  flex justify-center">
              <a
                href="https://github.com/mohiuddintanvir/mohiuddin-potfolio/blob/9690067d3ccb793012dd99a91f54bfee37d840f7/src/assets/Mohiuddin%20Molla%20resume%20%20(8).pdf"
                download
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
   
    </div>
 
  );
};

export default About;

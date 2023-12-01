import React, { useEffect, useState } from "react";
import "./home.css";
import RecatMarqure from "../reactmarqure/RecatMarqure";
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const initialWordCount = 40;
  const [showMore, setShowMore] = useState(false);

  const text =
    "Highly motivated and detail-oriented business graduate with a strong background in Business Administration (Major: Management Information System). Excited to apply my skills and knowledge to enhance business operations and contribute to a dynamic organization. I possess an understanding of how technology can be leveraged to enhance business operations and drive growth. Adaptable and quick to learn, I am eager to contribute my knowledge to a dynamic organization where I can develop practical business expertise.";

  const words = text.split(" ");
  const visibleWords = showMore ? words : words.slice(0, initialWordCount);


  // Aos set up
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-left">
        <div className="hidden lg:flex">
          <div className="minip ">
            <div className="mg">
              <div className="group  font-bold float-left">
                <span>Rafiq Niloy</span>
              </div>
            </div>

            <div className="info">
              <deets className="text-white">
                <p>University: DIU</p>
                <p>Dept : Business Administration</p>
                <p>Program : BBA</p>
                <p>Major : BBA</p>
              </deets>
            </div>
            <a className="plot" title="plot with jinkyu" href="/">
              Download CV →
            </a>
          </div>
        </div>
      </div>
      {/* mobile look */}
      <div className="cover lg:hidden flex h-screen">
        <div>
          <div className=" ">
            <img
              src="https://i.ibb.co/XFqHNm5/nily.jpg"
              className="w-[4.5rem] h-[4.5rem] rounded-full mt-20 ml-4"
              alt=""
            />
          </div>
          {/* header text */}
          <div>
            <h2 className="text-white  font-bold ml-3 mt-2">
              Khalid Bin Rafiq Niloy
            </h2>
            <div className="text-[#6e6e6e]   ml-3 mt-2">
              <h2 className="text-[15px] font-[500]">Details:</h2>
              <p className="flex items-center gap-3 ">
                <IoSchoolSharp className="text-[#6e6e6e] w-4 h-4" />{" "}
                <a href="https://daffodilvarsity.edu.bd/">
                  Daffodil International University
                </a>{" "}
              </p>
              <p className="flex items-center gap-3 ">
                <BsFillBuildingsFill className="text-[#6e6e6e] w-4 h-4" />{" "}
                Business Administration
              </p>
              <p className="flex items-center gap-3 ">
                <AiOutlineSetting className="text-[#6e6e6e] w-4 h-4" /> BBA
              </p>
              <p className="flex items-center gap-3 ">
                <FiBookOpen className="text-[#6e6e6e] w-4 h-4" /> MIS
              </p>
            </div>
          </div>
          {/* merqure */}
          <div className=" mt-5">
            <h2 className="text-white font-[400] ml-3">Skills</h2>
            <RecatMarqure></RecatMarqure>
          </div>
          {/* about nily */}
          <div>
            <div className="">
              <div className="flex items-center gap-2">
                <div className=" ">
                  <img
                    src="https://i.ibb.co/XFqHNm5/nily.jpg"
                    className="w-[2.5rem] h-[2.5rem] rounded-full mt-5 mb-4 ml-1"
                    alt=""
                  />
                </div>
                <h2>
                  <h3 className="text-white font-[400] ">
                    About <span className="text-cyan-600">me</span>
                  </h3>
                </h2>
              </div>
              <div className="w-screen ">
                <p className="ml-2">
                  {visibleWords.join(" ")}
                  {!showMore && words.length > initialWordCount && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setShowMore(true)}
                    >
                      See More
                    </span>
                  )}
                  {showMore && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setShowMore(false)}
                    >
                      See Less
                    </span>
                  )}
                </p>

                <div className="  flex justify-center">
              <a
                href="#"
                download
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

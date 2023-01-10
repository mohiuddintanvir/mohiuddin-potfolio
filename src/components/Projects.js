import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/greenven.png";
import html from "../img/html1.png"
import css from "../img/css1.png"
import java from "../img/javascript-1.png"
import game from "../img/game.png"
// import html from "../img/html1.png"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold ">
          My <span className="text-cyan-600">Projects</span>{" "}
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-8xl lg:ml-20 px-5 mx-auto items-center relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-2 lg:gap-0">
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-center">Html Project</h1>
            <Swiper
              slidePerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidePerview: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="h-fit  p-4 bg-slate-700 rounded-xl">
                  <img src={html} alt="" className="rounded-lg h-80 w-full" />
                  <h3 className="text-xl my-4">Donation app</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mohiuddintanvir/Assaignment-1-repo"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="https://lively-sunflower-a14a17.netlify.app/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1  inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              
            </Swiper>
          </div>
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-center">CSS Project</h1>
            <Swiper
              slidePerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidePerview: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 7000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={css} alt="" className="rounded-lg lg:h-80" />
                  <h3 className="text-xl my-4">Food App</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mohiuddintanvir/Assignment-2-repo"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="https://exquisite-longma-6be7c5.netlify.app/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              
            </Swiper>
          </div>
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-center">JavaScript Project</h1>
            <Swiper
              slidePerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidePerview: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={java} alt="" className="rounded-lg h-80" />
                  <h3 className="text-xl my-4">Quiz app</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/programming-hero-web-course2/b6-quiz-crackerz-mohiuddintanvir"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="https://velvety-platypus-07e488.netlify.app/home"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              
            </Swiper>
          </div>
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-center">Freamework base Projects </h1>
            <Swiper
              slidePerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidePerview: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 7000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={img1} alt="" className="rounded-lg h-80" />
                  <h3 className="text-xl my-4">Food App</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mohiuddintanvir/green-van-client"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="https://green-van-8f6c2.firebaseapp.com/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={game} alt="" className="rounded-lg h-80" />
                  <h3 className="text-xl my-4">Game App</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mohiuddintanvir/tic-toc-toe-client"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="https://tic-toc-tou-client.firebaseapp.com/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>


              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

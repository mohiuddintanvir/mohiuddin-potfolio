import React from "react";
import img1 from "../img/banner-pic.jpg";

const Hero = () => {
  const social_media = [
    {
      logo:"logo-instagram", link:'https://www.instagram.com/mohiuddin_tanvir/?hl=en'
    },
    {
      logo:"logo-facebook", link:'https://www.facebook.com/profile.php?id=100008659691451'
    },
    {
      logo: "logo-linkedin", link:'https://www.linkedin.com/in/mohiuddin-molla-935562255/'
    },
    {
      logo:"logo-whatsapp", link:'01688167012'
    },
    
    
   
  ];
  return (
    <section
      id="home"
      className="min-h-screen lg:min-h-96 flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={img1} alt="" className="md:w-1/2 h-full object-cover" />
      </div>
       
      <div className="flex-1  ">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold text-white">

            <span className="text-cyan-600 md:text-6xl text-5xl" >Hello!</span>
            <br />
            My name is <span>Mohiuddin Molla</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 font-bold text-gray-600">Fullstack & Mern Developer</h4>
          <button className="btn-primary mt-8">Contact me </button>
          <div className="mt-8 text-3xl flex items=center md:justify-start justify-center gap-5">
            {
                social_media?.map(icon=>(
                    <div key={icon} className="text-gray-600 hover:text-white cursor-pointer">
                      <a href={icon.link}>
                         <ion-icon name={icon.logo}> {icon.logo}</ion-icon>
                      </a>
                       
                    </div>
                ))
            }
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

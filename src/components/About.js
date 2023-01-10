import React from "react";
import img1 from '../img/About.jpg'

const About = () => {
    const info=[
        {
            text:'month experience',count:'8 '
        },
        {
            text:'Complete projects',count:'14'
        },
        {
            text:'Task complete',count:'02'
        }
        
    ]
  return (
    <section id="about" className="py-40 text-white">
      <div className="text-center   ">
         <h3 className="text-4xl font-bold">
          About <span className="text-cyan-600">me</span>
        </h3>
        <p className="text-gray-400 my-1 text-lg ">My introduction</p>
        <div className=" flex md:flex-row items-center flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto">

      




            <div  className="p-2">
                <div className="text-gray-400 my-3">
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium consectetur cum qui expedita dolor, consequuntur dicta, tenetur illum assumenda suscipit nam libero mollitia vel! Similique excepturi ratione iste minus!
                    </p>
                </div>

                <div className="flex mt-7  items-center gap-7">
                {
            info?.map(content=>(
                <div >
                <h3 className="md:text-4xl text-2xl font-semibold text-white">{content?.count}<span className="text-cyan-600">+</span> </h3>
                <span className="md:text-base text-sm">{content?.text}</span>
            </div>
            ))
           }

           
            </div>
            <br />
            <br />
            <a href="src\assets\Mohiuddin Molla resume.pdf" download><button className="btn-primary">Download CV</button></a>





            </div>
            
           <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 md:w-10/12 w-11/12 max-w-sm aboutimg">
             <img src={img1} alt="" className="w-full object-cover" />   
            </div>
        </div>




        

</div>

      </div>
    </section>
  );
};

export default About;

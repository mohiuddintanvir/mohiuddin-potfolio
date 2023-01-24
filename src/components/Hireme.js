import React from "react";
import img1 from '../img/Hireme.jpg';
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold ">
          Hire <span className="text-cyan-600">Me</span>{" "}
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse  items-center">
        <div>
            <h2 className="text-2xl font-bold">Do you want any work from me?</h2>
            <p className="mx-w-lg text-justify text-sm mt-4 text-gray-200 leading-6">My extensive expertise in both front-end programming, including HTML5, CSS3, JavaScript,  React, and back-end development, including MongoDB, Node.js, and Express.js.I have proven that I value deadline observance highly, which is a crucial need for this role, and I've received appreciation from my course director for it. I acquired abilities like leadership, self-control, cooperation, and timeliness during my learning phase—all qualities that a successful company seeks after. Additionally, I am capable of managing, updating excel spreadsheets, and delivering PowerPoint presentations.

</p>
            <br />
            <button className="btn-primary">Say Hello!</button>
        </div>
        <img src={img1} alt="" className="lg:h-[32rem] h-80"/>
      </div>
    </section>
  );
};

export default Hireme;

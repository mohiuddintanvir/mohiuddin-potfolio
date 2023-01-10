import React from "react";

const Context = () => {
    const contact_info=[
        {
            logo:'mail',text:'mohiuddin.tanvir.mollah@gmail.com'
        },
        {
            logo:'logo-whatsapp',text:'01688167012'
        },
        {
            logo:'location',text:'Narayangonj ,Bangladesh'
        },
    ]
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-cyan-600">Me</span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 rounded-lg mx-auto md:p-6 p-2 ">
          <form action="" className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              className="bg-gray-700 outline-none rounded-lg p-3  text-lg"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-gray-700 outline-none rounded-lg p-3  text-lg"
              placeholder="Your Email Address"
            />
            <textarea
              className="bg-gray-700 outline-none rounded-lg p-3  text-lg"
              placeholder="Your Massage"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit">Send massage</button>
          </form>
          <div className="flex flex-col gap-7">
           {
            contact_info.map((contact,i)=>(
                <div className="flex gap-4 w-fit items-center">
                <div className="min-w-[4rem] min-h-[4rem] text-2xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))
           }
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;

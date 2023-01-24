import React, { useEffect, useState } from "react";

const Navber = () => {
  const [sticky, setsticky] = useState(false);
  const [open, setopen] = useState(false);

  const manuLinks = [
    {
      name: "HOME",
      link: "#home",
    },
    {
      name: "ABOUT",
      link: "#about",
    },
    {
      name: "SKILLS",
      link: "#skills",
    },
    {
      name: "PRJECTS",
      link: "#projects",
    },
    {
      name: "CONTACT",
      link: "#contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("Scroll", () => {
      const nav = -document.querySelector("nav");
      window.scrollY > 0 ? setsticky(true) : setsticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] bg-white/60  `}
    >
      <div className="flex  items-center justify-between w-[1700px]">
        <div className="mx-7 lg:ml-40">
          <h4 className="text-4xl uppercase font-bold text-white ">
            Mo<span className="text-cyan-600">hiudd</span>in
          </h4>
        </div>
        <div className="text-gray-900 md:block hidden px-7 py-2 font-medium ">
          <ul className="flex items-center gap-1 py-2 text-lg text-black ">
            {manuLinks.map((manu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600 font-semibold">
                <a href={manu?.link}>{manu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
       <div onClick={()=>setopen(!open)} className={`z-[999] ${open?"text-white":"text-black"} text-3xl md:hidden m-5`}>

        <ion-icon name="menu"></ion-icon>
       </div>
       <div className={`md:hidden text-black absolute w-2/3 h-screen px-7 py-2 font-medium bg-white/60 top-0 duration-500 ${open?'right-0':'right-[-100%]'}`}>
        <ul className="flex flex-col justify-center h-full  gap-10">
          {
            manuLinks.map((manu,i)=><li onClick={()=>setopen(false)} key={i} className="px-6 hover:text-cyan-600"> 
            <a href={manu?.link} >{manu?.name}</a>
            </li>)
          }
        </ul>
       </div>
      </div>
    </nav>
  );
};

export default Navber;

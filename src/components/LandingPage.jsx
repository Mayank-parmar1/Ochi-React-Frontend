import React from "react";
import {FaArrowUpLong} from  'react-icons/fa6'

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 mx-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index===1 && (<div className="  w-[8vw] h-[6vw] bg-red-500 rounded-md relative -top-[1.2 vw]"></div>)}
              <h1 className=" uppercase text-[9vw] leading-[8vw] tracking-tighter flex items-center">
                {item}
              </h1>
              </div> 
              
            </div>
          );
        })}
      </div>
      <div className="  border-t-[1px] border-zinc-600 mt-20 flex justify-between py-5 px-20">
        {["For public and private companies", "From first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-2 ">
          <div className="px-6 py-2 capitalize border-zinc-500 border-[2px] rounded-full text-sm font-light">
            Start
          </div>
          <div className="w-10 h-10 rounded-full border-zinc-500 font-light flex justify-center border-[2px] rounded-full">
            <span className="rotate-[45deg] items-center flex">
            <FaArrowUpLong/>
            </span>
            

          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [Rotate,setRotate]=useState(0);
 
    useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
         let mouseX=e.clientX;
         let mouseY=e.clientY;
      
console
         let X=mouseX-window.innerWidth/2;
         let Y=mouseY-window.innerHeight/2;

     var angle=Math.atan2(Y,X) * (180/Math.PI);
     setRotate(angle-180);

         


      } )
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='w-full relative bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
         <div className='absolute flex gap-10  top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] '>
               <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white'>
                <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900 flex items-center justify-center'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${Rotate}deg )`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10 '>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
               </div>

               <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900 flex items-center justify-center'> 
                <div style={{transform:`translate(-50%,-50%) rotate(${Rotate}deg )`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10 '>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                    </div>

                </div>
               </div>
         </div>
      </div>

    </div>
  )
}
export default Eyes

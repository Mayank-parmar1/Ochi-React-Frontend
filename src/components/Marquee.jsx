import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full  py-20 bg-[#004D43] rounded-t-3xl'>
        <div className='text  border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10'>
               <h1  initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",repeat:Infinity , duration:5}} className='text-[15vw] leading-none uppercase font-[Founders_Grotesk_X-Condensed] font-semibold pt-8 mb-10'>We are Ochi</h1>
               <h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[15vw] leading-none uppercase font-[Founders_Grotesk_X-Condensed] font-semibold pt-8 mb-10'>We are Ochi</h1>
               <h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[15vw] leading-none uppercase font-[Founders_Grotesk_X-Condensed] font-semibold pt-8 mb-10'>We are Ochi</h1>


        </div>
     
      
    </div>
  )
}

export default Marquee

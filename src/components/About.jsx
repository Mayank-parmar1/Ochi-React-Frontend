import React from 'react'

const About = () => {
  return (
    
      <div className='w-full py-20 bg-[#CDEA68] rounded-t-3xl text-black'>
        <h1 className='font-[Neue_Montreal] text-4xl md:text-6xl pr-10 leading[9vw] md:leading-[4vw] ml-20'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full pt-20 gap-5 flex border-t-[1px] mt-20 border-[#a1b562]'>
         <div className='w-1/2 ml-20'>
        <h1 className='text-7xl'>Our Approch</h1>
        <button className='px-10 flex uppercase py-6 mt-8 bg-zinc-900 rounded-full text-white items-center gap-4'>
            read more
           <div className='w-3 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-red-600 flex  rounded-3xl'></div>
      </div>
    </div>
  )
}

export default About

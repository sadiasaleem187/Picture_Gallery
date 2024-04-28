import React from 'react'
import Image from 'next/image'

    const Hero = () => {
     return (
     <div className='min-h-screen flex justify-center items-center'>
     <Image src={"/img.jpg"} alt='bg-image' className='object-cover w-full h-screen opacity-45' />
     <div className='absolute flex flex-col justify-center items-center space-y-6'>
     <h1 className='text-3xl md:text-4xl lg:text-5xl text-[hashtag#e81f10]'>Picture Gallery</h1>
    
     <p className='text-balance text-center px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident sint neque libero commodi dignissimos expedita! Architecto aspernatur repudiandae quas voluptatum ducimus maiores molestiae. <span className='text-[hashtag#e81f10]'>Impedit vel quos harum nihil fugit.</span></p>
    
     <div className='flex'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3 hover:text-[hashtag#e81f10]">
     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
     </svg>
    
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
     <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" className='hover:text-[hashtag#e81f10]' />
     </svg>
    
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 hover:text-[hashtag#e81f10]">
     <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
     </svg>
     </div>
     </div>
     </div>
     )
    }
    
    export default Hero


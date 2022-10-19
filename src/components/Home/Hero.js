import React from 'react'
import imgHero from '../../assets/images/hero.png'
import heroArrow from '../../assets/images/hero-arrow.svg'

export default function Hero() {
  return (
    <>
    <img src={imgHero} alt="" className=' h-screen w-screen object-cover' />
        <div className=' text-pink-50'>
            <div className='absolute 
            md:bg-transparent 
            md:top-1/4 
            md:text-left 
            md:mx-36 
            md:w-[35vw] 
            
            sm:w-screen 
            sm:m-0 
            sm:text-center 
            sm:top-1/3 
            sm:bg-stone-700 
            sm:bg-opacity-5'>
                <div className=' md:border-l-2 md:pl-5 sm:border-l-0 sm:pl-0'>
                    <h1 className='md:p-0 md:m-0 text-[64px] md:leading-[63px] font-bold md:tracking-wider md:w-[29vw] sm:w-screen sm:px-[20vw]'>Discover Inner Peace</h1>
                    <h2 className='md:m-0 md:mt-3 text-[31px] md:tracking-widest font-medium'>World Class Yoga Techniques</h2>
                    <p className='md:m-0 text-[17px] md:tracking-wider font-extralight'>Accessible and sustainable yoga for people from all walks of life</p>
                </div>
                <div className='md:flex md:items-center md:justify-start sm:justify-center'>
                <button className=' mt-4 md:ml-5 bg-amber-900 px-5 py-1 rounded-[13px]'>Inquire Now</button>
                <span> <img src={heroArrow} alt="" className='md:ml-3 md:block sm:hidden'/> </span>
                </div>
            </div>
        </div>
    </>
  )
}

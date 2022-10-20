import React from 'react'
import banner from '../../assets/images/about-banner.png'
import benefitsArrow from '../../assets/images/benefits-arrow.svg'
import meditateRainbow from '../../assets/images/meditate-rainbow.png'
import qouteFirst from '../../assets/svgs/qoute-first.svg'
import qouteSecond from '../../assets/svgs/qoute-second.svg'

export default function About() {
  return (
    <div className='not-home text-pink-50'>
        <div className="about-banner mb-10">
              <img src={banner} alt="" className='w-screen relative' />
                <h1 className='absolute text-center inline-block w-full text-[34px] font-bold xs:top-[8vh] sm:top-[11vh] md:top-[13vh] lg:top-[15vh] xl:top-[17vh] 2xl:top-[19vh] xl:text-[50px] xs:tracking-widest'>About</h1>
        </div>
        <div className='flex xs:mb-5 sm:mb-0 xs:flex-col-reverse xs:items-center xs:gap-6 xs:text-center lg:flex-row lg:justify-center lg:my-20 2xl:h-[40vh]'>
          <div className="container mx-auto lg:px-10 h-2/3 flex items-center md:px-24 sm:px-16 xs:px-5 lg:w-[50%]">
            <div className='just-text xl:pl-0 lg:pr-0 2xl:pl-56'>
            <h1 className='sm:text-[34px] xs:text-[25px] xs:font-medium sm:font-bold xs:text-center lg:text-left'>Starter <span className='font-light text-[15px]'> - $3.70/mo.</span></h1>
            <p className='mt-2 font-light xl:mb-0 lg:mb-5 md:mb-5 xs:mb-3 xs:text-[11px] sm:text-[17px] lg:text-left lg:text-[13px] 2xl:text-[14px] 2xl:font-thin'>is a registered Yoga Teacher Training School with Yoga Alliance – USA. We conduct 200-hour residential Vinyasa & Hatha Yoga Teacher Training Courses. We also offer beginner, intermediate, advanced yoga classes and retreats in General Santos City, Philippines.</p>
            <div className='flex items-center justify-center 2xl:mt-3'>
              <img src={benefitsArrow} alt="" className='lg:hidden xl:block md:hidden xs:hidden'/>
              <button className='mt-1 bg-amber-900 py-1 rounded-[13px] 2xl:px-4 2xl:ml-3 2xl:w-[20vw] xl:w-[36vw] xl:ml-3 lg:w-[100%] md:w-[100%] lg:ml-0 xs:w-[50%]'>Subscribe</button>
            </div>
            </div>
          </div>
          <div className='lg:w-[50%] lg:flex lg:justify-center 2xl:justify-start 2xl:pl-16'>
              <img src={meditateRainbow} alt="" className='floating-img lg:h-52 2xl:h-full sm:h-[262px] xs:h-[150px]'/>
          </div>
        </div>
        <div className="qoute flex justify-center xs:h-[50vh] sm:h-[80vh] lg:h-[50vh] xl:h-[40vh] xl:mb-40 items-center xs:mx-5">
              <div className='qoute-text sm:w-[80vw] lg:w-[50vw] xl:w-[40vw] text-center px-10 py-10 bg-slate-500 bg-opacity-40 rounded-xl'>
                <h1 className='xs:text-[15px] sm:text-[25px] font-extralight'>`` You cannot always control what goes on outside but you can always control what goes on inside ``</h1>
              </div>
        </div>
    </div>
  )
}

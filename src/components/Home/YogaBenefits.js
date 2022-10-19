import React from 'react'
import squareImg from '../../assets/images/square-img.png'
import squareImg2 from '../../assets/images/square-img2.jpg'
import squareImg3 from '../../assets/images/square-img3.png'
import yoga_pose from '../../assets/images/yoga_pose.png'
import benefitsArrow from '../../assets/images/benefits-arrow.svg'
import benefitsDots from '../../assets/images/dots.svg'
import twoLines from '../../assets/images/two-lines.svg'

export default function YogaBenefits() {
  return (
    <>
<section className="overflow-hidden text-pink-50 lg:flex md:block justify-center items-center xl:h-[95vh] lg:h-[80vh]">
  <div className="container mx-auto lg:px-10 md:p-20 sm:p-10 lg:p-0" >
    <div className="flex flex-wrap">
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={squareImg} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={squareImg2}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={squareImg3} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={squareImg2} />
        </div>
      </div>
    </div>
  </div>
  <div className="container mx-auto lg:px-10 h-2/3 flex items-center md:px-24 sm:px-16">
    <div className='just-text 2xl:pl-20 2xl:pr-32 xl:pl-0 lg:pr-0 '>
           <img src={benefitsDots} alt="" className='ml-auto lg:hidden xl:block md:hidden sm:hidden'/> <br></br>
           <h1 className='border-l-2 pl-2 text-[34px] font-bold'>Yoga<span className='b-text text-[19px] font-medium tracking-widest'> Benefits</span></h1>
           <p className='mt-2 font-light xl:mb-0 lg:mb-5 md:mb-5 sm:mb-3'>Regular yoga practice may reduce levels of stress and body-wide inflammation, contributing to healthier hearts. Several of the factors contributing to heart disease, including high blood pressure and excess weight, can also be addressed through yoga.</p>
           <div className='flex items-center justify-center'>
            <img src={benefitsArrow} alt="" className='lg:hidden xl:block md:hidden sm:hidden'/>
            <button className='mt-1 bg-amber-900 py-1 rounded-[13px] 2xl:px-4 2xl:ml-3 2xl:w-[20vw] xl:w-[36vw] xl:ml-3 lg:w-[100%] md:w-[100%] lg:ml-0 sm:w-[50%]'>Read More</button>
            <img src={twoLines} alt="" className='float-right lg:hidden md:hidden sm:hidden xl:block'/>
          </div>
    </div>
  </div>
</section>
    </>
  )
}

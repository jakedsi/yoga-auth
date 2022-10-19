import React from 'react'

export default function YogaPlan() {
  return (
    <div>
        <section className='container text-pink-50 sm:h-screen sm:mt-14 sm:flex sm:flex-col sm:items-center sm:text-center sm:px-16 lg:flex-row lg:text-left lg:gap-10 lg:h-[95vh]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/yoga-laptop.png'})`,
            backgroundRepeat: 'no-repeat',
            marginTop: '50px',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center'}}>
            <div className='sm:flex sm:flex-col sm:h-60 lg:w-[55vw]'>
                <h1 className='pl-2 text-[34px] font-bold lg:flex lg:items-center lg:border-l-2'>Classes <span className="b-text text-[15px] font-medium tracking-widest sm:hidden lg:block lg:mt-3"> &nbsp; Select your yoga plan</span> </h1>
                <p className='mt-2 font-light xl:mb-0 lg:mb-5 md:mb-5 sm:mb-3 text-gray-300 leading-tight'>
                Regular yoga practice may reduce levels of stress and body-wide inflammation, contributing to healthier hearts. Several of the factors contributing to heart disease, including high blood pressure and excess weight, can also be addressed through yoga.Regular yoga practice may reduce levels of stress and body-wide inflammation, contributing to healthier hearts. Several of the factors contributing to heart disease, including high blood pressure and excess weight
                </p>
            </div>
            <div className='flex flex-col gap-10 sm:mt-3'>
                <div className="btn-plan w-full bg-stone-500 bg-opacity-50 flex justify-between py-4 px-8 gap-2 items-center border-0 sm:text-left">
                    <div className="btn-plan-col1">
                        <h1 className='font-semibold tracking-widest text-[18px]'>Starter</h1>
                        <p className='font-light text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e</p>
                    </div>
                    <div className="btn-plan-col2 text-center mt-1">
                        <h5 className='text-[14px] '>$3.70/mo.</h5>
                        <button className='mt-1 bg-amber-900 py-1 rounded-[13px] px-5 text-[12px]'>Subscribe</button>
                    </div>
                </div>
                <div className="btn-plan w-full bg-stone-500 bg-opacity-50 flex justify-between py-4 px-8 gap-2 items-center border-0 sm:text-left">
                    <div className="btn-plan-col1">
                        <h1 className='font-semibold tracking-widest text-[18px]'>Standard</h1>
                        <p className='font-light text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e</p>
                    </div>
                    <div className="btn-plan-col2 text-center mt-1">
                        <h5 className='text-[14px] '>$77/mo.</h5>
                        <button className='mt-1 bg-amber-900 py-1 rounded-[13px] px-5 text-[12px]'>Subscribe</button>
                    </div>
                </div>
                <div className="btn-plan w-full bg-stone-500 bg-opacity-50 flex justify-between py-4 px-8 gap-2 items-center border-0 sm:text-left">
                    <div className="btn-plan-col1">
                        <h1 className='font-semibold tracking-widest text-[18px]'>Pro</h1>
                        <p className='font-light text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e</p>
                    </div>
                    <div className="btn-plan-col2 text-center mt-1">
                        <h5 className='text-[14px] '>$150/mo.</h5>
                        <button className='mt-1 bg-amber-900 py-1 rounded-[13px] px-5 text-[12px]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

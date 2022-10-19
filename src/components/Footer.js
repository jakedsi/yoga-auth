import React from 'react'
import footerLogo from '../assets/images/logo.png'
import { GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='bg-slate-800 bg-opacity-25 footer text-pink-50 sm:px-16 pt-5'>
        <div className='footer-contents sm:flex sm:flex-col sm:text-center sm:pt-5 sm:gap-5 lg:flex-row lg:flex-wrap lg:justify-center xl:flex-nowrap xl:pt-20'>
                <div className='logo yoga-footer lg:w-[80%] lg:mb-5 xl:text-left 2xl:pr-16'>
                    <img src={footerLogo} alt="" className='h-12 sm:mx-auto xl:mr-auto xl:ml-0 xl:mb-1'/>
                    <p className='font-light mt-1'>We aim to provide you the tools you need to alleviate pain, let go of ego and feel safe in your bodies, all without casting judgement. </p>
                </div>
                <div className='quick-links lg:w-[30%] xl:text-left'>
                    <h4 className='mb-2 font-bold'>Quick Links</h4>
                    <p className='text-[14px] mt-3'>Home</p>
                    <p className='text-[14px] mt-3'>About Us</p>
                    <p className='text-[14px] mt-3'>Classes</p>
                </div>
                <div className='others lg:w-[30%] xl:text-left'>
                    <h4 className='mb-2 font-bold'>Others</h4>
                    <p className='text-[14px] mt-3'>Solo Yoga</p>
                    <p className='text-[14px] mt-3'>Couple Yoga</p>
                    <p className='text-[14px] mt-3'>Family & Friends</p>
                </div>
                <div className='contact-info lg:w-[80%] xl:text-left'>
                    <h4 className='mb-2 font-bold'>Contact Information</h4>
                    <div className='xl:flex xl:mt-3'><GoLocation className='sm:mx-auto sm:h-5 xl:mx-0'/> <p  className='text-[14px] mt-3 xl:mt-0 xl:ml-5'> Bodhi Yoga Center, 025 A. Ramos Street, General Santos City, Philippines</p></div>
                    <div className='xl:flex xl:mt-3 xl:items-center'> <BsTelephone className='sm:mx-auto sm:h-10 w-5 xl:mx-0'/><p  className='text-[14px] mt-3 xl:mt-0 xl:ml-5'>+63-917-5085571</p></div>
                    <div className='xl:flex xl:mt-3 xl:items-center'><AiOutlineMail className='sm:mx-auto sm:h-10 w-5 xl:mx-0'/><p  className='text-[14px] mt-3  xl:mt-0 xl:ml-5'> abcdefghi@email.com</p></div>
                </div>
            </div>
            <div className='text-center mt-20 xl:mt-10 pb-5 font-extralight text-slate-400 text-[12px]'>Copyright 2022 Yoga. All Right Reserved. Website Design by Solo Flight</div>
    </div>
  )
}

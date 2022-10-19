import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink} from 'react-router-dom'

export default function Navbar() {
    const [nav, navState] = React.useState(false)
  return (
    <>

<nav className={nav ? ' bg-gray-700 bg-opacity-5 backdrop-blur-lg justify-between w-full items-center z-10 text-pink-50 top-0 px-2 py-2.5 absolute ' : 'bg-black bg-opacity-5 justify-between w-full items-center z-10 text-pink-50 top-0 px-2 py-2.5 absolute '}>
    <div className="container flex flex-wrap justify-between items-center mx-auto">
        <img src={logo} alt="logo" className=" h-12"/>
     
            <ul className='md:flex gap-10 text-sm sm:hidden text-pink-50'>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/" end> Home </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/classes" end> Classes </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/about" end> About Us </NavLink></li>
                {
                localStorage.getItem("token")
                ?
                <><li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/profile"> Profile </NavLink></li></>
                :
                <><li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/login" end> Login </NavLink></li></>
                }

            </ul>
            <div className='md:flex items-center sm:hidden'>
                <span className='text-sm tracking-widest font-extralight'>Interested?</span>&nbsp; <span><b>Contact Us</b></span>
            </div>

        <button className='sm:block md:hidden border-2 rounded' onClick={()=> navState((prev) => !prev)}>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                    </path>
                </svg>
        </button>
        <ul className={nav ? ' transition ease-in duration-500 gap-5 flex flex-col w-full items-center md:hidden' : 'hidden' }>
                <li className=' cursor-pointer hover:text-pink-100 hover:border-b'><NavLink exact="true" activeclassname="active" to="/" end> Home </NavLink></li>
                <li className=' cursor-pointer hover:text-pink-100 hover:border-b'><NavLink exact="true" activeclassname="active" to="/classes" end> Classes </NavLink></li>
                <li className=' cursor-pointer hover:text-pink-100 hover:border-b'><NavLink exact="true" activeclassname="active" to="/about" end> About Us </NavLink></li>
                {
                localStorage.getItem("token")
                ?
                <><li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/profile"> Profile </NavLink></li></>
                :
                <><li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/login" end> Login </NavLink></li></>
                }
        </ul>
    </div>
</nav>
    </>
  )
}

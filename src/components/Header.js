import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import logo from '../Images/logo.jpg'
import { FiChevronLeft } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState(false)
    return (
        <>

            <div className="relative " >

                {/* Side Nav Bar */}
                <nav className={active ? " navactive" : " navprop "}
                >

                    <div className="flex justify-between" >
                        <NavLink to="/">
                            <img className="w-40 h-16 rounded-3xl " src={logo} alt="" />
                        </NavLink>
                        <button
                            onClick={() => setActive("")}
                            className="text-2xl focus:outline-none focus:bg-red-900 rounded-xl hover:bg-red-800 " >
                            <FiChevronLeft />
                        </button>

                    </div>

                    <ul className="flex flex-col text-xl  py-6 " >
                        <li>
                            <NavLink
                                onClick={() => setActive("")}
                                className='hover:bg-red-500 rounded-lg block px-4 py-2 ' to="/">Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => setActive("")}
                                className='hover:bg-red-500 rounded-lg block px-4 py-2' to="/login">Login
                            </NavLink></li>
                        <li>
                            <NavLink
                                onClick={() => setActive("")}
                                className='hover:bg-red-500 rounded-lg block px-4 py-2' to="/register">Register
                            </NavLink></li>
                        <li>
                            <NavLink
                                onClick={() => setActive("")}
                                className='hover:bg-red-500 rounded-lg block px-4 py-2' to="/contact">Contact Us
                            </NavLink></li>
                    </ul>

                </nav>


                {/* Start of Header */}
                <div className="flex items-center  justify-between sm:block  bg-red-700 text-white  z-0 relative h-24 sm:h-auto 
                
                " >


                    <button
                        onClick={() => setActive("true")}

                        className="text-2xl focus:outline-none focus:bg-red-900 rounded-xl hover:bg-red-800 sm:hidden ml-10    " >
                        <GiHamburgerMenu />
                    </button>

                    <div>
                        <img

                            className="h-12 w-32 ml-10 rounded-3xl sm:hidden  " src={logo} alt="" />
                    </div>






                    <div className="  transform -translate-x-[2000px] sm:translate-x-0 overflow-hidden flex  justify-between p-2 items-center 
                     transition duration-500 ease-linear
                     " >



                        <div className='mx-4' >
                            <NavLink to="/">
                                <img className='h-20 w-40 p-2 rounded-2xl ' src={logo} alt="" />
                            </NavLink>
                        </div>

                        <div className="flex " >
                            <ul className="flex items-center space-x-8 md:space-x-16 lg:space-x-28 mr-4  uppercase text-sm  " >
                                <li><NavLink to="/">Home</NavLink>
                                </li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>

                            <div className="text-3xl mx-8
                             hover:transform hover:scale-125 transition ease-linear duration-300 " >
                                <a href="#">
                                    <CgProfile />
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="text-3xl mx-8 sm:hidden
                    hover:transform hover:scale-125 transition ease-linear duration-300
                     " >
                        <a href="#">
                            <CgProfile />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
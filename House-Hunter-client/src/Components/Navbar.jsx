import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import logo from '../../public/assets/Untitled-1.png'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleLogOut = () => {
        console.log('click');
    }

    const navitem = [
        {
            navMenu: 'home',
            link: '/'
        },
        
        {
            navMenu: 'dashboard',
            link: '/dashboard/add-house'
        },
    ]

    return (
        <div className='lg:px-10 w-full py-4 fixed bg-black mx-auto text-white'>
            <div className='block lg:w-5/6 mx-auto space-y-3 relative'>
                <div className='hidden lg:flex justify-between items-center'>
                    <div className='block lg:flex justify-center items-center gap-5'>
                        <div className='flex justify-center items-center gap-2'>
                            <MdEmail />
                            <p> Email: info@yourdomain.com</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <IoIosCall />
                            <p> Phone: +1 0123 456 789</p>
                        </div>
                    </div>
                    <div className='list-none lg:flex justify-center items-center gap-10'>
                        <div className='bg-[#8046fd] rounded-full'>
                            <Link to="/register"  className='px-6 py-1 rounded-full bg-red-500'>Register</Link>
                            <Link to="/login" className='px-6 py-1 rounded-full'>Login</Link>
                        </div>
                    </div>
                </div>
                <hr className='hidden lg:block' />
                <div className='lg:flex justify-between items-center'>
                    <div className='block lg:flex justify-between items-center relative'>
                        <div className='flex justify-between items-center'>
                            <div className='text-xl font-bold px-4 flex justify-normal items-center gap-2'>
                                <img src={logo} alt="logo" className='h-10' />
                                <h1>House Hunter</h1>
                            </div>
                            <h1 onClick={() => setShowMenu(!showMenu)} className='text-xl text-red-500 font-bold px-4 block lg:hidden cursor-pointer'>
                                {
                                    showMenu ? <RxCross2 /> : <GiHamburgerMenu />
                                }
                            </h1>
                        </div>
                    </div>
                    <div className='hidden list-none lg:flex justify-center items-center gap-10'>
                        {
                            navitem?.map(item =>
                                <li>
                                    <Link className='capitalize' to={item.link}>{item.navMenu}</Link>
                                </li>
                            )
                        }
                        
                    </div>
                </div>
                
                <div className={`absolute px-4 lg:hidden duration-700 top-10 list-none space-y-5 w-full py-6 ${showMenu ? 'left-5' : 'left-[-120%]'}`}>
                    {
                        navitem?.map(item =>
                            <li>
                                <Link className='capitalize' to={item.link}>{item.navMenu}</Link>
                            </li>
                        )
                    }
                    <div className='rounded-full w-[50%] flex justify-start items-center gap-5'>
                        <Link to="/register" className='rounded-full underline'>Register</Link>
                        <Link to="/login" className='rounded-full underline'>Login</Link>
                    </div>
                    <div className='lg:hidden flex-col flex justify-start items-start gap-5'>
                        <div className='flex justify-start items-center gap-2'>
                            <IoIosCall />
                            <p> Phone: +1 0123 456 789</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <MdEmail />
                            <p> Email: info@yourdomain.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import { NavLink } from 'react-router-dom'
import metairFlowLogo from '/icons/metairflow-icon.png'
import menu from "/icons/menu.png"
import close from "/icons/close.png"
import { useState } from 'react'

export default function Navbar(){
    const [open, setOpen] = useState(false)

    const navClass = ({ isActive }) =>
    isActive 
        ? "text-main font-semibold" 
        : "text-gray-700 hover:text-main";


    return (
        <nav className="w-full flex justify-between p-5 items-center border-b border-gray-200 font-satoshi font-semibold">
            <div className='flex items-center gap-4'>
                <img src={metairFlowLogo} className='w-16 h-12' alt="MetairFlow Logo" />

                <div className='hidden md:flex gap-10 ml-10'>
                    <NavLink to="/" className={navClass}>Home</NavLink>
                    <NavLink to="/">Property</NavLink>
                    <NavLink to="/">About Us</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </div>
            </div>

            <div className='hidden md:flex items-center justify-end gap-4'>
                <NavLink to="/login">
                    <button className='text-main border-main border-2 font-semibold px-5 py-2 rounded-xl hover:cursor-pointer'>
                        Login
                    </button>
                </NavLink>

                <NavLink to="/register">
                    <button className='bg-main text-white border-main border-2 font-semibold px-5 py-2 rounded-xl hover:cursor-pointer'>
                        Register
                    </button>
                </NavLink>
            </div>

            <button
                className='md:hidden'
                onClick={() => setOpen(!open)}
            >
                {open ? 
                <img src={close} className='w-8 h-8'/>
                : 
                <img src={menu} className='w-8 h-8'/>
                }
            </button>

            {open && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 md:hidden z-50">
                    <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/" onClick={() => setOpen(false)}>Property</NavLink>
                    <NavLink to="/" onClick={() => setOpen(false)}>About Us</NavLink>
                    <NavLink to="/" onClick={() => setOpen(false)}>Contact</NavLink>

                    <div className="flex flex-col gap-3 mt-3">
                        <NavLink to="/login" onClick={() => setOpen(false)}>
                            <button className='text-main border-main border-2 font-semibold px-4 py-2 rounded-xl w-full'>
                                Login
                            </button>
                        </NavLink>

                        <NavLink to="/register" onClick={() => setOpen(false)}>
                            <button className='bg-main text-white font-semibold px-4 py-2 rounded-xl w-full'>
                                Register
                            </button>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
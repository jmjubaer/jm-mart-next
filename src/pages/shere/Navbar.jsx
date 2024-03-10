"use client"
import { GlobalSate } from "@/Provider/GlobalProvider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars,FaRegUserCircle,FaTimes } from 'react-icons/fa';
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
const Navbar = () => {
    const {user,logOutUser} = GlobalSate()
    const [open, setOpen] = useState(false);
    const [control, setControl] = useState(false);
    console.log(control);
    return (
        <div className="jm_container py-5">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center'>
                <h1 className='text-4xl lg:col-span-2'><Link href="/"><span className='font-serif text-5xl text-pink-500'>J</span>m <span className='font-serif text-5xl text-pink-500'>M</span>art</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/blogs">Blog</Link></li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7 items-center'>
                        <li><button><IoSearchSharp className="text-2xl" /></button></li>
                        <li><Link href="/cart" ><IoCartOutline className="text-2xl" /></Link></li>
                        {user ? 
                            <div className="relative group rounded-full flex items-center justify-center border overflow-hidden w-10 h-10">
                            {user?.photoURL ? <Image
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full group-hover:opacity-80 object-cover"
                                src={user?.photoURL}
                                alt="Profile Image"
                            />
                            : <FaRegUserCircle className="text-3xl"/>
                        }
                            <div className="absolute top-0 left-0 bg-zinc-400 opacity-0 duration-500 w-full h-full  flex group-hover:opacity-60 items-center justify-center">
                            </div>
                            <button onClick={logOutUser} title="Log Out" className="absolute top-0 left-40 duration-500 w-full h-full  flex group-hover:left-0 items-center justify-center">
                                <ImExit className="text-white"/>
                            </button>
                            </div>
                            : <Link href={"/login"} className="primary_btn_rounded">login</Link>
                        }
                    </ul>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;

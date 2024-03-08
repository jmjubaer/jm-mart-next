"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars,FaRegUserCircle,FaTimes } from 'react-icons/fa';
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
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
                        <li><Link href="/user"><FaRegUserCircle className="text-2xl" /></Link></li>
                    </ul>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import { FaGoogle,FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { PiEnvelopeLight } from "react-icons/pi";
const Footer = () => {
    return (
        <div className="bg-[#e6e6e6] bg-opacity-50 pt-20">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 border-b-2 jm_container">
                <div className="">
                    <h2 className='text-4xl lg:col-span-2'><Link href="/"><span className='font-serif text-5xl text-pink-500'>J</span>m <span className='font-serif text-5xl text-pink-500'>M</span>art</Link></h2>

                    <div className="flex text-gray-500 gap-1 my-5">
                        <div className="">
                            <CiLocationOn className="text-3xl"/>
                        </div>
                        <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                    </div>
                    <div className="flex text-gray-500 gap-1 my-5 items-center">
                        <div className="">
                            <PiEnvelopeLight className="text-3xl"/>
                        </div>
                        <p>contact@jmmart.com</p>
                    </div>
                    <div className="flex text-gray-500 gap-2 my-5 items-center">
                        <div className="">
                            <SlPhone className="text-2xl"/>
                        </div>
                        <p>+001 2233 456</p>
                    </div>


                    <ul className="flex text-gray-500 gap-3 justify-between">
                        <li><a href="#" className=" inline-block text-2xl rounded-full"><FaFacebookF/></a></li>
                        <li><a href="#" className=" inline-block text-2xl rounded-full"><FaXTwitter/></a></li>
                        <li><a href="#" className=" inline-block text-2xl rounded-full"><FaInstagram/></a></li>
                        <li><a href="#" className=" inline-block text-2xl rounded-full"><FaLinkedinIn/></a></li>
                        <li><a href="#" className=" inline-block text-2xl rounded-full"><FaPinterestP/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-xl text-gray-700 font-semibold mb-4">Categories</h3>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Men
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Watch
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Accessories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Footwear
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#56cfe1] block my-2"
                            >
                                Electronics
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-xl text-gray-700 font-semibold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-[#56cfe1] my-3 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#56cfe1] my-3 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#56cfe1] my-3 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-[#56cfe1] my-3 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="">                    
                    <h3 className="text-xl text-gray-700 font-semibold mb-7">Newsletter Signup</h3>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                    <div className="border border-black rounded-full mt-8 flex w-fit p-0.5">
                        <input type="search" name="" id="" className="bg-transparent outline-none w-full px-2" placeholder="Enter your email"/>
                        <button className="primary_btn_rounded">Subscribe</button>
                    </div>
                </div>
            </div>
            <p className="text-center my-5">
                © 2023. JM-MART . All rights reserved.{" "}
            </p>
        </div>
    );
};

export default Footer;

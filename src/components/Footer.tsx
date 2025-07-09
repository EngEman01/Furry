import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className='w-full bg-black p-10 text-white flex flex-col justify-between items-center' style={{ fontFamily: 'cursive' }}>


                <div className='w-full flex justify-around items-start p-10 gap-6 flex-col sm:flex-col md:flex-row'>

                    <div className='furry-logo w-full'>
                        <Image
                            src="/logo.svg"
                            alt="furry logo"
                            width={200}
                            height={200}
                            style={{ width: "100%", height: "auto" }}
                        />
                        <div className="social-links mt-5 ml-2 flex items-center justify-start">
                            <FaFacebookF className='text-gray-500 text-3xl mr-2 cursor-pointer' />
                            <FaTwitter className='text-gray-500 text-3xl mr-2 cursor-pointer' />
                            <FaYoutube className='text-gray-500 text-3xl mr-2 cursor-pointer' />
                            <FaInstagram className='text-gray-500 text-3xl mr-2 cursor-pointer' />
                            <FaAmazon className='text-gray-500 text-3xl mr-2 cursor-pointer' />
                        </div>
                    </div>

                    <div className='furry-shop w-full'>
                        <h2 className='font-bold mb-3'>Shop</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li><Link href="/about" className="mb-2 block hover:underline">About Us</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Conditions</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Our Journals</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Careers</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Affiliate Programme</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Ultras Press</Link></li>
                        </ul>
                    </div>

                    <div className='furry-links w-full'>
                        <h2 className='font-bold mb-3'>Quick Links</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li><Link href="/offers" className="mb-2 block hover:underline">Offers</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Conditions</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Our Journals</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Careers</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Affiliate Programme</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Ultras Press</Link></li>
                        </ul>
                    </div>

                    <div className='furry-services w-full'>
                        <h2 className='font-bold mb-3'>Customer Service</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li><Link href="#" className="mb-2 block hover:underline">FAQ</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Contact</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Privacy Policy</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Returns & Refunds</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Cookie Guidelines</Link></li>
                            <li><Link href="#" className="mb-2 block hover:underline">Delivery Information</Link></li>
                        </ul>
                    </div>

                </div>


                <div>
                    <div className='copy-right'>
                        <h4 className='text-gray-500'>© 2025 Furry. All rights reserved.</h4>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
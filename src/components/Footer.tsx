import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-black p-10 text-white flex flex-col justify-between items-center' style={{ fontFamily: 'cursive' }}>


                <div className='w-full flex justify-around items-start p-10 gap-6 flex-col sm:flex-col md:flex-row'>

                    <div className='furry-logo w-full'>
                        <Image src="/logo.svg" alt="furry logo" width={160} height={160} />                        <div className="social-links mt-5 ml-2 flex items-center justify-start">
                            <FaFacebookF className='text-gray-500 text-3xl mr-2' />
                            <FaTwitter className='text-gray-500 text-3xl mr-2' />
                            <FaYoutube className='text-gray-500 text-3xl mr-2' />
                            <FaInstagram className='text-gray-500 text-3xl mr-2' />
                            <FaAmazon className='text-gray-500 text-3xl mr-2' />

                        </div>
                    </div>
                    <div className='furry-shop w-full'>
                        <h2 className='font-bold'>Shop</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li>About Us</li>
                            <li>Conditions</li>
                            <li>Our Journals</li>
                            <li>Careers</li>
                            <li>Affiliate Programme</li>
                            <li>Ultras Press</li>
                        </ul>

                    </div>
                    <div className='furry-links w-full'>
                        <h2 className='font-bold'>Quick Links</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li>Offers</li>
                            <li>Conditions</li>
                            <li>Our Journals</li>
                            <li>Careers</li>
                            <li>Affiliate Programme</li>
                            <li>Ultras Press</li>
                        </ul>
                    </div>
                    <div className='furry-services w-full'>
                        <h2 className='font-bold'>Customer Service</h2>
                        <ul className='text-gray-400 text-sm mr-2'>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Returns & Refunds</li>
                            <li>Cookie Guidelines</li>
                            <li>Delivery Information</li>
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
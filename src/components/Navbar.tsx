
import Image from 'next/image';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaBasketShopping } from "react-icons/fa6";
import ModalLogin from './auth/modalLogin'; // Assuming you have a ModalLogin component
import Link from 'next/link';
import SearchBar from './Search/SearchBar'

const Navbar = () => {


    return (
        <>
            <div className='relative z-50'>
                <div className='w-full bg-white flex justify-between items-center p-4'>
                    <div className='logoSection w-full flex justify-center items-center'>
                        <Link href="/">
                        <Image src="/logo.svg" alt="furry logo" width={200} height={200} />   
                        </Link>             </div>
                    <div className='searchSection w-full'>
                        {/* <input type="text" placeholder='Search for more than 20,000 products' className='w-full h-12 p-4 bg-gray-200 rounded-lg' /> */}
                        <SearchBar/>
                    </div>
                    <div className='userNeed w-full flex justify-center items-center text-[#76accd]'>
                        {/* <FaRegUserCircle className='inline mx-2' size={30} /> */}
                        <ModalLogin />
                        <FaBasketShopping className='inline mx-2' size={30} />
                    </div>


                </div>

                {/* Navigation Links */}
                <div className='w-full bg-white flex justify-center items-center p-2'>
                    <ul className='flex justify-between items-center max-w-6xl'>
                        <li className='mx-4 text-gray-500'><Link href="/">Home</Link></li>
                        <li className='mx-4 text-gray-500'><Link href="/about">About</Link></li>
                        <li className='mx-4 text-gray-500'><Link href="/pets?pageNumber=1">All Products</Link></li>
                        <li className='mx-4 text-gray-500'><Link href="/free-dlivery">Free Delivery</Link></li>
                        <li className='mx-4 text-gray-500'><Link href="/blog">Blog</Link></li>
                        {/* <li className='mx-4 text-gray-500'><Link href="/shop">Shop</Link></li> */}
                        <li className='mx-4 text-gray-500'><Link href="/offers">Offers</Link></li>
                        <li className='mx-4 text-red-500'><Link href="/get-pro">Get PRO</Link></li>
                        <li className='mx-4 text-red-500'><Link href="/adminDashboard">Admin Dashboard</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;
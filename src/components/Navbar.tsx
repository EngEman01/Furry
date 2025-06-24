import Image from 'next/image';
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <>
            <div className='relative z-50'>
                <div className='w-full bg-white flex justify-between items-center p-4'>
                    <div className='logoSection w-full flex justify-center items-center'>
                        <Image src="/logo.svg" alt="furry logo" width={200} height={200}/>                </div>
                    <div className='searchSection w-full'>
                        <input type="text" placeholder='Search for more than 20,000 products' className='w-full h-12 p-4 bg-gray-200 rounded-lg' />
                    </div>
                    <div className='userNeed w-full flex justify-center items-center'>
                        <FaRegUserCircle className='inline mx-2' size={24} />
                        <FaBasketShopping className='inline mx-2' size={24} />
                    </div>
                </div>


                <div>
                    <div className='w-full bg-white flex justify-center items-center p-2'>
                        <ul className='flex justify-between items-center max-w-6xl'>
                            <li className='mx-4 text-gray-500'>Home</li>
                            <li className='mx-4 text-gray-500'>All Products</li>
                            <li className='mx-4 text-gray-500'>Free Delivery</li>
                            <li className='mx-4 text-gray-500'>Blog</li>
                            <li className='mx-4 text-gray-500'>Shop</li>
                            <li className='mx-4 text-gray-500'>Offers</li>
                            <li className='mx-4 text-gray-500'>Sale</li>
                            <li className='mx-4 text-gray-500'>Pages</li>
                            <li className='mx-4 text-red-500'>Get PRO</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
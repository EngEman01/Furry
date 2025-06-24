import React from 'react'
import { BiFoodMenu } from "react-icons/bi";
import { PiBird } from "react-icons/pi";
import { IoFish } from "react-icons/io5";
import { GiCannedFish } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { MdMedicationLiquid } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";

const navSaller = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto flex justify-center items-start' style={{ width: '30%' }}>
                <nav>
                    <ul>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <BiFoodMenu />
                            <a href="#" className=' ml-2'>Pet Food</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <PiBird />
                            <a href="#" className=' ml-2'>Bird</a>
                        </li>

                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <IoFish />
                            <a href="#" className=' ml-2'>Fishs</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <GiCannedFish />
                            <a href="#" className=' ml-2'>Canned foods</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <MdHealthAndSafety />
                            <a href="#" className=' ml-2'>Health products</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <FaBasketShopping />
                            <a href="#" className=' ml-2'>Household Supplies</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <MdMedicationLiquid />
                            <a href="#" className=' ml-2'>Medications</a>
                        </li>
                        <li className='flex justify-start items-center mb-6 text-gray-600 p-2 rounded-lg hover:bg-[#76accd] hover:text-white'>
                            <MdOutlinePets />
                            <a href="#" className=' ml-2'>Pet clothings</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default navSaller
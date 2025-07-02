import Link from 'next/link'
import React from 'react'
import { MdOutlinePets, MdOutlineArticle } from 'react-icons/md'
import { FaChalkboardUser } from 'react-icons/fa6'
import { CgMenuGridR } from 'react-icons/cg'

const AdminSidebar = () => {
    return (
        <>

            <div >

                <Link href={'/adminDashboard'} className='flex items-center justify-center gap-2 h-20 cursor-pointer text-2xl border-b-2'>
                    <CgMenuGridR className='text-[#e08686] text-4xl'/>
                    <span className='hidden lg:block'> Admin Dashbourd</span>
                </Link>
            </div>

            <div className='flex items-center justify-center h-50 text-xl'>
                <ul>
                    <li>

                        <Link href={'/adminDashboard/pet_table'}  className='flex items-center justify-center gap-2 h-10 cursor-pointer hover:bg-[#e08686c4] p-4 rounded-xl text-[#e08686] hover:text-white'>
                            <MdOutlinePets className='text-4xl'/>
                           <span className='hidden lg:block text-white'>Pets Page</span> 
                        </Link>
                    </li>
                    <li>

                        <Link href={'/adminDashboard/blog_table'}  className='flex items-center justify-center gap-2 h-10 cursor-pointer hover:bg-[#e08686c4] p-4 rounded-xl text-[#e08686] hover:text-white'>
                            <MdOutlineArticle className=' text-4xl'/>
                           <span className='hidden lg:block text-white'>Blog Page</span>
                        </Link>
                    </li>
                    <li>

                        <Link href={'/adminDashboard/blog_table'}  className='flex items-center justify-center gap-2 h-10 cursor-pointer hover:bg-[#e08686c4] p-4 rounded-xl text-[#e08686] hover:text-white'>
                            <FaChalkboardUser className=' text-4xl'/>
                           <span className='hidden lg:block text-white'>User Page</span>
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default AdminSidebar
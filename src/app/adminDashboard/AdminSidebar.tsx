import Link from 'next/link'
import React from 'react'
import { MdOutlinePets, MdOutlineArticle } from 'react-icons/md'
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

                        <Link href={'/adminDashboard/pet_table'}  className='flex items-center justify-center gap-2 h-10 cursor-pointer hover:bg-[#e08686c4] p-4 rounded-xl'>
                            <MdOutlinePets className='text-[#e08686] text-4xl'/>
                           <span className='hidden lg:block'>Pets Page</span> 
                        </Link>
                    </li>
                    <li>

                        <Link href={'/adminDashboard/blog_table'}  className='flex items-center justify-center gap-2 h-10 cursor-pointer hover:bg-[#e08686c4] p-4 rounded-xl'>
                            <MdOutlineArticle className='text-[#e08686] text-4xl'/>
                           <span className='hidden lg:block'>Blog Page</span>
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default AdminSidebar
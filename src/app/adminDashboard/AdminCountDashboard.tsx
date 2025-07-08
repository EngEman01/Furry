import React from 'react'
import { MdOutlinePets, MdOutlineArticle } from 'react-icons/md'
import { FaChalkboardUser } from 'react-icons/fa6'
import { GiOpenedFoodCan } from "react-icons/gi";
import { getUsersCount } from '@/APICalls/usersApiCalls';
import { getPetsCount } from '@/APICalls/petsApiCall';
import { getBlogsCount } from '@/APICalls/blogsApiCalls';

const AdminCountDashboard = async () => {

    const petsCount = await getPetsCount()
    const usersCount = await getUsersCount()
    const blogsCount = await getBlogsCount()

    return (
        <>

            <div className='w-full grid lg:grid-cols-2 gap-10 text-3xl'>
                <div className='w-4/5 h-40 flex items-center justify-around rounded-xl bg-[#76accd] text-white p-4 cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <MdOutlinePets className='text-[#e08686] text-5xl' />
                        <span>Pets</span>
                    </div>
                    <span>{ petsCount }</span>
                </div>
                <div className='w-4/5 h-40 flex items-center justify-around rounded-xl bg-[#76accd] text-white p-4 cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <MdOutlineArticle className='text-[#e08686] text-5xl' />
                        <span>Blogs</span>
                    </div>
                    <span>{ blogsCount }</span>
                </div>
                <div className='w-4/5 h-40 flex items-center justify-around rounded-xl bg-[#76accd] text-white p-4 cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <FaChalkboardUser className='text-[#e08686] text-5xl' />
                        <span>Users</span>
                    </div>
                    <span>{usersCount}</span>
                </div>
                <div className='w-4/5 h-40 flex items-center justify-around rounded-xl bg-[#76accd] text-white p-4 cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <GiOpenedFoodCan className='text-[#e08686] text-5xl' />
                        <span>Food</span>
                    </div>
                    <span>200</span>
                </div>


            </div>

        </>
    )
}

export default AdminCountDashboard
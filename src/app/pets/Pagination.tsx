import Link from 'next/link'
import React from 'react'

const pages = [1, 2 , 3 , 4]

const Pagination = () => {
    return (
        <>
            <div className="flex justify-center items-center" style={{ width: '80%' }}>

                <button className='p-2 cursor-pointer rounded-4xl bg-[#76accd] text-white mr-4 hover:bg-[#5985a0]'>
                    prev
                </button>

                <div>
                    {pages.map(page => (
                        <Link href='/' className='text-lg mr-2 cursor-pointer' key={page}>
                            {page}
                        </Link >
                    ))}
                </div>

                <button className='p-2 cursor-pointer rounded-4xl bg-[#76accd] text-white m-4'>
                    next
                </button>

            </div>
        </>
    )
}

export default Pagination
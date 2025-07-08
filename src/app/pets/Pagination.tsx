import Link from 'next/link'
import React from 'react'

interface PaginationProps {
    pages: number,
    pageNumber: number,
    route: string
}

const Pagination = ({ pages, pageNumber, route }: PaginationProps) => {

    let PagesArr: number[] = [];
    for (let i = 1; i <= pages; i++) PagesArr.push(i)

    const prev = pageNumber - 1
    const next = pageNumber + 1
    return (
        <>
            <div className="flex justify-center items-center mt-6" style={{ width: '80%' }}>

                {pageNumber > 1 && (
                    <Link href={`${route}?pageNumber=${prev}`} className='p-2 cursor-pointer rounded-4xl bg-[#76accd] text-white mr-4 hover:bg-[#5985a0]'>
                        prev
                    </Link>
                )}

                <div>
                    {PagesArr.map(page => (
                        <Link href={`${route}?pageNumber=${page}`} className={`${pageNumber == page ? "bg-[#76accd9d]": ""} p-2 rounded-2xl text-lg mr-2 cursor-pointer`} key={page}>
                            {page}
                        </Link >
                    ))}
                </div>

                {pageNumber !== pages && (
                    <Link href={`${route}?pageNumber=${next}`} className='p-2 cursor-pointer rounded-4xl bg-[#76accd] text-white m-4'>
                        next
                    </Link>
                )}

            </div>
        </>
    )
}

export default Pagination
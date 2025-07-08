'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBar = () => {

    const router = useRouter();
    const [searchText, setText] = useState('');

    const FormLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/pets/search?searchText=${searchText}`)
        console.log('search text:', searchText);
    }


    return (
        <>
            <form className='flex flex-col gap-4' onSubmit={FormLoginSubmit}>
                <input
                    type="search"
                    placeholder='Search for more than 20,000 pets'
                    className='w-full h-12 p-4 bg-gray-200 rounded-lg'
                    value={searchText}
                    onChange={(e) => setText(e.target.value)}
                />

            </form>
        </>
    )
}

export default SearchBar
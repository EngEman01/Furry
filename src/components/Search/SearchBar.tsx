'use client'

import React, { useState } from 'react'

const SearchBar = () => {


    const [text, setText] = useState('');

    const FormLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        console.log('search text:', text);



    }


    return (
        <>
            <form className='flex flex-col gap-4' onSubmit={FormLoginSubmit}>
                <input
                    type="text"
                    placeholder='Search for more than 20,000 products'
                    className='w-full h-12 p-4 bg-gray-200 rounded-lg'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
          
            </form>
        </>
    )
}

export default SearchBar
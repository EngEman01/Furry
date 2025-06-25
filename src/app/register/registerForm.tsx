'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';

const registerForm = () => {


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const FormLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name == '') return toast.error('Name is required');
        if (phone == '') return toast.error('Phone is required');
        if (email == '') return toast.error('Email is required');
        if (password == '') return toast.error('Password is required');

        console.log('Email:', email);
        console.log('Password:', password);



    }


    return (
        <>
            <form className='flex flex-col gap-4' onSubmit={FormLoginSubmit}>
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder='Enter Your phone number'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='Enter Email'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Enter Password'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                    style={{ fontSize: '23px'}}
                >
                    Create Account
                </button>
            </form>
        </>
    )
}

export default registerForm
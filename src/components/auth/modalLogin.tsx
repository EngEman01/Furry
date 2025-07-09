'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';



const modalLogin = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const FormLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (email == '') return toast.error('Email is required');
        if (password == '') return toast.error('Password is required');

        try {
            await axios.post(`${DOMAIN}/api/users/login` , { email , password })
            router.replace('/')
            router.refresh()

        } catch (error : any) {
            toast.error(error?.response?.data.message)
            console.log(error)
        }

        setShowModal(false);

    }


    return (
        <>

            <div style={{ width: 30, height: 30, display: 'inline-block', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                <FaRegUserCircle
                    size={30}
                    className="custom-basket-icon"
                />
            </div>



            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                        <div className="flex items-center justify-between p-4 border-b rounded-t">
                            <h3 className='text-5xl mb-6 text-[#76accd]' style={{ fontFamily: '"Chewy", system-ui' }}>Login</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                                onClick={() => setShowModal(false)}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 space-y-4">
                            <form className='flex flex-col gap-4' onSubmit={FormLoginSubmit}>

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
                                    className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                                >
                                    Login
                                </button>

                            </form>
                        </div>

                        <div className="flex items-center justify-center p-4 border-t rounded-b text-blue-800">

                            <Link
                                href="/register"
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                <button
                                    type="button"
                                    className="text-blue-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Create Account?
                                </button>

                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default modalLogin
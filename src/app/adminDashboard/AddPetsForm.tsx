'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddPetsForm = () => {


    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [freeDelivery, setFreeDelivery] = useState(false);
    const [offer, setOffer] = useState(0);

    const FormLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name == '') return toast.error('Name is required');
        if (image == '') return toast.error('image is required');
        if (description == '') return toast.error('description is required');
        if (price == 0) return toast.error('price is required');

        console.log('description:', description);
        console.log('price:', price);



    }


    return (
        <>
            <form className='w-full flex flex-col gap-4' onSubmit={FormLoginSubmit}>
                <input
                    type="text"
                    placeholder='Enter Pet Name'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter URL Image'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <textarea
                    placeholder='Enter Description'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="number"
                    placeholder='Enter price'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))
                    }
                />

                {/* <input
                    type="radio"
                    placeholder='Enter if it free Delivery'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={freeDelivery}
                     onChange={(e) => setFreeDelivery(e.target.value)}
                /> */}


                <input
                    type="number"
                    placeholder='Enter offer'
                    className='p-3 mb-3 rounded-xl border-2 border-gray-500 text-black'
                    value={offer}
                     onChange={(e) => setOffer(parseInt(e.target.value))}
                />

                <button
                    type="submit"
                    className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                    style={{ fontSize: '23px'}}
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default AddPetsForm
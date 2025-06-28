import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiThreeLeaves } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";
import { MdLocalOffer } from "react-icons/md";


const support = () => {
    return (
        <>
            <div className='cards p-15 m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ' style={{ width: '80%', margin: '0 auto'}}>
                <div>
                    <CiDeliveryTruck className='text-[#76accd] mb-3' size={'60px'} />
                    <h2 className='text-2xl mb-4' style={{ fontFamily: '"Chewy", system-ui' }}>Free Delivery</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>

                <div>
                    <GiThreeLeaves className='text-[#76accd] mb-3' size={'60px'} />
                    <h2 className='text-2xl mb-4' style={{ fontFamily: '"Chewy", system-ui' }}>100% Secure Payment</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>

                <div>
                    <LuRefreshCw className='text-[#76accd] mb-3' size={'60px'} />
                    <h2 className='text-2xl mb-4' style={{ fontFamily: '"Chewy", system-ui' }}>Quality Guarantee</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>

                <div>
                    <MdLocalOffer className='text-[#76accd] mb-3' size={'60px'} />
                    <h2 className='text-2xl mb-4' style={{ fontFamily: '"Chewy", system-ui' }}>Daily Offers</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>

            </div>
        </>
    )
}

export default support
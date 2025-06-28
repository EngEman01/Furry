import React from 'react'

const customersReviews = () => {
    return (
        <>
            <div className="CustomersReviews w-full flex flex-col items-center justify-center bg-gray-100 p-6 " style={{ height: '40vh' }}>

                <h1 className='text-3xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>
                    Customers Reviews
                </h1>
                <div className="reviewsContainer flex flex-wrap justify-center items-center gap-4">
                    <div className="card bg-white p-4 rounded-lg shadow-md" style={{ width :"70%"}}>
                        <p className='text-lg mb-4 text-gray-500'>
                            "This pet shop has everything my furry friend needs! The quality of the products is amazing, and the staff is so helpful. Highly recommended!"

                        </p>
                        <h3 className='font-bold'>Sarah Johnson</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default customersReviews
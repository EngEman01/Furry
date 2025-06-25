import React from 'react'
import RegisterForm from './registerForm'

const page = () => {
    return (
        <>

            <div className='w-full flex flex-col justify-center items-center' style={{ minHeight: '80vh'}}>

                <div className=''>
                    <div>
                        <h1 className='text-5xl mb-6 text-[#76accd]' style={{ fontFamily: '"Chewy", system-ui', textAlign: 'center' }}>
                            Register to Join Our Pet Community
                        </h1>
                        <p className='text-lg mb-4 text-center'>
                            Sign up now to enjoy exclusive benefits and discounts on your first purchase.
                        </p>
                    </div>

                    <RegisterForm/>

                </div>
            </div>
        </>
    )
}

export default page
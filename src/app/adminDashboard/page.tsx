import React from 'react'
import AddPetsForm from './AddPetsForm'
import AdminCountDashboard from './AdminCountDashboard'

const AdminDashboard = () => {
    return (
        <>
            {/* <div className='w-full flex flex-col items-center justify-center mt-5'>
                <h1  className='text-5xl mb-6 text-[#76accd]' style={{ fontFamily: '"Chewy", system-ui' }}>
                    Add New Pet
                </h1>
                <div className='w-4/5 flex items-center justify-center text-xl'>
                    <AddPetsForm />
                </div >
            </div> */}


            <div className='w-full flex flex-col items-center justify-center mt-5'>
                <h1  className='text-5xl mb-20 text-[#76accd]' style={{ fontFamily: '"Chewy", system-ui' }}>
                    Let's See Counts
                </h1>
                <div className='w-4/5 flex items-center justify-center text-xl'>
                    <AdminCountDashboard/>
                </div >
            </div>
        </>
    )
}

export default AdminDashboard
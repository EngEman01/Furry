import React from 'react'

const loading = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row animate-pulse'>

                <div className='max-w-6xl mx-auto flex justify-center items-start' style={{ width: '30%' }}>
                    <nav>
                        <ul>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                            <li className='w-40 h-10 bg-gray-300 flex justify-start items-center mb-6'>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className='w-full flex items-center justify-center flex-col'>

                    <div className='headerBest flex items-center justify-between mb-6' style={{ width: '75%' }}>

                        <h1 className='w-90 h-10 text-5xl mb-6 bg-gray-200'></h1>
                        <button className='w-20 h-10 bg-gray-200 text-white p-2 rounded-lg'></button>

                    </div>

                    <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>

                        <div className='card'>
                            <div className='w-60 h-80 bg-gray-300 rounded-lg' ></div>
                            <h3 className='mt-4 mb-2 w-15 h-5 bg-gray-300'></h3>
                            <p className='w-60 h-8 bg-gray-300 mb-2' style={{ fontSize: '14px' }}>
                               
                            </p>
                            <span className='w-20 h-2 bg-gray-200 text-center mb-2'></span>
                            <div className="increaments flex items-center justify-center mt-4 gap-6">
                                <button  className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                                <h3></h3>
                                <button className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                            </div>
                            <div className="addCard flex items-center justify-center">
                                <button className='w-80 h-10 bg-gray-200 p-2 rounded-lg mt-2 flex items-center justify-center' style={{ width: '50%' }}>
                                    
                                </button>
                            </div>
                        </div>

                        {/* ////////////////////////////////////////////////////////////////////// */}
                             <div className='card'>
                            <div className='w-60 h-80 bg-gray-300 rounded-lg' ></div>
                            <h3 className='mt-4 mb-2 w-15 h-5 bg-gray-300'></h3>
                            <p className='w-60 h-8 bg-gray-300 mb-2' style={{ fontSize: '14px' }}>
                               
                            </p>
                            <span className='w-20 h-2 bg-gray-200 text-center mb-2'></span>
                            <div className="increaments flex items-center justify-center mt-4 gap-6">
                                <button  className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                                <h3></h3>
                                <button className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                            </div>
                            <div className="addCard flex items-center justify-center">
                                <button className='w-80 h-10 bg-gray-200 p-2 rounded-lg mt-2 flex items-center justify-center' style={{ width: '50%' }}>
                                    
                                </button>
                            </div>
                        </div>

                        {/* ///////////////////////////////////////////////////////////// */}

                             <div className='card'>
                            <div className='w-60 h-80 bg-gray-300 rounded-lg' ></div>
                            <h3 className='mt-4 mb-2 w-15 h-5 bg-gray-300'></h3>
                            <p className='w-60 h-8 bg-gray-300 mb-2' style={{ fontSize: '14px' }}>
                               
                            </p>
                            <span className='w-20 h-2 bg-gray-200 text-center mb-2'></span>
                            <div className="increaments flex items-center justify-center mt-4 gap-6">
                                <button  className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                                <h3></h3>
                                <button className='bg-gray-200 border-1 border-gray-500 w-7 h-7 p-2 flex items-center justify-center'></button>
                            </div>
                            <div className="addCard flex items-center justify-center">
                                <button className='w-80 h-10 bg-gray-200 p-2 rounded-lg mt-2 flex items-center justify-center' style={{ width: '50%' }}>
                                    
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <Pagination /> */}
                </div>
            </div>
        </>
    )
}

export default loading
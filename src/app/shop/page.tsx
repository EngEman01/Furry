import React from 'react'
import NavSaller from '@/components/Best Saller/navSaller';
import PetsCards from '@/components/Best Saller/petsCard';

const page = () => {
  return (
    <>
        <>
                <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>


                {/* make here another nav with more chooses and filtter */}
                <NavSaller />

                <div className='w-full flex items-center justify-center flex-col'>

                    <div className='headerBest flex items-center justify-between mb-6' style={{ width: '75%' }}>

                        <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Best selling products </h1>
                        <button className='bg-[#76accd] text-white p-2 rounded-lg'>View all</button>

                    </div>

                    <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ width: '80%' }}>

                        <PetsCards />
                    </div>
                </div>
            </div>
    </>
    </>
  )
}

export default page


// 🐾 5. Shop (المتجر)
// المطلوب:
// صفحة مخصصة لشراء الحيوانات (ممكن تكون نسخة من All Products).

// لو المشروع هيكبر، ممكن تضيفي فيها “السلة” أو خطوات الطلب.

// خطواتك:
// لو مختلفة عن All Products، اعملي فيها focus على الشراء.

// ممكن تقسمي الحيوانات حسب النوع (قطط – كلاب – عصافير).

// استخدمي تصميم منظم.
// لو حابة، ضيفي خيارات للفرز أو البحث عن الحيوانات.








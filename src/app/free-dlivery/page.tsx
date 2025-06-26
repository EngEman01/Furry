import React from 'react'

const FreeDlivery = () => {
    return (
        <>

            <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>
                <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Free Delivery</h1>
                <p>Enjoy free delivery on all orders over $50!</p>
                <p>Fast and reliable shipping to your doorstep.</p>
            </div>

            🚚 3. Free Delivery
            المطلوب:
            عرض الحيوانات اللي عندها ميزة "توصيل مجاني".

            دي تعتبر فلترة خاصة من كل الحيوانات.

            خطواتك:
            في الـ DB أو الـ data، يكون عندك مفتاح اسمه hasFreeDelivery.

            تعملي صفحة تعرض فقط الحيوانات اللي عندهم true في الخاصية دي.

            ممكن تكتبي “العرض لفترة محدودة!” كـ Banner.


        </>
    )
}

export default FreeDlivery
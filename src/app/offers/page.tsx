import React from 'react'

const OffersPage = () => {
    return (
        <>
            <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>
                <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Offers Page</h1>
                <p>Here you can find the latest offers on pet products!</p>
                <p>Stay tuned for amazing discounts and deals!</p>
            </div>

            🎁 6. Offers (العروض)
            المطلوب:
            صفحة فيها الحيوانات اللي عليهم خصم.

            ممكن تعملي badge (زي: -20%) أو سعر قديم/جديد.

            خطواتك:
            تحطي في الـ data مفتاح زي hasDiscount: true و discountPercent.

            تعرضي بس الحيوانات اللي عندها خصم.

            تعملي تنسيقات توضح الخصم بوضوح.


        </>
    )
}

export default OffersPage
import React from 'react'

const GetProPage = () => {
    return (
        <>
            <div className='w-full bg-white flex justify-center items-center p-6 mt-7 flex-col sm:flex-col md:flex-row'>
                <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Offers Page</h1>
                <p>Here you can find the latest offers on pet products!</p>
                <p>Stay tuned for amazing discounts and deals!</p>
            </div>

            ⭐ 7. Get PRO
            المطلوب:
            صفحة فيها معلومات عن الاشتراك المدفوع.

            ليه حد يشترك؟ إيه المميزات؟ كام السعر؟

            زرار فيه “اشترك الآن” (حتى لو مش مربوط بحاجة حاليًا).

            خطواتك:
            تعملي صفحة فيها عرض بسيط للباقة.

            توضح الفرق بين حساب عادي و PRO.

            تجهزي صفحة للشكل بس حاليًا، وبعد كده ممكن تضيفي Stripe أو Auth.


        </>
    )
}

export default GetProPage
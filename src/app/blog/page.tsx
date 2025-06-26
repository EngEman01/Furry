import React from 'react'

const BlogPage = () => {
    return (
        <>
            <div className='w-full bg-white flex-col justify-center items-center p-6 mt-7 sm:flex-col md:flex-row'>
                <h1 className='text-5xl mb-6' style={{ fontFamily: '"Chewy", system-ui' }}>Blog Page</h1>
                <p>This is the blog page content. Here you can write articles, share news, or post updates related to pets.</p>
                <p>Feel free to customize this page with your own content and styling!</p>


                📝 4. Blog (المدونة)
                المطلوب:
                مقالات أو نصائح عن تربية الحيوانات.

                كل مقال له عنوان وصورة وملخص.

                لما تدوسي عليه، يدخلك على صفحة تفاصيله.

                خطواتك:
                تعملي موديل بسيط للمقال (title - slug - content - image).

                تعملي صفحة تعرض المقالات في شكل list أو grid.

                كل مقال يكون لينك لصفحة /blog/[slug].



            </div>
        </>
    )
}

export default BlogPage




// import React from 'react'

import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const Contact = () => {
    return (
    <div>
            <div className="pt-10 text-2xl text-center border-t">
                <Title text1={'CONTACT '} text2={'US'}/>
            </div>
            <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
                <div className="flex flex-col items-start justify-center gap-6">
                    <p className="text-xl font-semibold text-gray-600">Our Store</p>
                    <p className="text-gray-500">34563 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p className="text-gray-500">Tel: (523) 455-5343 <br /> Email: admin@Forever.com</p>
                    <p className="text-xl font-semibold text-gray-600">Careers at forever</p>
                    <p className="text-gray-500">Learn more about our teams and job openings.</p>
                    <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white">Explore Jobs</button>
                </div>
            </div>
            <NewsLetterBox/>
    </div>
    )
}

export default Contact

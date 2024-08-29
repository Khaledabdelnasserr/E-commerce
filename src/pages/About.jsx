



// import React from 'react'

import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
    return (
    <div>
            <div className="pt-8 text-2xl text-center border-t">
                <Title text1={'ABOUT '} text2={'US'}/>
            </div>
            <div className="flex flex-col gap-16 my-10 md:flex-row">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4 ">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto placeat corporis quo sit debitis delectus laborum aperiam eum doloremque rerum error adipisci quia non facere, suscipit aliquid esse cupiditate sequi.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iusto ipsa placeat perferendis totam velit veniam ipsam quae distinctio laboriosam nam, atque ea nulla voluptatum minus aspernatur laborum ducimus cupiditate!</p>
                    <p className="text-lg text-gray-800">Our Mission</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed totam et quam magnam, consequuntur amet, fugiat, deserunt soluta maiores est ea id facere illum facilis blanditiis veniam. Odio, minima.</p>
                </div>
            </div>
            <div className='py-4 text-xl'>
                    <Title text1={'WHY '} text2={"CHOOSE US"}/>
            </div>
            <div className="flex flex-col mb-20 text-sm md:flex-row">
                <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
                    <p className="text-lg">Quality Assurance:</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum quidem dolorem! Illum sapiente ullam quas iusto, ab repellendus eligendi quisquam voluptatem facere praesentium cumque, eum amet ipsa iste corrupti.</p>
                </div>
                <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
                    <p className="text-lg">Convenience:</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum quidem dolorem! Illum sapiente ullam quas iusto, ab repellendus eligendi quisquam voluptatem facere praesentium cumque, eum amet ipsa iste corrupti.</p>
                </div>
                <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
                    <p className="text-lg">Exceptional Customer Service:</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam modi praesentium totam nisi, repellat itaque natus vero quam, assumenda obcaecati aliquam asperiores sint nihil tenetur blanditiis nostrum? Commodi, mollitia!</p>
                </div>
            </div>
            <NewsLetterBox/>
    </div>
    )
}

export default About

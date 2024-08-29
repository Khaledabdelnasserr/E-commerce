// import React from 'react'

import { Link } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"





const Footer = () => {
        const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
    <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <Link to='/'><img  onClick={scrollToTop}src={assets.logo} className="w-32 mb-5 cursor-pointer" alt="" /></Link>
                    <p className="w-full text-gray-600 md:w-2/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatibus aut dolor dolorum labore, ipsa autem, ducimus nostrum quasi delectus blanditiis possimus. Eligendi dolorem illo fuga atque sapiente quaerat minus.
                    </p>
                </div>
                <div>
                    <p className="mb-5 text-xl font-medium">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-213-456-4323</li>
                        <li>contact@foreveryou.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-lg text-center text-black">CopyRight 2024@ forever.com - All Right Reserved.</p>
            </div>
    </div>
    )
}

export default Footer

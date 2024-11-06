import React from 'react';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';



export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="src\assets\images\ninja-star.png" className="h-10 w-10 mr-2" />
                    <span className="text-3xl font-semibold bg-clip-text bg-gradient-to-r text-transparent from-indigo-500 via-purple-500 to-pink-500">BestStore</span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link to="/" className="text-gray-800 hover:text-gray-600 hidden md:block">Home</Link>
                    <Link to="/contact" className="text-gray-800 hover:text-gray-600 hidden md:block">Contact</Link>
                    <BsCart4 className='h-[25px] w-[30px]' />
                    <DropdownMenu />
                    
                </div>
            </div>
        </nav>
    );
}

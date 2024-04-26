import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-transparent p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex-shrink-0 text-white font-extrabold text-4xl">
                    SpaceX
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center flex-grow">
                    <a href="/home" className="text-white px-3 py-2 hover:bg-gray-700">Home</a>
                    <div className="border-l border-gray-700 h-10 mx-3"></div>
                    <a href="/about" className="text-white px-3 py-2 hover:bg-gray-700">About</a>
                    <div className="border-l border-gray-700 h-10 mx-3"></div>
                    <a href="/contact" className="text-white px-3 py-2 hover:bg-gray-700">Contact</a>
                </div>

                <div className="flex-shrink-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
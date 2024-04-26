import React from 'react';
import Navbar from './Navbar';

const Banner: React.FC = () => {
    return (
        <div className="relative">
            <img src="/SpaceX.png" alt="Background" className="w-full object-cover" />
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar />
            </div>
            <div className="absolute flex flex-col items-end top-[40%] opacity-0 md:opacity-100 left-1/2 transform w-[35%] text-right text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4  animate-fade-in delay-500">Explore the Cosmos</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 animate-fade-in delay-1000">Discover the Wonders of Space</h2>
                <p className="text-lg md:text-xl mb-6 animate-fade-in delay-1500">Embark on a journey to unravel the mysteries of the universe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex flex-col md:flex-row gap-4 animate-fade-in delay-2000">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
                    <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
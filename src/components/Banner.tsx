import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-20 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-0 md:pr-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Main Header</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Subheader</h2>
                <p className="text-lg md:text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod vestibulum arcu, eget accumsan nisi efficitur eu.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button 1</button>
                    <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Button 2</button>
                </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="/hero-image.jpg" alt="Hero" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default Banner;

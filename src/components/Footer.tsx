import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p className="text-sm">&copy; 2024 SpaceX. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><a href="/contact" className="text-sm hover:text-gray-300">About</a></li>
                        <li><a href="/sevice" className="text-sm hover:text-gray-300">Services</a></li>
                        <li><a href="/contact" className="text-sm hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

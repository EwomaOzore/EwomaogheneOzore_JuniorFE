import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Rocket {
    id: number;
    rocket_name: string;
    rocket_type: string;
    country: string;
    description: string;
}

interface RocketModalProps {
    rocket: Rocket;
    onClose: () => void;
}

const RocketModal: React.FC<RocketModalProps> = ({ rocket, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 max-w-md w-full rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{rocket.rocket_name}</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <p className="text-gray-700 mb-4">{rocket.description}</p>
                {/* Add more detailed information */}
            </div>
        </div>
    );
};

export default RocketModal;

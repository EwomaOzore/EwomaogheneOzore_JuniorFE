import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Rocket {
    id: number;
    active: boolean;
    rocket_name: string;
    rocket_type: string;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    mass: {
        kg: number;
        lb: number;
    };
    payload_weights: {
        id: string;
        name: string;
        kg: number;
        lb: number;
    }[];
    first_stage: {
        reusable: boolean;
        engines: number;
        fuel_amount_tons: number;
        burn_time_sec: number;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
    };
    second_stage: {
        engines: number;
        fuel_amount_tons: number;
        burn_time_sec: number;
        thrust: {
            kN: number;
            lbf: number;
        };
        payloads: {
            option_1: string;
            option_2?: string;
            composite_fairing: {
                height: {
                    meters: number;
                    feet: number;
                };
                diameter: {
                    meters: number;
                    feet: number;
                };
            };
        };
    };
    engines: {
        number: number;
        type: string;
        version: string;
        layout: string;
        engine_loss_max: number;
        propellant_1: string;
        propellant_2: string;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
        thrust_to_weight: number;
    };
    landing_legs: {
        number: number;
        material: string | null;
    };
    wikipedia: string;
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
                <p className="text-gray-700 mb-2"><span className="font-semibold">Type:</span> {rocket.rocket_type}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> {rocket.description}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Country:</span> {rocket.country}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Company:</span> {rocket.company}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">First Flight:</span> {rocket.first_flight}</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Success Rate:</span> {rocket.success_rate_pct}%</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Height:</span> {rocket.height.meters} meters / {rocket.height.feet} feet</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Diameter:</span> {rocket.diameter.meters} meters / {rocket.diameter.feet} feet</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Mass:</span> {rocket.mass.kg} kg / {rocket.mass.lb} lb</p>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Cost per Launch:</span> ${rocket.cost_per_launch}</p>
            </div>
        </div>
    );
};

export default RocketModal;
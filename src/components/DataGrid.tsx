import React, { useState } from 'react';
import RocketModal from './RocketModal';

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

interface DataGridProps {
    rockets: Rocket[];
}

const DataGrid: React.FC<DataGridProps> = ({ rockets }) => {
    const [selectedRocket, setSelectedRocket] = useState<Rocket | null>(null);

    const handleRocketClick = (rocket: Rocket) => {
        setSelectedRocket(rocket);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-8">Rocket Data</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {rockets.map((rocket, index) => (
                            <tr key={rocket.id} onClick={() => handleRocketClick(rocket)} className="cursor-pointer hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{rocket.rocket_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{rocket.rocket_type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{rocket.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedRocket && <RocketModal rocket={selectedRocket} onClose={() => setSelectedRocket(null)} />}
        </div>
    );
};

export default DataGrid;
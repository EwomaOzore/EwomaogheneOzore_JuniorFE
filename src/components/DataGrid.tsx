import React, { useState } from 'react';
import RocketModal from './RocketModal';

interface Rocket {
    id: number;
    rocket_name: string;
    rocket_type: string;
    country: string;
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
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td> {/* Serial number */}
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

import React, { useState } from 'react';
import CapsuleModal from './CapsuleModal';

interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    missions: { name: string; flight: number }[];
    landings: number;
    type: string;
    details: string | null;
    reuse_count: number;
}

interface CapsuleProps {
    capsules: Capsule[];
}

// eslint-disable-next-line
const Capsule: React.FC<CapsuleProps> = ({ capsules }) => {
    const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const capsulesPerPage = 10;

    const indexOfLastCapsule = currentPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = capsules.slice(indexOfFirstCapsule, indexOfLastCapsule);

    const handleCapsuleClick = (capsule: Capsule) => {
        setSelectedCapsule(capsule);
    };

    const totalPages = Math.ceil(capsules.length / capsulesPerPage);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={`inline-block mx-1 px-3 py-2 border text-sm font-medium cursor-pointer ${
                        currentPage === i ? 'bg-gray-300' : 'bg-white'
                    }`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="container mx-auto py-8 sm:px-0">
            <h1 className="text-3xl font-semibold mb-8">Capsule Data</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Launch Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Landings</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentCapsules.map((capsule, index) => (
                            <tr key={capsule.capsule_serial} onClick={() => handleCapsuleClick(capsule)} className="cursor-pointer hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1 + indexOfFirstCapsule}</td> {/* Serial number */}
                                <td className="px-6 py-4 whitespace-nowrap">{capsule.capsule_serial}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{capsule.capsule_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{capsule.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{capsule.original_launch}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{capsule.landings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedCapsule && <CapsuleModal capsule={selectedCapsule} onClose={() => setSelectedCapsule(null)} />}
            <div className="flex justify-center mt-4">
                <ul className="flex">
                    {renderPageNumbers()}
                </ul>
            </div>
        </div>
    );
};

export default Capsule;
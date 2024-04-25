import React, { useState } from 'react';

const SearchForm: React.FC<{ onSubmit: (formData: { status: string; originalLaunch: string; type: string }) => void }> = ({ onSubmit }) => {
    const [status, setStatus] = useState('');
    const [originalLaunch, setOriginalLaunch] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ status, originalLaunch, type });
    };

    return (
        <div className="container mx-auto py-4">
            <form className="flex justify-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search by status" className="px-4 py-2 mr-2" value={status} onChange={(e) => setStatus(e.target.value)} />
                <input type="date" placeholder="Original launch" className="px-4 py-2 mr-2" value={originalLaunch} onChange={(e) => setOriginalLaunch(e.target.value)} />
                <select className="px-4 py-2" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select type</option>
                    <option value="rocket">Rocket</option>
                    <option value="capsule">Capsule</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;

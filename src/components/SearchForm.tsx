import React, { useState } from 'react';

const SearchForm: React.FC<{ onSubmit: (formData: { rocket_name: string; status: string; original_Launch: string; type: string }) => void }> = ({ onSubmit }) => {
    const [status, setStatus] = useState('');
    const [original_Launch, setOriginal_Launch] = useState('');
    // eslint-disable-next-line
    const [rocket_name, setRocket_name] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ rocket_name, status, original_Launch, type });
    };

    return (
        <div className="container mx-auto py-4">
            <form className="flex flex-col md:flex-row justify-center items-center" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search by status" className="px-4 py-2 mb-2 md:mb-0 md:mr-2" value={status} onChange={(e) => setStatus(e.target.value)} />
                <input type="date" placeholder="Original launch" className="px-4 py-2 mb-2 md:mb-0 md:mr-2" value={original_Launch} onChange={(e) => setOriginal_Launch(e.target.value)} />
                <select className="px-4 py-2 mb-2 md:mb-0 md:mr-2" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select type</option>
                    <option value="rocket">Rocket</option>
                    <option value="capsule">Capsule</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;

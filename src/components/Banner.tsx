import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Welcome to SpaceX Data Explorer</h1>
        <p className="text-lg">Explore rockets and capsules launched by SpaceX</p>
      </div>
    </div>
  );
}

export default Banner;

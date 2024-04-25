import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
import { fetchRockets } from './services/RocketService';
import { Rocket } from './types/Rocket';

function App() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    const fetchRocketsData = async () => {
      try {
        const rocketsData = await fetchRockets();
        setRockets(rocketsData);
        setFilteredRockets(rocketsData);
      } catch (error) {
        console.error('Error fetching rockets:', error);
      }
    };

    fetchRocketsData();
  }, []);

  const handleSearch = (searchQuery: { status: string; originalLaunch: string; type: string }) => {
    // Filter rockets based on search query
    const filtered = rockets.filter((rocket) => {
      const statusMatch = searchQuery.status === '' || rocket.active === (searchQuery.status.toLowerCase() === 'active');
      const launchDateMatch = searchQuery.originalLaunch === '' || rocket.first_flight === searchQuery.originalLaunch;
      const typeMatch = searchQuery.type === '' || rocket.rocket_type.toLowerCase() === searchQuery.type.toLowerCase();
      return statusMatch && launchDateMatch && typeMatch;
    });

    setFilteredRockets(filtered);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 pr-0 md:pr-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Main Header</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Subheader</h2>
          <p className="text-lg md:text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod vestibulum arcu, eget accumsan nisi efficitur eu.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button 1</button>
            <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Button 2</button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/hero-image.jpg" alt="Hero" className="w-full h-auto rounded-lg" />
        </div>
      </div>


      <Banner />

      <div className="container mx-auto px-4 py-8">
        <SearchForm onSubmit={handleSearch} />
        <DataGrid rockets={filteredRockets} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
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
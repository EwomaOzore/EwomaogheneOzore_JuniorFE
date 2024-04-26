import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
import Capsule from './components/Capsule';
import { fetchRockets } from './services/RocketService';
import { fetchCapsules } from './services/CapsuleService';
import { Rocket } from './types/Rocket';

function App() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<Rocket[]>([]);
  const [filteredCapsules, setFilteredCapsules] = useState<Capsule[]>([]);

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

  useEffect(() => {
    const fetchCapsulesData = async () => {
      try {
        const capsulesData = await fetchCapsules();
        setCapsules(capsulesData);
        setFilteredCapsules(capsulesData);
      } catch (error) {
        console.error('Error fetching capsules:', error);
      }
    };

    fetchCapsulesData();
  }, []);

  const handleSearch = (searchQuery: { rocket_name: string; status: string; original_Launch: string; type: string }) => {
    const filteredRockets = rockets.filter((rocket) => {
      const statusMatch = searchQuery.status === '' || rocket.active === (searchQuery.status.toLowerCase() === 'active');
      const launchDateMatch = searchQuery.original_Launch === '' || rocket.first_flight === searchQuery.original_Launch;
      const typeMatch = searchQuery.type === '' || rocket.rocket_type.toLowerCase() === searchQuery.type.toLowerCase();
      return statusMatch && launchDateMatch && typeMatch;
    });
    setFilteredRockets(filteredRockets);

    const filteredCapsules = capsules.filter((capsule) => {
      const statusMatch = searchQuery.status === '' || capsule.status.toLowerCase() === searchQuery.status.toLowerCase();
      const launchDateMatch = searchQuery.original_Launch === '' || capsule.original_launch === searchQuery.original_Launch;
      const typeMatch = searchQuery.type === '' || capsule.type.toLowerCase() === searchQuery.type.toLowerCase();
      return statusMatch && launchDateMatch && typeMatch;
    });
    setFilteredCapsules(filteredCapsules);
  };

  return (
    <div>
      <div className='relative'>
        <Banner />
      </div>

      <div className="container mx-auto px-4 py-8">
        <SearchForm onSubmit={handleSearch} />
        <DataGrid rockets={filteredRockets} />
        <Capsule capsules={filteredCapsules} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
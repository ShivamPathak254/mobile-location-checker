import React from 'react';
import { useState } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import LocationDetails from './LocationDetails';
import MapComponent from './MapComponent';
import SearchHistory from './SearchHistory';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import { useLocationSearch } from '../hooks/useLocationSearch';

const MobileLocationChecker = () => {
  const {
    phoneNumber,
    setPhoneNumber,
    loading,
    locationData,
    error,
    searchHistory,
    handleSearch
  } = useLocationSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <SearchForm 
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          loading={loading}
          error={error}
          onSearch={handleSearch}
        />

        {locationData && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <LocationDetails locationData={locationData} />
            <MapComponent locationData={locationData} />
          </div>
        )}

        <SearchHistory searchHistory={searchHistory} />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default MobileLocationChecker;
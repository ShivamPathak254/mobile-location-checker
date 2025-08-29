import { useState } from 'react';

export const useLocationSearch = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const mockLocations = {
    '+919876543210': {
      country: 'India',
      state: 'Haryana',
      city: 'Yamuna Nagar',
      coordinates: { lat: 30.1364, lng: 77.2944 },
      carrier: 'Airtel',
      type: 'Mobile',
      timezone: 'Asia/Kolkata'
    },
    '+918765432109': {
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi',
      coordinates: { lat: 28.6139, lng: 77.2090 },
      carrier: 'Jio',
      type: 'Mobile',
      timezone: 'Asia/Kolkata'
    },
    '+917654321098': {
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      carrier: 'Vi',
      type: 'Mobile',
      timezone: 'Asia/Kolkata'
    },
    '+91987654321': {
      country: 'India',
      state: 'Karnataka',
      city: 'Bangalore',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      carrier: 'BSNL',
      type: 'Mobile',
      timezone: 'Asia/Kolkata'
    }
  };

  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `+91${cleaned}`;
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
      return `+${cleaned}`;
    } else if (cleaned.length === 13 && cleaned.startsWith('91')) {
      return `+${cleaned.substring(1)}`;
    }
    return number;
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    return phoneRegex.test(number);
  };

  const generateRandomLocation = () => {
    const cities = [
      { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lng: 88.3639 },
      { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lng: 78.4867 },
      { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lng: 73.8567 }
    ];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const carriers = ['Airtel', 'Jio', 'Vi', 'BSNL'];
    return {
      country: 'India',
      state: randomCity.state,
      city: randomCity.name,
      coordinates: { lat: randomCity.lat, lng: randomCity.lng },
      carrier: carriers[Math.floor(Math.random() * carriers.length)],
      type: 'Mobile',
      timezone: 'Asia/Kolkata'
    };
  };

  const addToHistory = (formattedNumber, data) => {
    setSearchHistory(prev => [
      { 
        number: formattedNumber, 
        time: new Date().toLocaleString(), 
        ...data 
      },
      ...prev.slice(0, 4)
    ]);
  };

  const handleSearch = async () => {
    const formattedNumber = formatPhoneNumber(phoneNumber);
    if (!validatePhoneNumber(formattedNumber)) {
      setError('Please enter a valid Indian mobile number (10 digits)');
      return;
    }
    setLoading(true);
    setError('');
    setLocationData(null);
    setTimeout(() => {
      const mockData = mockLocations[formattedNumber];
      let resultData;
      if (mockData) {
        resultData = mockData;
      } else {
        resultData = generateRandomLocation();
      }
      const finalData = {
        ...resultData,
        phoneNumber: formattedNumber,
        searchTime: new Date().toLocaleString()
      };
      setLocationData(finalData);
      addToHistory(formattedNumber, resultData);
      setLoading(false);
    }, 2000);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    loading,
    locationData,
    error,
    searchHistory,
    handleSearch
  };
};

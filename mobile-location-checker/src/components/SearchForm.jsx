import React from 'react';
import { Phone, Search, AlertCircle, Loader2, Globe } from 'lucide-react';

const SearchForm = ({ phoneNumber, setPhoneNumber, loading, error, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Globe className="w-4 h-4" />
          <span>Powered by Advanced Location API</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Mobile Location</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Enter a mobile number to get approximate location details including city, state, and carrier information.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="relative mb-4">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter mobile number (e.g., 9876543210)"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            disabled={loading}
          />
        </div>
        
        {error && (
          <div className="flex items-center space-x-2 text-red-600 text-sm mb-4">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <button
          onClick={onSearch}
          disabled={loading || !phoneNumber.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Locating...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Track Location</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;

import React from 'react';
import { Phone } from 'lucide-react';

const SearchHistory = ({ searchHistory }) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Searches</h3>
      <div className="space-y-3">
        {searchHistory.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{item.number}</div>
                <div className="text-sm text-gray-600">{item.city}, {item.state}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-700">{item.carrier}</div>
              <div className="text-xs text-gray-500">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
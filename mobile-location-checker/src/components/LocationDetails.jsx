import React from 'react';
import { CheckCircle } from 'lucide-react';

const LocationDetails = ({ locationData }) => {
  const locationFields = [
    { label: 'Phone Number', value: locationData.phoneNumber, className: 'text-blue-600 font-mono' },
    { label: 'Country', value: locationData.country },
    { label: 'State', value: locationData.state },
    { label: 'City', value: locationData.city },
    { label: 'Carrier', value: locationData.carrier },
    { label: 'Type', value: locationData.type },
    { label: 'Timezone', value: locationData.timezone }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Location Found</h3>
          <p className="text-sm text-gray-600">Search completed successfully</p>
        </div>
      </div>

      <div className="space-y-4">
        {locationFields.map((field, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
            <span className="font-medium text-gray-700">{field.label}:</span>
            <span className={field.className || 'text-gray-900'}>{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
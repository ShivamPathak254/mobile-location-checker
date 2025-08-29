import React from 'react';
import { Search, Shield, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Instant Search",
      description: "Get location results in seconds with our advanced tracking system.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your searches are encrypted and we don't store personal data.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Track mobile numbers from multiple countries and carriers.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="text-center p-6">
            <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-xl mb-4`}>
              <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSection;
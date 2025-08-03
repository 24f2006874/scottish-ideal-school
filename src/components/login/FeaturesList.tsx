
import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesListProps {
  features: Feature[];
}

const FeaturesList = ({ features }: FeaturesListProps) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          {feature.icon}
          <div>
            <h4 className="font-bold text-gray-700">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;

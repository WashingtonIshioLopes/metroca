import React from 'react';
import { View } from 'react-native';

interface PageIndicatorProps {
  totalPages: number;
  currentPage: number;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({ totalPages, currentPage }) => {
  return (
    <View className="flex-row justify-center items-center mb-8 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentPage ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        />
      ))}
    </View>
  );
};
import React from 'react';
import { View } from 'react-native';

interface PageIndicatorProps {
  totalPages: number;
  currentPage: number;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  totalPages,
  currentPage
}) => {
  return (
    <View className="flex-row justify-center items-center space-x-2 py-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentPage
              ? 'bg-blue-500'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </View>
  );
};

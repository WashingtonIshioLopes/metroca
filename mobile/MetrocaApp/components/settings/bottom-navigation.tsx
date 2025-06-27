import React from 'react';
import { View } from 'react-native';

interface BottomNavigationProps {
  activeTab?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab = 'Account' }) => {
  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-200">
      <View className="w-8 h-8 bg-gray-300 rounded" />
      <View className="relative">
        <View className="w-8 h-8 bg-gray-300 rounded" />
        <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
      </View>
      <View className="w-8 h-8 bg-gray-300 rounded" />
      <View className="w-8 h-8 bg-blue-500 rounded" />
    </View>
  );
};
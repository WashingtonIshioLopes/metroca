import React from 'react';
import { View, TouchableOpacity } from 'react-native';

interface NavItemProps {
  isActive?: boolean;
  hasNotification?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ isActive = false, hasNotification = false }) => {
  return (
    <TouchableOpacity className="flex-1 items-center py-4 relative">
      <View className={`w-6 h-6 rounded ${isActive ? 'bg-blue-500' : 'bg-gray-400'}`} />
      {hasNotification && (
        <View className="absolute top-2 right-1/2 transform translate-x-3 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </TouchableOpacity>
  );
};

export const BottomNavigation: React.FC = () => {
  return (
    <View className="bg-white border-t border-gray-200 flex-row">
      <NavItem isActive />
      <NavItem hasNotification />
      <NavItem />
      <NavItem />
    </View>
  );
};
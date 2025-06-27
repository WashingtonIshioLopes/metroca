import React from 'react';
import { View, TouchableOpacity } from 'react-native';

interface BottomNavigationProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  return (
    <View className="bg-white border-t border-gray-200 px-6 py-4">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => onTabPress?.('home')}
          className="w-8 h-8 bg-gray-300 rounded-full"
        />
        <View className="relative">
          <TouchableOpacity
            onPress={() => onTabPress?.('cart')}
            className="w-8 h-8 bg-gray-300 rounded-full"
          />
          <View className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
        </View>
        <TouchableOpacity
          onPress={() => onTabPress?.('favourite')}
          className="w-8 h-8 bg-gray-300 rounded-full"
        />
        <TouchableOpacity
          onPress={() => onTabPress?.('account')}
          className="w-8 h-8 bg-gray-300 rounded-full"
        />
      </View>
    </View>
  );
};
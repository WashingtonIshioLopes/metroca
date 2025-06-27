import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TabNavigationProps {
  activeTab: 'inProgress' | 'pastOrders';
  onTabChange: (tab: 'inProgress' | 'pastOrders') => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <View className="bg-white px-6 py-4">
      <View className="flex-row">
        <TouchableOpacity
          className={`mr-8 pb-2 ${activeTab === 'inProgress' ? 'border-b-2 border-orange-500' : ''}`}
          onPress={() => onTabChange('inProgress')}
        >
          <Text className={`text-base ${activeTab === 'inProgress' ? 'text-orange-500 font-semibold' : 'text-gray-600'}`}>
            In Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`pb-2 ${activeTab === 'pastOrders' ? 'border-b-2 border-orange-500' : ''}`}
          onPress={() => onTabChange('pastOrders')}
        >
          <Text className={`text-base ${activeTab === 'pastOrders' ? 'text-orange-500 font-semibold' : 'text-gray-600'}`}>
            Past Orders
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
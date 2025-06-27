import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface OrderTabsProps {
  activeTab: 'inProgress' | 'pastOrders';
  onTabChange: (tab: 'inProgress' | 'pastOrders') => void;
}

export const OrderTabs: React.FC<OrderTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <View className="bg-white px-6 py-4">
      <View className="flex-row">
        <View className="flex-1">
          <TouchableOpacity
            onPress={() => onTabChange('inProgress')}
            className="pb-3"
          >
            <Text
              className={`text-base font-medium ${
                activeTab === 'inProgress' ? 'text-orange-500' : 'text-gray-500'
              }`}
            >
              In Progress
            </Text>
          </TouchableOpacity>
          {activeTab === 'inProgress' && (
            <View className="h-0.5 bg-orange-500 rounded-full" />
          )}
        </View>
        <View className="flex-1">
          <TouchableOpacity
            onPress={() => onTabChange('pastOrders')}
            className="pb-3"
          >
            <Text
              className={`text-base font-medium ${
                activeTab === 'pastOrders' ? 'text-orange-500' : 'text-gray-500'
              }`}
            >
              Past Orders
            </Text>
          </TouchableOpacity>
          {activeTab === 'pastOrders' && (
            <View className="h-0.5 bg-orange-500 rounded-full" />
          )}
        </View>
      </View>
    </View>
  );
};
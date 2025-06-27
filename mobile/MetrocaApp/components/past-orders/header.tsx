import React from 'react';
import { View, Text } from 'react-native';

export const Header = () => {
  return (
    <View className="bg-white px-6 py-4">
      <Text className="text-2xl font-bold text-black mb-1">Your Orders</Text>
      <Text className="text-gray-600 text-base">Wait for the best meal</Text>
    </View>
  );
};
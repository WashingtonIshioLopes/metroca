import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const SearchBar: React.FC = () => {
  return (
    <View className="flex-row items-center mx-4 mt-4 mb-6">
      <View className="flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mr-3">
        <View className="w-5 h-5 bg-gray-400 rounded-full mr-3" />
        <Text className="text-gray-500 flex-1">Search items. . . </Text>
      </View>
      <TouchableOpacity className="bg-blue-500 p-3 rounded-xl">
        <View className="w-6 h-6 bg-white rounded" />
      </TouchableOpacity>
    </View>
  );
};
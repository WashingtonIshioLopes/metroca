import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export function BottomNavigation() {
  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-200">
      <TouchableOpacity className="w-8 h-8 bg-gray-300 rounded" />

      <TouchableOpacity className="relative">
        <View className="w-8 h-8 bg-gray-300 rounded" />
        <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
      </TouchableOpacity>

      <TouchableOpacity className="w-8 h-8 bg-gray-300 rounded" />

      <TouchableOpacity className="w-8 h-8 bg-gray-300 rounded" />
    </View>
  );
}

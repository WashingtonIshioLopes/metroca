import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function AddToCartButton() {
  return (
    <View className="px-4 py-4 bg-white border-t border-gray-200">
      <TouchableOpacity className="bg-orange-500 rounded-lg py-4 px-6 flex-row items-center justify-center">
        <View className="w-6 h-6 bg-white rounded mr-3" />
        <Text className="text-white font-medium text-lg" style={{ fontFamily: 'Poppins' }}>
          Add to Cart | Rs.175{' '}
          <Text className="line-through text-xs text-white opacity-80" style={{ fontFamily: 'Poppins' }}>
            Rs.300
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
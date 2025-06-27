import React from 'react';
import { View, Text, Image } from 'react-native';
import { QuantitySelector } from '../detail/quantity-selector';

export function ProductInfo() {
  return (
    <View className="py-6">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-900 mb-3">
            Tikka Macroni
          </Text>
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/c2eaa9b078ae9043001baa4d5b6f9174b12d9a7a?placeholderIfAbsent=true" }}
              className="w-5 h-5 mr-2"
              resizeMode="contain"
            />
            <Text className="text-base">
              <Text className="text-gray-600">5.0</Text>
              <Text className="text-blue-500"> (7.932 reviews)</Text>
            </Text>
          </View>
        </View>
        <QuantitySelector />
      </View>
    </View>
  );
}

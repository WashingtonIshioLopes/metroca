import React from 'react';
import { View, Text, Image } from 'react-native';

interface OrderItemProps {
  imageUrl: string;
  title: string;
  details: string;
  timestamp: string;
  status?: string;
}

export const OrderItem = ({ imageUrl, title, details, timestamp, status }: OrderItemProps) => {
  return (
    <View className="flex-row items-center px-6 py-4 bg-white border-b border-gray-100">
      <View className="w-12 h-12 rounded-lg overflow-hidden mr-4 bg-gray-100">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1">
        <Text className="text-base font-semibold text-black mb-1">{title}</Text>
        <Text className="text-sm text-gray-600">{details}</Text>
      </View>

      <View className="items-end">
        <Text className="text-sm text-gray-600 mb-1">{timestamp}</Text>
        {status && (
          <Text className="text-sm text-red-500 font-medium">{status}</Text>
        )}
      </View>
    </View>
  );
};
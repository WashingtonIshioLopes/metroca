import React from 'react';
import { View, Image, Text } from 'react-native';

interface OrderHeaderProps {
  headerImageUri: string;
}

export const OrderHeader: React.FC<OrderHeaderProps> = ({ headerImageUri }) => {
  return (
    <View className="w-full">
      <Image
        source={{ uri: headerImageUri }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="bg-white px-6 py-4">
        <View className="mb-2">
          <Text className="text-2xl font-bold text-gray-900">Your Orders</Text>
        </View>
        <View>
          <Text className="text-base text-gray-600">Wait for the best meal</Text>
        </View>
      </View>
    </View>
  );
};
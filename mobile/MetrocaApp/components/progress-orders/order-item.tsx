import React from 'react';
import { View, Image, Text } from 'react-native';

interface OrderItemProps {
  imageUri: string;
  title: string;
  itemCount: number;
  price: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({
  imageUri,
  title,
  itemCount,
  price,
}) => {
  return (
    <View className="flex-row items-center p-4 bg-white border-b border-gray-100">
      <Image
        source={{ uri: imageUri }}
        className="w-16 h-16 rounded-lg mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-900 mb-1">
          {title}
        </Text>
        <Text className="text-sm text-gray-500">
          {itemCount} items • {price}
        </Text>
      </View>
    </View>
  );
};
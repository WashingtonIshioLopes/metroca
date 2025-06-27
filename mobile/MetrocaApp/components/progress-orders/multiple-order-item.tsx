import React from 'react';
import { View, Image, Text } from 'react-native';

interface OrderDetail {
  title: string;
  itemCount: number;
  price: string;
}

interface MultipleOrderItemProps {
  imageUris: string[];
  orders: OrderDetail[];
}

export const MultipleOrderItem: React.FC<MultipleOrderItemProps> = ({
  imageUris,
  orders,
}) => {
  return (
    <View className="p-4 bg-white border-b border-gray-100">
      <View className="flex-row">
        <View className="mr-4">
          <View className="flex-row">
            {imageUris.map((uri, index) => (
              <Image
                key={index}
                source={{ uri }}
                className={`w-12 h-12 rounded-lg ${index > 0 ? '-ml-2' : ''}`}
                style={{ zIndex: imageUris.length - index }}
                resizeMode="cover"
              />
            ))}
          </View>
        </View>
        <View className="flex-1">
          {orders.map((order, index) => (
            <View key={index} className={index > 0 ? 'mt-3' : ''}>
              <Text className="text-base font-medium text-gray-900 mb-1">
                {order.title}
              </Text>
              <Text className="text-sm text-gray-500">
                {order.itemCount} items • {order.price}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
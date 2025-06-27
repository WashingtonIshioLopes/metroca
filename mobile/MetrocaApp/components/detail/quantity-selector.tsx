
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View className="flex-row items-center bg-gray-100 rounded-lg">
      <TouchableOpacity
        onPress={decreaseQuantity}
        className="w-10 h-10 justify-center items-center"
      >
        <View className="w-4 h-0.5 bg-gray-600" />
      </TouchableOpacity>

      <View className="w-12 h-10 justify-center items-center">
        <Text className="text-lg font-medium text-gray-900">{quantity}</Text>
      </View>

      <TouchableOpacity
        onPress={increaseQuantity}
        className="w-10 h-10 justify-center items-center"
      >
        <View className="w-4 h-4 justify-center items-center">
          <View className="w-4 h-0.5 bg-gray-600 absolute" />
          <View className="w-0.5 h-4 bg-gray-600 absolute" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

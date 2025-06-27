import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface CategoryItemProps {
  title: string;
  imageUrl?: string;
  isSelected?: boolean;
  hasIcon?: boolean;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  imageUrl,
  isSelected = false,
  hasIcon = false
}) => {
  return (
    <TouchableOpacity
      className={`items-center mr-6 ${isSelected ? 'opacity-100' : 'opacity-70'}`}
    >
      <View className={`w-16 h-16 rounded-2xl items-center justify-center mb-2 ${
        isSelected ? 'bg-blue-500' : 'bg-gray-100'
      }`}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            className="w-8 h-8"
            resizeMode="contain"
          />
        ) : hasIcon ? (
          <View className={`w-6 h-6 rounded ${isSelected ? 'bg-white' : 'bg-gray-400'}`} />
        ) : null}
      </View>
      <Text className={`text-sm font-medium ${isSelected ? 'text-blue-500' : 'text-gray-600'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
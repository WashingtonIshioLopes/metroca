import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  rating: string;
  imageUrl: string;
  ratingImageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  price,
  rating,
  imageUrl,
  ratingImageUrl
}) => {

  const router = useRouter();

  const handleSelect = () => {
    // Handle continue button press
    console.log('Continue button pressed');
    router.replace('/detail-screen');
  };

  return (
    <TouchableOpacity className="bg-white rounded-2xl p-4 shadow-sm mb-4 mx-2 flex-1"
      onPress={handleSelect}>
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-32 rounded-xl mb-3"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-gray-900 font-semibold text-base mb-1" numberOfLines={2}>
          {title}
        </Text>
        <Text className="text-gray-500 text-sm mb-3">
          {subtitle}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-900 font-bold text-lg">
            {price}
          </Text>
          <View className="flex-row items-center">
            <Image
              source={{ uri: ratingImageUrl }}
              className="w-4 h-4 mr-1"
              resizeMode="contain"
            />
            <Text className="text-gray-600 text-sm font-medium">
              {rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

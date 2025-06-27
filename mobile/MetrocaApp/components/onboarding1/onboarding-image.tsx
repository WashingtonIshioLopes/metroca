import React from 'react';
import { View, Image } from 'react-native';

interface OnboardingImageProps {
  imageUri: string;
}

export const OnboardingImage: React.FC<OnboardingImageProps> = ({ imageUri }) => {
  return (
    <View className="w-full h-80 mb-8">
      <Image
        source={{ uri: imageUri }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};
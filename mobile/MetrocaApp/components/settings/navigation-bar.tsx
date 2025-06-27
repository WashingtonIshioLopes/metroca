import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface NavigationBarProps {
  title: string;
  onBackPress?: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ title, onBackPress }) => {
  return (
    <View className="flex-row items-center px-4 py-3">
      <TouchableOpacity onPress={onBackPress}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/39ba0aebae199f84b61e47419c64d26d7e293cd6?placeholderIfAbsent=true",
          }}
          className="w-6 h-6"
        />
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="text-lg font-semibold text-black">{title}</Text>
      </View>
      <View className="w-6" />
    </View>
  );
};
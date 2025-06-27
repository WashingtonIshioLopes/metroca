import React from 'react';
import { View, Text, Image } from 'react-native';

interface HeaderProps {
  userName: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({
  userName,
  profileImageUrl,
  backgroundImageUrl
}) => {
  return (
    <View className="relative">
      <Image
        source={{ uri: backgroundImageUrl }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="absolute top-12 left-4 right-4 flex-row justify-between items-center">
        <View>
          <Text className="text-white text-lg font-medium">Hello 👋</Text>
          <Text className="text-white text-xl font-bold">{userName}</Text>
        </View>
        <Image
          source={{ uri: profileImageUrl }}
          className="w-12 h-12 rounded-full"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};
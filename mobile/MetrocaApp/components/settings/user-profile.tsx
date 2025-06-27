import React from 'react';
import { View, Text, Image } from 'react-native';

interface UserProfileProps {
  name: string;
  phone: string;
  avatarUri: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, phone, avatarUri }) => {
  return (
    <View className="flex-row items-center px-4 py-4">
      <Image
        source={{
          uri: avatarUri,
        }}
        className="w-16 h-16 rounded-full mr-4"
      />
      <View>
        <View className="mb-1">
          <Text className="text-lg font-semibold text-black">{name}</Text>
        </View>
        <View>
          <Text className="text-gray-600">{phone}</Text>
        </View>
      </View>
    </View>
  );
};
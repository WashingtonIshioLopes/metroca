import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface SettingsMenuItemProps {
  title: string;
  iconUri: string;
  onPress?: () => void;
}

export const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({ title, iconUri, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center justify-between px-4 py-4">
        <View>
          <Text className="text-base text-black">{title}</Text>
        </View>
        <Image
          source={{
            uri: iconUri,
          }}
          className="w-5 h-5"
        />
      </View>
    </TouchableOpacity>
  );
};

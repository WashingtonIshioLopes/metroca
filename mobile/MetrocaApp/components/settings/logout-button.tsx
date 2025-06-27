import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface LogoutButtonProps {
  onPress?: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <View className="px-4 py-4">
      <TouchableOpacity onPress={onPress}>
        <View className="bg-red-500 rounded-lg py-3 items-center">
          <Text className="text-white font-semibold text-base">Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

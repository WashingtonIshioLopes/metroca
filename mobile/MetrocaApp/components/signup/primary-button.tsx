import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-full py-4 rounded-lg ${
        disabled ? 'bg-gray-300' : 'bg-blue-600'
      }`}
      activeOpacity={0.8}
    >
      <View className="items-center">
        <Text className={`font-semibold text-base ${
          disabled ? 'text-gray-500' : 'text-white'
        }`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
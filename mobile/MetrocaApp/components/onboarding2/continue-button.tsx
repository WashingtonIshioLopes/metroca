import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ContinueButtonProps {
  onPress?: () => void;
  title?: string;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  title = "Continue"
}) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 px-8 py-4 rounded-lg mx-4 mb-8"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className="text-white text-center text-lg font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

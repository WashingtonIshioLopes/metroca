import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface OnboardingFooterProps {
  buttonText: string;
  onPress?: () => void;
}

export const OnboardingFooter: React.FC<OnboardingFooterProps> = ({
  buttonText,
  onPress
}) => {
  return (
    <View className="px-6">
      <TouchableOpacity
        className="bg-blue-600 py-4 px-8 rounded-lg w-full"
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text className="text-white text-center text-lg font-semibold">
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

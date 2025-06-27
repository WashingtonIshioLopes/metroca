import React from 'react';
import { View, Text } from 'react-native';

interface OnboardingTextProps {
  title: string;
  subtitle: string;
}

export const OnboardingText: React.FC<OnboardingTextProps> = ({
  title,
  subtitle
}) => {
  return (
    <View className="px-6 py-8">
      <Text className="text-2xl font-bold text-gray-900 text-center mb-4">
        {title}
      </Text>
      <Text className="text-base text-gray-600 text-center leading-6">
        {subtitle}
      </Text>
    </View>
  );
};
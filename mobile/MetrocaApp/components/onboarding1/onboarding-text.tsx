import React from 'react';
import { View, Text } from 'react-native';

interface OnboardingTextProps {
  title: string;
  subtitle: string;
}

export const OnboardingText: React.FC<OnboardingTextProps> = ({ title, subtitle }) => {
  return (
    <View className="px-6 mb-8">
      <View className="mb-4">
        <Text className="text-2xl font-bold text-gray-900 text-center leading-8">
          {title}
        </Text>
      </View>
      <View>
        <Text className="text-base text-gray-600 text-center leading-6">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

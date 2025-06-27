import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuickActionProps {
  title: string;
  onPress?: () => void;
}

const QuickActionButton: React.FC<QuickActionProps> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} className="flex-1 mx-1">
    <View className="bg-gray-100 rounded-lg py-3 px-4 items-center">
      <Text className="text-sm font-medium text-black text-center">{title}</Text>
    </View>
  </TouchableOpacity>
);

export const QuickActions: React.FC = () => {
  return (
    <View className="px-4 py-4">
      <View className="flex-row">
        <QuickActionButton title="My Orders" />
        <QuickActionButton title="My Reviews" />
        <QuickActionButton title="Address Settings" />
      </View>
    </View>
  );
};
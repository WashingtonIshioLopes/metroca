import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

interface FormFieldProps {
  title?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  iconUri?: string;
  showIcon?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  iconUri,
  showIcon = false,
}) => {
  return (
    <View className="mb-4">
      {title && (
        <View className="mb-2">
          <Text className="text-gray-700 font-medium text-sm">{title}</Text>
        </View>
      )}
      <View className="relative">
        <View className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-gray-600 text-base">{placeholder}</Text>
            </View>
            {showIcon && iconUri && (
              <Image
                source={{ uri: iconUri }}
                className="w-5 h-5 ml-2"
              />
            )}
          </View>
        </View>
        {showIcon && iconUri && !title && (
          <Image
            source={{ uri: iconUri }}
            className="absolute right-4 top-3 w-5 h-5"
          />
        )}
      </View>
    </View>
  );
};
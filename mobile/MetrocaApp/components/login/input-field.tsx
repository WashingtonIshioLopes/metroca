import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  onPasswordToggle?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  showPasswordToggle = false,
  onPasswordToggle,
  value,
  onChangeText,
}) => {
  return (
    <View className="mb-4">
      <View className="border border-gray-200 rounded-lg px-4 py-3 bg-white">
        <View className="flex-row justify-between items-center">
          <View className="flex-1">
            <Text className="text-gray-500 text-sm mb-1">{label}</Text>
            <TextInput
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              className="text-black text-base"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          {showPasswordToggle && (
            <TouchableOpacity onPress={onPasswordToggle}>
              <Image
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/a7c0e4d84aeac2daf6d16db4f3e2777584b93d77?placeholderIfAbsent=true" }}
                className="w-5 h-5"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

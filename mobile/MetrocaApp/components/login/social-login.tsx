import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export const SocialLogin: React.FC = () => {
  const handleAppleLogin = () => {
    console.log('Apple login pressed');
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login pressed');
  };

  return (
    <View className="px-6 mt-8">
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/705d294da8c2a8d4f759e5029351be633343995d?placeholderIfAbsent=true" }}
          className="w-full h-px"
          resizeMode="stretch"
        />
      </View>

      <View className="mb-6">
        <Text className="text-gray-500 text-center text-sm mb-4">Or continue with</Text>

        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity
            onPress={handleAppleLogin}
            className="bg-white border border-gray-200 rounded-lg p-4 w-16 h-16 items-center justify-center"
          >
            <View className="w-6 h-6 bg-black rounded" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGoogleLogin}
            className="bg-white border border-gray-200 rounded-lg p-4 w-16 h-16 items-center justify-center"
          >
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/49930c7430e8f0607be0ff84773c8f044a06b38b?placeholderIfAbsent=true" }}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleFacebookLogin}
            className="bg-white border border-gray-200 rounded-lg p-4 w-16 h-16 items-center justify-center"
          >
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/1792696b6eebaaa5828f8b59d545a9f6f40bb718?placeholderIfAbsent=true" }}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View className="mt-4 items-center">
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/6caa268f66323228dab6773a0206baee86b76797?placeholderIfAbsent=true" }}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};
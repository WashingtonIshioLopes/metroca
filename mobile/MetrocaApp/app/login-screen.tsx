import React from 'react';
import { View, Image, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from '../components/login/status-bar';
import { LoginForm } from '../components/login/login-form';
import { SocialLogin } from '../components/login/social-login';

export const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1">
          {/* Background Image */}
          <View className="absolute top-0 left-0 right-0">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/e1d9c7eab6bbaac419acace48152382861f51ec2?placeholderIfAbsent=true" }}
              className="w-full h-64"
              resizeMode="cover"
            />
          </View>

          {/* Status Bar */}
          <StatusBar />

          {/* Main Content */}
          <View className="flex-1 mt-32">
            <View className="bg-white rounded-t-3xl flex-1 pt-8">
              {/* Login Form */}
              <LoginForm />

              {/* Social Login */}
              <SocialLogin />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
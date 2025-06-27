import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from '../components/signup/status-bar';
import { SignUpForm } from '../components/signup/sign-up-form';

const SignUpScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <StatusBar />
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 justify-center py-8">
            <SignUpForm />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
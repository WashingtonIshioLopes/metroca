import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { FormField } from '../signup/form-field';
import { TermsText } from '../signup/terms-text';
import { PrimaryButton } from '../signup/primary-button';

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Sign up pressed', formData);
  };

  return (
    <View className="px-6">
      <View className="mb-8">
        <View className="mb-2">
          <Text className="text-2xl font-bold text-gray-900">Sign up</Text>
        </View>
        <View>
          <Text className="text-gray-600 text-base">Create an account to get started </Text>
        </View>
      </View>

      <View className="mb-6">
        <FormField
          title="Name"
          placeholder="Ayes"
          value={formData.name}
          onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
          iconUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/8be406d1a00434d5cde1eb9fe21d400891292dd8?placeholderIfAbsent=true"
          showIcon={true}
        />

        <FormField
          title="Email Address"
          placeholder="name@email.com"
          value={formData.email}
          onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
        />

        <FormField
          title="Password"
          placeholder="Create a passaword"
          value={formData.password}
          onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
          secureTextEntry={true}
          iconUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/fdc87ac4f2ad6e2f34cebbab5ffacf46feb22c52?placeholderIfAbsent=true"
          showIcon={true}
        />

        <FormField
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData(prev => ({ ...prev, confirmPassword: text }))}
          secureTextEntry={true}
          iconUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/5816218e5cc65a33aa486d2cf5ab29184f32c691?placeholderIfAbsent=true"
          showIcon={true}
        />
      </View>

      <View className="mb-6">
        <TermsText />
      </View>

      <View>
        <PrimaryButton
          title="SignUp"
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};
import React from 'react';
import { View, Text } from 'react-native';

export const TermsText: React.FC = () => {
  return (
    <View className="flex-row items-start">
      <View className="w-5 h-5 border border-gray-300 rounded mr-3 mt-0.5 bg-white" />
      <View className="flex-1">
        <Text className="text-gray-700 text-sm leading-5">
          <Text style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: 18 }}>
            I've read and agree with the{' '}
          </Text>
          <Text style={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: 18,
            color: 'rgba(255,185,41,1)'
          }}>
            Terms and Conditions
          </Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: 18 }}>
            {' '}and the{' '}
          </Text>
          <Text style={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: 18,
            color: 'rgba(255,185,41,1)'
          }}>
            Privacy Policy
          </Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: '400', lineHeight: 18 }}>
            .
          </Text>
        </Text>
      </View>
    </View>
  );
};

import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

import { OnboardingImage } from '../components/onboarding1/onboarding-image';
import { OnboardingText } from '../components/onboarding1/onboarding-text';
import { PageIndicator } from '../components/onboarding1/page-indicator';
import { OnboardingFooter } from '../components/onboarding1/onboarding-footer';

const OnboardingParte1Screen: React.FC = () => {

  const router = useRouter();

  const handleContinue = () => {
    // Handle continue button press
    console.log('Continue button pressed');
    router.replace('/onboarding-parte2-screen');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between">
        <View className="flex-1">
          <OnboardingImage imageUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/d2214b824bc1633afa30d73906937006a4491cb0?placeholderIfAbsent=true" />

          <View className="flex-1 justify-center">
            <OnboardingText
              title="Shop at Your Fingertips!"
              subtitle="Order and enjoy a personalized experience."
            />

            <PageIndicator
              totalPages={2}
              currentPage={0}
            />
          </View>
        </View>

        <OnboardingFooter
          buttonText="Continue"
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingParte1Screen;
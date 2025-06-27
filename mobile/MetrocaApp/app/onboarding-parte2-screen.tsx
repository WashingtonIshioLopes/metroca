import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import { PageIndicator } from '../components/onboarding2/page-indicator';
import { ContinueButton } from '../components/onboarding2/continue-button';
import { OnboardingText } from '../components/onboarding2/onboarding-text';

interface Onboarding2Props {
  onContinue?: () => void;
}

const OnboardingParte2Screen: React.FC<Onboarding2Props> = ({ onContinue }) => {

  const router = useRouter();

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      // Default behavior - could navigate to next screen
      console.log('Continue pressed');
      router.replace('/login-screen');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Hero Image */}
        <View className="w-full h-80 mb-6">
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/d44b9f676f6b02ebb8337fda6c59ddc873b1b012?placeholderIfAbsent=true",
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Content Section */}
        <View className="flex-1 justify-between">
          {/* Text Content */}
          <OnboardingText
            title="Discover Nearby Products!"
            subtitle="Find items you need in your area."
          />

          {/* Page Indicator */}
          <PageIndicator 
            totalPages={2} 
            currentPage={1} 
          />

          {/* Footer with Continue Button */}
          <ContinueButton 
            onPress={handleContinue} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OnboardingParte2Screen;
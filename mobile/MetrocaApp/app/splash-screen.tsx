/* import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';

interface SplashProps {}

const SplashScreen: React.FC<SplashProps> = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Substitua "/home" pela rota desejada
      router.replace('/onboarding-parte1-screen');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/f6867bb734d2ab804a4e8b82a005ae83cfaee738?placeholderIfAbsent=true",
          }}
          className="w-full h-1/2"
          resizeMode="cover"
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/08f9537dfddd0e05a1173d06e97358545b3a317e?placeholderIfAbsent=true",
          }}
          className="w-full h-1/2"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
 */


import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';

interface SplashProps {}

const SplashScreen: React.FC<SplashProps> = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding-parte1-screen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Image
          source={require('../assets/images/splash-icon.png')}
          className="w-full h-1/2"
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/react-logo.png')}
          className="w-full h-1/2"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

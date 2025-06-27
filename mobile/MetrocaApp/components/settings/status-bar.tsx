import React from 'react';
import { View, Text, Image } from 'react-native';

export const StatusBar: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2">
      <View>
        <Text className="text-black font-medium">9:41</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/c589c730ce4c2a626efeef7035a142e2497944aa?placeholderIfAbsent=true",
          }}
          className="w-4 h-4"
        />
        <View>
          <Text className="text-black">􀙇</Text>
        </View>
        <View>
          <Text className="text-black">􀛨</Text>
        </View>
      </View>
    </View>
  );
};

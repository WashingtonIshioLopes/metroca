import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export function ProductHeader() {
  return (
    <View className="relative">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="h-80"
      >
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/795d0226f22072773d2910d1379b7370fda661b9?placeholderIfAbsent=true" }}
          className="w-full h-80"
          style={{ width }}
          resizeMode="cover"
        />
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/05949f292a65c68f09cdb46494ecab0faf24fd4c?placeholderIfAbsent=true" }}
          className="w-full h-80"
          style={{ width }}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );
}

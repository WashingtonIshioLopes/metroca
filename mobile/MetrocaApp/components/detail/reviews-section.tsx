import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ReviewItem } from '../detail/review-item';

export function ReviewsSection() {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-semibold text-gray-900">Reviews</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/19668a3dd2650358e6b6cc5659cbb5b191fc1379?placeholderIfAbsent=true" }}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ReviewItem
        name="Asma"
        avatar="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/19668a3dd2650358e6b6cc5659cbb5b191fc1379?placeholderIfAbsent=true"
        rating={4}
        review=""
        showReviewFirst={false}
      />

      <ReviewItem
        name="Sara"
        avatar="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/19668a3dd2650358e6b6cc5659cbb5b191fc1379?placeholderIfAbsent=true"
        rating={4}
        review="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
        showReviewFirst={true}
      />
    </View>
  );
}
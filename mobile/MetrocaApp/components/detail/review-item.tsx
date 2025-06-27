import React from 'react';
import { View, Text, Image } from 'react-native';

interface ReviewItemProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  showReviewFirst: boolean;
}

export function ReviewItem({ name, avatar, rating, review, showReviewFirst }: ReviewItemProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          source={{ uri: i < rating ? "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/c8f6559a49341fc0c1e319436ea4643a4fd30f8f?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/2f4846f948076645c9aa766caee25267114799a4?placeholderIfAbsent=true" }}
          className="w-4 h-4 mr-1"
          resizeMode="contain"
        />
      );
    }
    return stars;
  };

  const renderUserInfo = () => (
    <View className="flex-row items-start">
      <Image
        source={{ uri: avatar }}
        className="w-12 h-12 rounded-full mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-lg font-medium text-gray-900 mb-2">{name}</Text>
        <View className="flex-row items-center">
          {renderStars()}
        </View>
      </View>
    </View>
  );

  const renderReview = () => (
    review ? (
      <Text className="text-base text-gray-600 leading-6 mb-4">
        {review}
      </Text>
    ) : null
  );

  return (
    <View className="mb-6">
      {showReviewFirst ? (
        <>
          {renderReview()}
          {renderUserInfo()}
          {!showReviewFirst && renderReview()}
        </>
      ) : (
        <>
          {renderUserInfo()}
          {renderReview()}
        </>
      )}
    </View>
  );
}
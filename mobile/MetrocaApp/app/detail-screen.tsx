import React from 'react';
import { View, ScrollView } from 'react-native';

import { ProductHeader } from '../components/detail/product-header';
import { ProductInfo } from '../components/detail/product-info';
import { ProductDescription } from '../components/detail/product-description';
import { ReviewsSection } from '../components/detail/reviews-section';
import { AddToCartButton } from '../components/detail/add-to-cart-button';
import { BottomNavigation } from '../components/detail/bottom-navigation';

export default function Detail() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ProductHeader />
        <View className="px-4">
          <ProductInfo />
          <ProductDescription />
          <View className="h-px bg-gray-200 my-6" />
          <ReviewsSection />
        </View>
      </ScrollView>
      <AddToCartButton />
      <BottomNavigation />
    </View>
  );
}
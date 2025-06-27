import React from 'react';
import { View, ScrollView } from 'react-native';
import { CategoryItem } from '../home/category-item';

export const CategoryList: React.FC = () => {
  return (
    <View className="mb-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <CategoryItem title="All Items" hasIcon isSelected />
        <CategoryItem title="Grains" imageUrl="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/a81d06284c3ba91e1c7a3bc33f6729cd55e0fc48?placeholderIfAbsent=true" />
        <CategoryItem title=" Dairy Products" imageUrl="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/82d599d32f1edbf8421871c4d3993a939d4aa2f1?placeholderIfAbsent=true" />
        <CategoryItem title="Jeans" />
      </ScrollView>
    </View>
  );
};
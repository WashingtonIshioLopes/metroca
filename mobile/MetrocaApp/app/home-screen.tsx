import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { Header } from '../components/home/header';
import { SearchBar } from '../components/home/search-bar';
import { CategoryList } from '../components/home/category-list';
import { ProductGrid } from '../components/home/product-grid';
import { BottomNavigation } from '../components/home/bottom-navigation';

export const Home: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Header
          userName="Ayesha Habib"
          profileImageUrl="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/076b8afab691562a416795db92315bd2cf17fc74?placeholderIfAbsent=true"
          backgroundImageUrl="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/795d0226f22072773d2910d1379b7370fda661b9?placeholderIfAbsent=true"
        />
        <SearchBar />
        <CategoryList />
        <ProductGrid />
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default Home;
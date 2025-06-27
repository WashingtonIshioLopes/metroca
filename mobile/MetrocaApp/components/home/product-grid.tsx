import React from 'react';
import { View } from 'react-native';
import { ProductCard } from '../home/product-card';

export const ProductGrid: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Silk Dairy Milk",
      subtitle: "Chocolate",
      price: "$212.99",
      rating: "5.0",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/30c96cd496dcc172a9284aa514b6f7adedb9d449?placeholderIfAbsent=true",
      ratingImageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/f657940d740c9d995fc9fcda0558f5bdbc0acfbc?placeholderIfAbsent=true"
    },
    {
      id: 2,
      title: "NESCAFE Coffee",
      subtitle: "Classic Coffee",
      price: "$162.99",
      rating: "5.0",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/690c9a203359d4c47e2b34bc1ca2052bb0d2a8c9?placeholderIfAbsent=true",
      ratingImageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/91f77e7021cf20665aa8bd14e21d0b340877b7ab?placeholderIfAbsent=true"
    },
    {
      id: 3,
      title: "Nexton Cocoa Butter\nMoisturizing Lotion",
      subtitle: "Moisturizer",
      price: "$194.99",
      rating: "5.0",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/d5a9cd02e72e45be1e31e103b2cbd8a03ea6e1fc?placeholderIfAbsent=true",
      ratingImageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/407d94e9a6ccd09a6e55aa9d5a24b4ed70ff72f1?placeholderIfAbsent=true"
    },
    {
      id: 4,
      title: "National Foods Masala",
      subtitle: "BBQ Masala",
      price: "$122.99",
      rating: "5.0",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/101a1365696abb6c1e1b177c58fb46e78ac6172e?placeholderIfAbsent=true",
      ratingImageUrl: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/91f77e7021cf20665aa8bd14e21d0b340877b7ab?placeholderIfAbsent=true"
    }
  ];

  return (
    <View className="px-4 mb-6">
      <View className="flex-row">
        <View className="flex-1">
          <ProductCard {...products[0]} />
          <ProductCard {...products[2]} />
        </View>
        <View className="flex-1">
          <ProductCard {...products[1]} />
          <ProductCard {...products[3]} />
        </View>
      </View>
    </View>
  );
};
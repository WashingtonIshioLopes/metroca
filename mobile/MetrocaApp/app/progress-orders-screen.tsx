import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { OrderHeader } from '../components/progress-orders/order-header';
import { OrderTabs } from '../components/progress-orders/order-tabs';
import { OrderItem } from '../components/progress-orders/order-item';
import { MultipleOrderItem } from '../components/progress-orders/multiple-order-item';
import { BottomNavigation } from '../components/progress-orders/bottom-navigation';

export const ProgressOrdersScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inProgress' | 'pastOrders'>('inProgress');

  const handleTabChange = (tab: 'inProgress' | 'pastOrders') => {
    setActiveTab(tab);
  };

  const handleBottomNavPress = (tab: string) => {
    // Handle bottom navigation press
    console.log('Bottom nav pressed:', tab);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <OrderHeader headerImageUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/795d0226f22072773d2910d1379b7370fda661b9?placeholderIfAbsent=true" />

        <OrderTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <View className="flex-1">
          <OrderItem
            imageUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/721db51d0d9a33d83e015b95a040acd0d032d49c?placeholderIfAbsent=true"
            title="Brown Nescafe Coffee"
            itemCount={3}
            price="PKR 2500.00"
          />

          <MultipleOrderItem
            imageUris={["https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/1fd4240ac174fae8a7a6f4d3f17c7312e56d550c?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/58f41e748f19c46bd8360d137516b420a5b97432?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/0768cea1dfcad4df5bcfe837ab62d601aa85aca9?placeholderIfAbsent=true"]}
            orders={[
              {
                title: "Broche Body Spray",
                itemCount: 1,
                price: "PKR 950.00"
              },
              {
                title: "Vaseline Pink Rosy",
                itemCount: 2,
                price: "PKR 2000.00"
              },
              {
                title: "LAY'S® Flamin' Hot",
                itemCount: 10,
                price: "PKR 550.000"
              }
            ]}
          />
        </View>
      </ScrollView>

      <BottomNavigation
        activeTab="orders"
        onTabPress={handleBottomNavPress}
      />
    </View>
  );
};

export default ProgressOrdersScreen;
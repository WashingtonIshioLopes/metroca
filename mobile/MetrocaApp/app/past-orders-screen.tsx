import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { StatusBar } from '../components/past-orders/status-bar';
import { Header } from '../components/past-orders/header';
import { TabNavigation } from '../components/past-orders/tab-navigation';
import { OrderItem } from '../components/past-orders/order-item';
import { BottomNavigation } from '../components/past-orders/bottom-navigation';

export const PastOrdersScreen = () => {
  const [activeTab, setActiveTab] = useState<'inProgress' | 'pastOrders'>('pastOrders');

  const orderItems = [
    {
      id: 1,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fbc277ce5ae46d0ec7da5c1e520f8a61bfc57fef?width=120',
      title: 'Basmati Rice',
      details: '1 item • IDR 389.00',
      timestamp: 'Jun 12, 14:00',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0a28d81601d435c0a8de5c8acbb98a4aa78c5074?width=120',
      title: 'Cadbury Eclairs Toffee',
      details: '1 item • IDR 360.00',
      timestamp: 'Mei 2, 09:00',
      status: 'Cancelled',
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <ScrollView className="flex-1">
        {activeTab === 'pastOrders' && orderItems.map((item) => (
          <OrderItem
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            details={item.details}
            timestamp={item.timestamp}
            status={item.status}
          />
        ))}
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default PastOrdersScreen;
import React from 'react';
import { View, ScrollView } from 'react-native';

import { StatusBar } from '../components/settings/status-bar';
import { NavigationBar } from '../components/settings/navigation-bar';
import { UserProfile } from '../components/settings/user-profile';
import { QuickActions } from '../components/settings/quick-action-button';
import { SettingsMenu } from '../components/settings/settings-menu';
import { LogoutButton } from '../components/settings/logout-button';
import { BottomNavigation } from '../components/settings/bottom-navigation';

const SettingsScreen: React.FC = () => {
  const handleBackPress = () => {
    // Handle navigation back
    console.log('Back pressed');
  };

  const handleLogout = () => {
    // Handle logout
    console.log('Logout pressed');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar />

      <NavigationBar
        title="Settings"
        onBackPress={handleBackPress}
      />

      <ScrollView className="flex-1">
        <UserProfile
          name="Ayesha Habib"
          phone="012276726876"
          avatarUri="https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/0959be8bf36854a5edd19467ac3a1d89a8902728?placeholderIfAbsent=true"
        />

        <QuickActions />

        <SettingsMenu />

        <LogoutButton 
          onPress={handleLogout} 
        />
      </ScrollView>

      <BottomNavigation 
        activeTab="Account" 
      />
    </View>
  );
};

export default SettingsScreen;
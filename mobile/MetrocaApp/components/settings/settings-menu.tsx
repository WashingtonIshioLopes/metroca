import React from 'react';
import { View, Image } from 'react-native';
import { SettingsMenuItem } from '../settings/settings-menu-item';

export const SettingsMenu: React.FC = () => {
  const menuItems = [
    { title: 'Orders', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/4fe82d99dcb2b25fa83938a1a414e59755d609b1?placeholderIfAbsent=true' },
    { title: 'Notifications', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/1382d0e3d3c5a7f0f928a89f128f178ff838385d?placeholderIfAbsent=true' },
    { title: 'Contact Customer Care', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/db2cd2493232eb9476b3167c927f60915e544087?placeholderIfAbsent=true' },
    { title: 'Help & Support', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/29218657aab0b5f9e2f77ec4a30a84591671c8c4?placeholderIfAbsent=true' },
    { title: 'Payment Settings', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/1ee970c359bd20b4fc22e844b081591d6242fdfa?placeholderIfAbsent=true' },
    { title: 'Language', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/ced07fbcf7cfd74b8f8d0cbfc7b8c65e4d0299d5?placeholderIfAbsent=true' },
    { title: 'Privacy & Security', iconUri: 'https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/0344c999840fbbd0414d887e6bd3e2a901878e25?placeholderIfAbsent=true' },
  ];

  return (
    <View className="px-0">
      {menuItems.map((item, index) => (
        <View key={index}>
          <SettingsMenuItem
            title={item.title}
            iconUri={item.iconUri}
          />
          {index < menuItems.length - 1 && (
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/12e8c64382be43c5a803cec86f8f7401/42eca9bef0987f20ea2ba9eff63a69bbee26f3a0?placeholderIfAbsent=true",
              }}
              className="w-full h-px"
            />
          )}
        </View>
      ))}
    </View>
  );
};
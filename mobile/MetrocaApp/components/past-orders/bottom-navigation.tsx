import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const HomeIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M20.04 6.81994L14.28 2.78994C12.71 1.68994 10.3 1.74994 8.78999 2.91994L3.77999 6.82994C2.77999 7.60994 1.98999 9.20994 1.98999 10.4699V17.3699C1.98999 19.9199 4.05999 21.9999 6.60999 21.9999H17.39C19.94 21.9999 22.01 19.9299 22.01 17.3799V10.5999C22.01 9.24994 21.14 7.58994 20.04 6.81994ZM12.75 17.9999C12.75 18.4099 12.41 18.7499 12 18.7499C11.59 18.7499 11.25 18.4099 11.25 17.9999V14.9999C11.25 14.5899 11.59 14.2499 12 14.2499C12.41 14.2499 12.75 14.5899 12.75 14.9999V17.9999Z" fill="white"/>
  </Svg>
);

const CartIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M20.41 17.03H8" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const CartDot = () => (
  <Svg width="4" height="4" viewBox="0 0 4 4" fill="none">
    <Circle cx="2" cy="2" r="2" fill="#242424"/>
  </Svg>
);

const HeartIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z" fill="white"/>
  </Svg>
);

const ProfileIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const BottomNavigation = () => {
  return (
    <View className="bg-black flex-row justify-around items-center py-4 px-6">
      <TouchableOpacity className="items-center">
        <HomeIcon />
      </TouchableOpacity>

      <TouchableOpacity className="items-center relative">
        <CartIcon />
        <View className="absolute -top-1 -right-1">
          <CartDot />
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <HeartIcon />
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <ProfileIcon />
      </TouchableOpacity>
    </View>
  );
};
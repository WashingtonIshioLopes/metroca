import { Text, View } from 'react-native';

export default function WelcomeContent() {
  return (
    <View className="p-4 bg-white rounded-xl shadow">
      <Text className="text-base text-gray-700">
        Esse é um componente estilizado com Tailwind (via NativeWind).
      </Text>
    </View>
  );
}
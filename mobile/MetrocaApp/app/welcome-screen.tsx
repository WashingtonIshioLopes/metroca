import { Text, View } from 'react-native';
import WelcomeContent from '../components/welcome-content';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-2xl font-bold text-blue-800 mb-4">Bem-vindo!</Text>
      <WelcomeContent />
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { InputField } from '../login/input-field';

import { AuthService } from '../../services/auth-service';

export const LoginForm: React.FC = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // Login logic would go here
    console.log('Login pressed');

    try {
      const response = await AuthService.login(email, password);
      console.log('Login bem-sucedido!', response);
      // Após o login bem-sucedido, você pode:
      // 1. Armazenar o token JWT e dados do usuário (ex: AsyncStorage ou Context API)
      // 2. Navegar para a próxima tela do aplicativo
      router.replace('/home-screen'); // Exemplo: navega para uma tela 'home'
                               // (você precisaria criar app/home.tsx e adicioná-la em app/_layout.tsx)
                               // router.replace impede o usuário de voltar para a tela de login
    } catch (err: any) {
      console.error('Erro ao fazer login:', err);
      // Exibe a mensagem de erro da Promise rejeitada
      
    } finally {
      // Finaliza o estado de carregamento, independentemente do sucesso ou falha
      
    } 

  };

  const handleForgotPassword = () => {
    // Forgot password logic would go here
    console.log('Forgot password pressed');
  };

  const handleRegister = () => {
    // Register logic would go here
    console.log('Register pressed');
    router.replace('/sign-up-screen');
  };

  return (
    <View className="px-6">
      <View className="mb-8">
        <Text className="text-black text-2xl font-bold text-center">Welcome!</Text>
      </View>

      <View className="mb-6">
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          showPasswordToggle={true}
          onPasswordToggle={() => setShowPassword(!showPassword)}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleForgotPassword} className="mb-6">
          <Text className="text-blue-600 text-sm text-right">Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-4">
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-blue-600 rounded-lg py-4 px-6"
        >
          <Text className="text-white text-center text-base font-semibold">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} className="py-2">
          <Text className="text-center text-sm">
            <Text className="text-gray-500">Not a member? </Text>
            <Text className="text-black font-medium">Register now</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
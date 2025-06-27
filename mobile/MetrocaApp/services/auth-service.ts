// app/service/authService.ts
// Este arquivo contém funções para interagir com a API de autenticação.

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    // Adicione outras propriedades do usuário que a API possa retornar
  };
}

interface LoginError {
  message: string;
}

/**
 * Simula uma requisição de login para um endpoint de API.
 * Em um cenário real, você faria um 'fetch' ou 'axios' para seu backend.
 *
 * @param email O email do usuário.
 * @param password A senha do usuário.
 * @returns Uma Promise que resolve com a resposta de login ou rejeita com um erro.
 */
export const AuthService = {

  login: async (email: string, password: string): Promise<LoginResponse> => {

    // URL do seu endpoint de login. Substitua por sua URL real.
    const LOGIN_ENDPOINT = 'https://api.example.com/auth/login';

    try {
      // Simulação de atraso de rede (opcional, remova em produção)
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      // Simulação de sucesso ou falha baseada em credenciais mockadas
      if (email === 'user@example.com' && password === 'password123') {
        return {
          token: 'mock-jwt-token-12345',
          user: {
            id: 'user-123',
            email: email,
          },
        };
      } else if (email === 'error@example.com') {
        throw new Error('Erro simulado do servidor: credenciais inválidas.');
      } else {
        throw new Error('Email ou senha inválidos.');
      }

      /*
      // EXEMPLE DE REQUISIÇÃO REAL COM FETCH:
      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha no login');
      }

      const data: LoginResponse = await response.json();
      return data;
      */

    } catch (error: any) {
      console.error('Erro no serviço de login:', error);
      throw new Error(error.message || 'Ocorreu um erro desconhecido durante o login.');
    }
  },

  // Você pode adicionar outras funções aqui, como logout, register, etc.
  // register: async (userData: any) => { ... },
};

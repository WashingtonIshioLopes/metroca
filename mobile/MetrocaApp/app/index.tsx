import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/splash-screen'); // redireciona para welcome-screen
  }, []);

  return null; // opcionalmente mostre um loader
}

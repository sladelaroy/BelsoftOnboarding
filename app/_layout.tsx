import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    Geist: require('../assets/fonts/Geist-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    
      <Stack screenOptions={{ headerShown: false }} />
  );
}

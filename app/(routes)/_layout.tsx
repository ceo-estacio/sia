

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Palette } from "@/constants/Colors";


export default function RoutesLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(disciplinas)" options={{ headerShown: false, statusBarColor: Palette.dark.bar }} />
      </Stack>
    </ThemeProvider>
  );
}

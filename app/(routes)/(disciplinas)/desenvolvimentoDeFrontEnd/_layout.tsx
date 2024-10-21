

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Palette } from "@/constants/Colors";
import { BackBtn } from "@/widgets/ui";


export default function DesenvolvimentoDeFrontEndLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
         headerTitleAlign: "center",
         headerStyle: { backgroundColor: Palette.sigrid.d2 },
         statusBarColor: Palette.sigrid.d2,
         headerTintColor: Palette.accent.purple[3],
         headerLeft:() => <BackBtn />
      }}>
        <Stack.Screen name="index" options={{ headerShown: true, title: "Desenvolvimento de Front-End" }} />
        {/* <Stack.Screen name="tema-1" options={{ headerShown: true, title: "Desenvolvimento de Front-End" }} /> */}
        <Stack.Screen name="tema-2/index" options={{ headerShown: true, title: "Programação Cliente Com Javascript" }} />
        {/* <Stack.Screen name="tema-3/index" options={{ headerShown: true, title: "Vue js" }} />
        <Stack.Screen name="tema-4/index" options={{ headerShown: true, title: "Programação Cliente Com Typescript" }} />
        <Stack.Screen name="tema-5/index" options={{ headerShown: true, title: "Angular" }} />
        <Stack.Screen name="tema-6/index" options={{ headerShown: true, title: "Reactjs" }} />
        <Stack.Screen name="exercícios" options={{ headerShown: true, title: "Exercícios" }} />
        <Stack.Screen name="simulados" options={{ headerShown: true, title: "Simulados" }} /> */}
      </Stack>
    </ThemeProvider>
  );
}

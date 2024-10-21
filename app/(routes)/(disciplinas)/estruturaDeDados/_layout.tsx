

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Palette } from "@/constants/Colors";
import { BackBtn } from "@/widgets/ui";


export default function EstruturaDeDadosLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
         headerTitleAlign: "center",
         headerStyle: { backgroundColor: Palette.sigrid.d2 },
         statusBarColor: Palette.sigrid.d2,
         headerTintColor: Palette.accent.purple[3],
         headerLeft:() => <BackBtn /> // ative de novo essa linha
      }}>
        <Stack.Screen name="index" options={{ headerShown: true, title: "Tema 5: Ordenação" }} />
        <Stack.Screen name="exercicios/index" options={{ title: "Exercícios" }} />
        <Stack.Screen name="tema-2/index" options={{ title: "Estruturas de Dados Heterogêneas" }} />
        <Stack.Screen name="tema-3/index" options={{ title: "Modularização" }} />
        <Stack.Screen name="tema-4/index" options={{ title: "Listas, Pilhas, Filas e Deques" }} />
        <Stack.Screen name="tema-5/index" options={{ title: "Ordenação" }} />
      </Stack>
    </ThemeProvider>
  );
}

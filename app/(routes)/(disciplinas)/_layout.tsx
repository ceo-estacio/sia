

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from "@/widgets/céo";
import { Pressable } from "react-native";
import Icon from "@/widgets/icon";
import { Palette } from "@/constants/Colors";
import { BackBtn } from "@/widgets/ui";


export default function DisciplinasLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={ { headerShown: false, } }>
         {/* <Stack.Screen name="estruturaDeDados" options={{ 
            // headerShown: false,
            headerLeft:() => <BackBtn />
         }} /> */}
      </Stack>
    </ThemeProvider>
  );
}

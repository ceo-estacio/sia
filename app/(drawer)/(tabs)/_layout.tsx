

import { Tabs } from 'expo-router';
import React from 'react';

// import { TabBarIcon } from '@/widgets/navigation/TabBarIcon';
import { Colors, Palette } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon, Text, View } from "@/widgets/elements";
import Icon from "@/widgets/icon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Tabs
      screenOptions={{
         headerShown: false,
         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
         tabBarStyle: {
            backgroundColor: Palette.dark.bar,
            width: "100%",
            height: 68,
            paddingHorizontal: 54,
            marginHorizontal: "auto",
            justifyContent: "center",
            borderTopWidth: 0,
         }, 
         tabBarItemStyle: { backgroundColor: "#27f0", 
            alignItems: "center",
         },
         tabBarShowLabel: false,
      }}
   >
      <Tabs.Screen
         name="index"
         options={{
            title: 'Home', 
            tabBarIcon: ( { color, focused, size } ) => (
               <TabBarIcon 
                  title={"Home"}
                  family="Ionicons"
                  name={ focused ? "home" : "home-outline" }
                  focused={ focused }
               />
            ),
         }}
      />
      <Tabs.Screen
         name="explore"
         options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
               <TabBarIcon 
                  title="Explore" 
                  name={ focused ? "baseball" : "baseball-outline" }
                  focused={ focused }
               />
            ),
         }}
      />
      <Tabs.Screen
         name="explore copy"
         options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
               <TabBarIcon 
                  title="Explore" 
                  name={ focused ? "baseball" : "baseball-outline" }
                  focused={ focused }
               />
            ),
         }}
      />
   </Tabs>
);
}

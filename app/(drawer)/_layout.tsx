

import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DrawerView from "@/src/widgets/ui/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, Text, View } from "react-native";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { Palette } from "@/constants/Colors";
// import * as NavigationBar from "expo-navigation-bar";

// NavigationBar.setBackgroundColorAsync( "#16181c" );

export default function DrawerLayout() {
   return(
      // <GestureHandlerRootView>
         <Drawer
            // drawerContent={ () => ( 
            //    <DrawerView 
            //       user={ { name: "Anselmo", email: "noah.kd@gmail.com" } }
            //       headerBG="#00559c"
            //       bg="#f5f5f5"
            //    /> 
            // ) }
            
            screenOptions={{
               headerShown: true,
               sceneContainerStyle: { backgroundColor: "#006400", },     
               headerStyle: { backgroundColor: Palette.dark.bar  },
               headerTintColor: "#f0a",
               headerTitleAlign: "center"
               // headerLeft: () => { DrawerActions.openDrawer() }
            }}
         >
            <Drawer.Screen 
               name="(tabs)"
               options={{
                  headerShown: true,
                  headerTitle:"DrawerTabs",
                  drawerLabel:"Tabs",
                  
               }}
            />
      </Drawer> 
   );
   {/* </GestureHandlerRootView> */}
}
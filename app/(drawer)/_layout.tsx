

import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DrawerView from "@/src/widgets/ui/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, Text, View } from "react-native";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
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
               // headerStyle: { height: 0, },
               // header: () => <View style={{ backgroundColor:"#00559c", height: 60, }}></View>,
               sceneContainerStyle: { backgroundColor: "#006400", },     

               // headerRight: () => ( <View style={{ height: 35, width: 35, backgroundColor: "#fff", }}>
               //    <Pressable 
               //       onPress={ () => { 
               //          alert( "oi" );
               //          DrawerActions.openDrawer();
               //       } }
               //    >
               //       <Text>Open</Text>
               //    </Pressable>
               // </View> ),

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
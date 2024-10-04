

import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DrawerView from "@/src/widgets/ui/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import React from "react";
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
               header: () => <View style={{ backgroundColor:"#00559c", height: 60, }}></View>,
               sceneContainerStyle: {backgroundColor: "#006400", },     
               headerRight: () => <View style={{ height: 35, width: 35, backgroundColor: "#fff", }}>
                  <Text>oi</Text>
               </View>
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
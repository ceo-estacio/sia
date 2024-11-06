

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { Card, Header, Horizontal, PixBG, Section, Text, View } from "@/widgets/elements";
import { Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   Pressable,
   ImageBackground,
   ScrollView,
   Dimensions,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function tema1View( { ...props } ) {


   return( <>
      <Stack.Screen 
         options={{
            headerTitle: "oi",
         }}
      />
      <View style={ s.homepage }>
         <ImageBackground 
            // source={ require( "@/assets/images/ui/banners/banner-010_2.59-1.png" ) }
            source={ require( "@/assets/images/ui/banners/banner-020_2.78.jpg" ) }
            style={{ 
               // aspectRatio: "2.59/1",
               aspectRatio: "2.78/1",
               overflow: "hidden", 
               alignItems: "flex-start",
               justifyContent: "center",
               paddingLeft: 24,
            }} 
         >
            <Text type="title">Introdução</Text>
         </ImageBackground>
         <View style={ s.page }>
            <ScrollView>

               <Section label="Cards"
                  hpd={24}
                  darkColor={ Palette.dark.bg_lv3 }
               >
                  <Horizontal>
                     <Card bg="#27f"/>
                     <Card bg="#fc0"/>
                     <Card bg="#f0a"/>
                  </Horizontal>
               </Section>
            </ScrollView>
         </View>
      </View>
   </> );
}  /*  </  tema1View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
      homepage: {
         flex: 1,
         backgroundColor: "#555"
      },
      page: {
         flex: 1,
         backgroundColor: "#1b1d22"
      },
   } )
;
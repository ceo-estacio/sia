

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { PixBG, Section, Text, View } from "@/widgets/elements";
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
function Horizontal( { ...props } ) {
   return( <>
      <Section 
         style={{
            backgroundColor: "#e5e5e5"
         }}
      >
         <ScrollView horizontal
            style={{

            }}
         >
            <View
               style={{
                  backgroundColor: Palette.dark.bg_lv3,
                  flexDirection: "row",
                  padding: 18,
                  gap: 18,
               }}
            >
               { props.children }
            </View>
         </ScrollView>
      </Section>
   </> );
}


function Card( { ...props } ) {
   return( <>
      <View 
         style={{
            borderRadius: 24,
            backgroundColor: props.bg || "#fff",
            overflow: "hidden",
            aspectRatio: "16/9",
            width: Dimensions.get( "window" ).width * .7,
         }}
      >
         {  props.children }
      </View>
   </> );
}

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
               <Text>oi</Text>

               <Horizontal>
                  <Card bg="#27f"/>
                  <Card bg="#fc0"/>
                  <Card bg="#f0a"/>
               </Horizontal>
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
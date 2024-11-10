

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { font, Fonts } from "@/constants/Sizes";
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
                  <Text style={ Fonts.h1 }>TEXTO texto h1</Text>
                  <Text style={ Fonts.h2 }>TEXTO texto h2</Text>
                  <Text style={ Fonts.h3 }>TEXTO texto h3</Text>
                  <Text style={ Fonts.h4 }>TEXTO texto h4</Text>
                  <Text style={ Fonts.h5 }>TEXTO texto h5</Text>
                  <Text style={ Fonts.h6 }>TEXTO texto h6</Text>
                  <Text style={ Fonts.p }>TEXTO texto p</Text>
                  <Text style={ Fonts.t }>TEXTO texto t</Text>
                  <Text style={ Fonts.t6 }>TEXTO texto t6</Text>
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
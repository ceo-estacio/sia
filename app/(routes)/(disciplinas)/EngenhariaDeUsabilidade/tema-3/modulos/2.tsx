

/** == [ @imports ] 
 * == == == == == == == == == */
 import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content, 
   Exercices, 
   PixBG, 
} from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { Palette } from "@/constants/Colors";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Modulo2View( { ...props } ) {

   return( <>
      <Stack.Screen 
         options={{ headerTitle:": Módulo 2" }}
      />
      <HomePage >
         <ScrollView>
            
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint }
                  center
                  title=""
                  ratio="2.78/1"
                  // image={ require( "@/assets/images/ui/banners/banner-020_2.78.jpg" ) }
               >
               </Header>
               
{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>
               
{/* == [ exercicios ] */}
                  <View darkColor={ Palette.dark.bg } pv={24}>
                     <Header pd={24}>
                        <Text h={3}>Atividades</Text>
                     </Header>

                     <Section gap={16}>

                        <Exercices id={1}
                           question={<Text></Text>}
                           answer={<Text></Text>}
                        />
                        
                     </Section>
                  </View>
            
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo2View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
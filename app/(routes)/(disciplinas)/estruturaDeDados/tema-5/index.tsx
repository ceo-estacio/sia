

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useThemeColor } from "@/hooks/useThemeColor";
import X, { Header, HomePage, Section, Text as text } from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   // View as ViewRN,
   ScrollView,
   useColorScheme, 
} from "react-native";
// import Text from "@/widgets/ThemedText";
import {
   View,
   Text,
} from "@/widgets/céo";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema5View( { ...props } ) {

   return( <>
      <HomePage 
         // bg={ Palette.dark[0] }
      >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24}>
                  <Text h={3}>Ordenação</Text>
               </Header>
               <Section darkColor="#fc0">
                  <Text h={1} >
                     oifd
                  </Text>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;
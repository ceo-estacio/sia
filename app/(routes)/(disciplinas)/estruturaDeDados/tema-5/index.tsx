

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useThemeColor } from "@/hooks/useThemeColor";
import X, { Header, HomePage, Section, Text } from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   ScrollView,
   useColorScheme, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema5View( { ...props } ) {
   const 
      colorScheme = useColorScheme()
   ;


   return( <>
      <HomePage bg={ Palette.dark[0] }>
         <ScrollView>
            <View>
               <Header center ph={24} pv={24}>
                  <X.H3>Ordenação</X.H3>
               </Header>
               <Section>
                  <Text style={{ color: colorScheme == "dark" ? "#fc0" : "#0af" }}>oifd</Text>
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
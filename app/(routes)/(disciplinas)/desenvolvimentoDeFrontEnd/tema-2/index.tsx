

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section } from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   ScrollView,
   Pressable, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function ProgramaçãoClienteComJavaScriptView( { ...props } ) {


   return( <>
      <HomePage style={ s.sheet }>
         <ScrollView>
            <Header></Header>

            <Section>
               <Pressable
                  onPress={ () => router.push( "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-2/modulos/modulo-1" ) }
               >
                  <Text>Módulo 1</Text>
               </Pressable>
            </Section>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ProgramaçãoClienteComJavaScriptView  >  */


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
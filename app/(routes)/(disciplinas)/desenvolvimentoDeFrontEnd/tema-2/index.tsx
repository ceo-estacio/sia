

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section } from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   ScrollView, 
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
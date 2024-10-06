



/** == [ @imports ] 
 * == == == == == == == == == */
import _, { Header, HomePage, Page, Section } from "@/widgets/elements";
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
export default function CView( { ...props } ) {


   return( <>
      <HomePage>
         <Page bg="#e5e5e5">
            <Section>
               <Header center pv={18} ph={24} bg="#c5c5c5">
                  <_.H3 style={{ textAlign: "center" }}>tamanho em bytes dos tipos de dados em C </_.H3>
               </Header>
               <Section
                  gap={16} pd={24}
               >
                  <_.P>sizeof( arg ): retorna o valor exato do tipo passado como argumento</_.P>
                  <Text>char: 1 byte em todos os computadores</Text>
                  <Text>int: 4 bytes em muitos computadores</Text>
                  <Text>double: 8 bytes em muitos computadores</Text>
                  <Text>double: 8 bytes</Text>
               </Section>
            </Section>
         </Page>
      </HomePage>
   </> );
}


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
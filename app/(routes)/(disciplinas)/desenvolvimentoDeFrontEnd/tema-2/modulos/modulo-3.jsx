

/** == [ @imports ] 
 * == == == == == == == == == */
 import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content, 
} from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Modulo_3_View( { ...props } ) {

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24}>
                  <Text h={3}>Manipulando e tratando eventos com jQuery</Text>
               </Header>
               <Section darkColor="#212329" lightColor="#e5e5e5">
                  <Content>
                     {
                        [
                           [
                              "$( \"p\" )",
                              "seletor == querySelector() e querySelectorAll()"
                           ],
                           [
                              "$( document ).ready()",
                              "evento que deve ser utilizado para manipulação da página HTML antes que seu conteúdo (imagens, textos etc.) seja totalmente carregado."
                           ],
                           [
                              "$( () => {} );",
                           ],
                           [
                              "$( document ).on( \"load\", () => {} )",
                           ],
                           [
                              "$( document ).on( \"click\", \"li\", () => {} )",
                           ],
                           [
                              "$( document ).on( \"mouseover\", \"li\", () => {} )",
                           ],
                           [
                              "$( document ).keypress( \"mouseover\", \"li\", () => {} )",
                           ],
                        ].map( ( item, i ) => ( 
                           <View key={ i } pd={8}>
                              <Text darkColor="#559">{ item[0] }</Text>
                              <Text style={{ marging: 8 }}>{ item[1] }</Text>
                           </View>
                         ) )
                     }
                  </Content>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo_3_View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
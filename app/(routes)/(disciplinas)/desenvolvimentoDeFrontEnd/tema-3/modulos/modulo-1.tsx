

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
export default function EstruturaBásicaDoVueJS( { ...props } ) {

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24}>
                  <Text h={3}>Estrutura básica do Vue.js</Text>
               </Header>
               <Section darkColor="#212329" lightColor="#e5e5e5">
                  <Content></Content>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  EstruturaBásicaDoVueJS  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
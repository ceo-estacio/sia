

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { 
   HomePage, 
   Header, 
   Section,
   Content, 
   View,
   Text,
   Br,
   Pix,
   OL,
   Collapsible, 
} from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   Pressable, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema6View( { ...props } ) {

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24} bg={"#00559c"}>
                  <Text h={3}>Árvores</Text>
               </Header>
               <Section darkColor={ Palette.dark.bg_lv1 }>
                  <Header pv={24} ph={24}>
                     <Text h={6}>Módulo 1</Text>
                  </Header>
                  <Content gap={16}>
                     <Text>Árvores</Text>
                     <Collapsible title="Conceito">
                        <Text>um conjunto finito de elementos que obedecem duas regras</Text>
                     </Collapsible>
                     <Collapsible title="Regras">
                        <Text>se existe pelo menos um elemento, a árvore é considerada "NÃO VAZIA" e esse elemento é chamado de "NÓ RAIZ".</Text>
                     </Collapsible>
                  </Content>
               </Section>
               <Section darkColor={ Palette.dark.bg_lv2 }>
                  <Header center pv={24}></Header>
                  <Content>
                     
                  </Content>
               </Section>
               <Section darkColor={ Palette.dark.bg_lv1 }>
                  <Header center pv={24}></Header>
                  <Content>
                     
                  </Content>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */


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
   // Br,
   Pix,
   OL,
   Collapsible, 
} from "@/widgets/elements";
import { transform } from "@babel/core";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   Pressable,
   Dimensions, 
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema6View( { ...props } ) {
   const 
      w = useSharedValue( 200 )
   ;

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center bg={"#00559c"}>
                  <Section>
                     <Content position="relative" top={0}>
                        <Text h={3}>Árvores</Text>
                     </Content>
                  </Section>   
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
                  <Content>
                     <Text h={5}>Especificações</Text>
                     <Pix h={ Dimensions.get( "window" ).width * .5 } image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/arvores-niveis.jpg" ) }/>
                     <Pix h={ Dimensions.get( "window" ).width * .5 } image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/arvores-niveis-2.png" ) }/>
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
               <View style={{ flexDirection: "row" }}>
                  <Animated.View
                     style={{
                        width: w,
                        backgroundColor: "#743"
                     }}
                     entering={ w.value = 150 }
                     exiting={ w.value = 50 }
                  >
                        <Pressable onPress={ () => {
                           w.value = withSpring( 250 );
                        } }>
                           <Text>oi</Text>
                        </Pressable>
                  </Animated.View>
                  <Animated.View
                     style={{
                        width: 150,
                        backgroundColor: "#175"
                     }}
                  >
                     <Text>io</Text>
                  </Animated.View>
               </View>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
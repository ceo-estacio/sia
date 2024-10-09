

/** == [ @imports ] 
 * == == == == == == == == == */ 
import React, { useState, useEffect } from "react"; 
import { 
   StyleSheet, 
   View, 
   Text,
   Image,
   ScrollView,
   Pressable,
} from "react-native";
import _, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";
import { Href, router } from "expo-router";



/** == [ properties ]
 * == == == == == == == == == */

function Tema( { ...p }: { link: Href; tema: number; name: string; } ) {
   const 
      link: Href = p.link 
   ;
   return( <>
      <View
         style={{
            padding: 8,
         }}
      >
         <Pressable
            onPress={ () => { router.push( link ); } }
         >
            <Text>Tema { p.tema }</Text>
            <_.H4>{ p.name }</_.H4>
         </Pressable>
      </View>
   </> );
}


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView>
            <Header bg="#00559c" h={91} ph={18} pv={18} center>
               <_.H1 style={{ color: "#eee" }}>Estrutura de dados</_.H1>
            </Header>

            <Section pd={ 18 }>

               <Tema tema={2} name="Estruturas de Dados Heterogêneas" 
                  link="/(disciplinas)/estruturaDeDados/tema-2"
               />

               <Tema tema={3} name="Modularização" 
                  link="/(disciplinas)/estruturaDeDados/tema-3"
               />
               <Tema tema={4} name="Listas, Pilhas, Filas e Deques"
                  link="/(disciplinas)/estruturaDeDados/tema-4"
               />
      
            </Section>
         </ScrollView>
      </HomePage>
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         // alignItems: "center",
         // justifyContent: "center",
      },
   } )
;
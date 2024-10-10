

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
            <Text style={{ color: "#ccc" }}>Tema { p.tema }</Text>
            <_.H4 style={{ color: "#eee" }}>{ p.name }</_.H4>
         </Pressable>
      </View>
   </> );
}


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView style={{ backgroundColor: "#212329" }}>
            {/* <Header bg="#00559c" h={129} ph={18} pv={18} centerH> */}
            <Header bg="#16181c" h={129} ph={18} pv={18} centerH>
               <_.H4 style={{ color: "#ccc" }}>Disciplina</_.H4>
               <_.H1 style={{ color: "#eee" }}>Estrutura de dados</_.H1>
            </Header>

            <View style={{ padding: 18, }}>
               <Section pd={ 18 } 
                  bg="#1b1d22"
                  style={{
                     borderRadius: 13,
                     borderColor: "#9995",
                     borderWidth: 1,
                  }}
               >
                  {
                     [
                        { 
                           id: 2,
                           title: "Estruturas de Dados Heterogêneas", 
                           link: "/(disciplinas)/estruturaDeDados/tema-2", 
                        },
                        { 
                           id: 3,
                           title: "Modularização", 
                           link: "/(disciplinas)/estruturaDeDados/tema-3", 
                        },
                        { 
                           id: 4,
                           title: "Listas, Pilhas, Filas e Deques", 
                           link: "/(disciplinas)/estruturaDeDados/tema-4", 
                        },
                     ].map( ( item, i ) => <>
                        <Tema tema={ item.id } name={ item.title } key={ item.id }
                           link={ item.link }
                        />
                        <View style={{ height: 1, backgroundColor: "#9995", }}/>
                     </> )
                  }
         
               </Section>
            </View>
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
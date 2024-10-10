

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
   Dimensions,
} from "react-native";
import _, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";
import { Href, router } from "expo-router";
import { Colors, Palette, } from "@/constants/Colors";



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
         <Pressable style={{ paddingVertical: 8, gap: 5, }}
            onPress={ () => { router.push( link ); } }
         >
            <Text style={{ color: Palette.dark.accent.amber[1] }}>Tema { p.tema }</Text>
            <_.H4 style={{ color: Palette.dark.text }}>{ p.name }</_.H4>
         </Pressable>
      </View>
   </> );
}


/** == [ Disciplinas Menu ]
 * == == == == == == == == == */
type ItemsProps = {
   id: number;
   title: string;
   link: string;
}

type DisciplinasMenuProps = {
   title: string;
   titleColor?: string;
   items?: ItemsProps[];
   bodyBG?: string;
}

export function DisciplinasMenu( { ...props }: DisciplinasMenuProps ) {

   return( <>
      <HomePage>
         {/* <ScrollView style={{ backgroundColor: Palette.dark[2] }}> */}
         <ScrollView style={{ backgroundColor: Palette.dark[1] }}>
            <Header bg={ Palette.dark[1] } h={129} ph={18} pv={18} centerH>
               <_.H4 style={{ color: "#ccc" }}>Disciplina</_.H4>
               <_.H1 style={{ color: props.titleColor || "#eee" }}>{ props.title }</_.H1>
            </Header>

            <View style={{ 
               // backgroundColor: Palette.dark[2],
               backgroundColor: props.bodyBG || Palette.dark[1],
               flex: 1, 
               minHeight: ( Dimensions.get( "window" ).height ) - ( 129 - 30 ), 
               borderTopStartRadius: 24,
               }}
            >

               <View style={{ padding: 18, }}>
                  <Section pd={ 18 } 
                     bg={ Palette.dark[1] }
                     style={{
                        borderRadius: 13,
                        borderColor: "#9995",
                        borderWidth: 1,
                     }}
                  >
                     {
                        props.items && props.items.map( ( item, i ) => <>
                           <Tema tema={ item.id } name={ item.title } key={ item.id }
                              link={ item.link }
                           />
                           <View style={{ height: 1, backgroundColor: "#9995", }}/>
                        </> )
                        // [
                        //    { 
                        //       id: 2,
                        //       title: "Estruturas de Dados Heterogêneas", 
                        //       link: "/(disciplinas)/estruturaDeDados/tema-2", 
                        //    },
                        //    { 
                        //       id: 3,
                        //       title: "Modularização", 
                        //       link: "/(disciplinas)/estruturaDeDados/tema-3", 
                        //    },
                        //    { 
                        //       id: 4,
                        //       title: "Listas, Pilhas, Filas e Deques", 
                        //       link: "/(disciplinas)/estruturaDeDados/tema-4", 
                        //    },
                        // ].map( ( item, i ) => <>
                        //    <Tema tema={ item.id } name={ item.title } key={ item.id }
                        //       link={ item.link }
                        //    />
                        //    <View style={{ height: 1, backgroundColor: "#9995", }}/>
                        // </> )
                     }
            
                  </Section>
               </View>
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
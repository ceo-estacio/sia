

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
import X, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";
import { Href, router } from "expo-router";
import { Colors, Palette, } from "@/constants/Colors";
import Icon from "../icon";



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
            <X.H4 style={{ color: Palette.dark.text }}>{ p.name }</X.H4>
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
         <ScrollView style={{ backgroundColor: Palette.dark[1] }}>
            <Header h={129} ph={18} pv={18} centerH>
               <X.H4 style={{ color: "#ccc" }}>Disciplina</X.H4>
               <X.H1 style={{ color: props.titleColor || "#ddd" }}>{ props.title }</X.H1>
            </Header>

            <View style={{ 
               backgroundColor: props.bodyBG || Palette.dark[2],
               flex: 1, 
               minHeight: ( Dimensions.get( "window" ).height ) - ( 129 - 30 ), 
               borderTopStartRadius: 24,
               }}
            >

               <View style={{ padding: 18, }}>
                  <Section pd={ 18 } 
                     bg={ Palette.dark[0] || "#ffffff05" }
                     style={{
                        borderRadius: 13,
                        borderColor: "#9992",
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
                     }
            
                  </Section>
               </View>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}


/**
 * == [ back button ] 
 * == == == == == == == == == 
 */
export function BackBtn( { ...props } ) {
   return( <>
      <Pressable
         onPress={ () => router.back() }
      >
         <Icon color={ Palette.accent.purple[3] } family="Ionicons"
            // name="arrow-back"
            name="chevron-back"
         />
      </Pressable>
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
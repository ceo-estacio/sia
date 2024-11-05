

/** == [ @imports ] 
 * == == == == == == == == == */ 
import React, { useState, useEffect } from "react"; 
import { 
   StyleSheet, 
   Image,
   ScrollView,
   Pressable,
   Dimensions,
   FlatList,
} from "react-native";
import X, { 
   Code, 
   Header, 
   HomePage, 
   Page, 
   Picture, 
   Pix, 
   Section,
   View, 
   Text, 
} from "@/widgets/elements";
import { Href, router } from "expo-router";
import { Colors, Palette, } from "@/constants/Colors";
import Icon from "../icon";



/** == [ properties ]
 * == == == == == == == == == */
function Tema( { ...p }: { link: Href; tema: number | string; name: string; sectionName: string; } ) {
   const 
      link: Href = p.link 
   ;
   return( <>
      <View
         style={{
            padding: 16,
            // backgroundColor: "#153"
         }}
      >
         <Pressable style={{ paddingVertical: 8, gap: 5, }}
            onPress={ () => { router.push( link ); } }
         >
            <Text style={{ color: Palette.dark.accent.amber[1] }}>
               { typeof( p.tema ) === 'number' && p.sectionName } { p.tema }
            </Text>
            <Text type="subtitle" style={{ color: Palette.dark.text }}>{ p.name }</Text>
         </Pressable>
      </View>
   </> );
}


/** == [ Disciplinas Menu ]
 * == == == == == == == == == */
type ItemsProps = {
   id: number | string;
   title: string;
   link: string;
   doc: string;
}

type DisciplinasMenuProps = {
   title: string;
   titleColor?: string;
   items?: ItemsProps[];
   bodyBG?: string;
   sectionName: string;
}

export function DisciplinasMenu( { ...props }: DisciplinasMenuProps ) {

   return( <>
      <HomePage>
         <Header h={129} ph={18} pv={18} centerH>
            <Text h={4} style={{ color: "#ccc" }}>Disciplina</Text>
            <Text h={1} style={{ color: props.titleColor || "#ddd" }}>{ props.title }</Text>
         </Header>
            <View style={{ 
                  backgroundColor: props.bodyBG || "#212329",
                  flex: 1, 
                  borderTopStartRadius: 24,
                  overflow: "hidden",
               }}
            >
               <View style={{ padding: 18, }}>
                  
                     <FlatList 
                        style={{
                           padding: 8,
                           borderRadius: 13,
                           borderColor: "#9992",
                           borderWidth: 1,
                        }}
                        data={ props.items }
                        ItemSeparatorComponent={ () => <View style={{ width: "90%", height: 1, backgroundColor: "#7775", marginHorizontal: "auto", }}/> }
                        renderItem={ ( item ) => (
                           <Tema tema={ item.item.id } name={ item.item.title } sectionName={ props.sectionName } key={ item.item.id }
                              link={ item.item.link }
                           />
                        ) }
                     />
            
               </View>
            </View>
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
         style={{
            backgroundColor: "#21232900",
            height: 50,
            aspectRatio: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 18
         }}
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
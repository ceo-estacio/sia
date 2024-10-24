

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section, View, Text, } from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect, Fragment } from "react";
import { 
   StyleSheet,
   ScrollView,
   Pressable,
   FlatList, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
const 
   conteúdoOnline = "https://stecine.azureedge.net/repositorio/00212ti/07662/index.html?brand=estacio#"
;

/** == [ exports ]
 * == == == == == == == == == */
export default function VueJSView( { ...props } ) {
   const 
      modulos = [
         {
            id: "Módulo 1",
            src: "/(disciplinas)/VueJS/tema-2/modulos/modulo-1",
         },
         // {
         //    id: "",
         //    src: "/(disciplinas)/VueJS/tema-2/modulos/modulo-",
         // },
      ]
   ;

   return( <>
      <HomePage style={ s.sheet }>
         <Section pd={24} w={"100%"} gap={16}>
            {
               modulos && 
               <FlatList 
                  data={ modulos }
                  ItemSeparatorComponent={ () => <View style={{ height: 16, }}/> }
                  renderItem={ ({ item }) => (
                     <Pressable key={ item.id }
                        onPress={ () => router.push( item.src ) }
                        style={{
                           backgroundColor: "#21252b",
                           width: "100%",
                           height: 56,
                           alignItems: "center",
                           justifyContent: "center",
                           borderRadius: 16,
                           
                        }}
                     >
                        <Text h={5}>{ item.id }</Text>
                     </Pressable>
                  ) }
               />
            }
         </Section>
         <ScrollView>
            <Header></Header>

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ProgramaçãoClienteComJavaScriptView  >  */


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
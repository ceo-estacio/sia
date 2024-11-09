

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section, View, Text, Content, List, } from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect,  } from "react";
import { 
   StyleSheet,
   ScrollView,
   Pressable,
   FlatList, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
const 
   conteúdoOnline = ""
   ,
   videos = [
   ]
;

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema3View( { ...props } ) {
   const 
      modulos = [
         {
            id: "Módulo 1",
            name: "oi",
            desc: "oi",
            src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-3/modulos/1",
         },
         // {
         //    id: "Módulo 2",
         //    name: "",
         //    desc: "",
         //    src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-3/modulos/2",
         // },
         // {
         //    id: "Módulo 3",
         //    name: "",
         //    desc: "",
         //    src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-3/modulos/3",
         // },
      ]
   ;

   return( <>
      <HomePage style={ s.sheet }>
         <ScrollView>
            <Section darkColor="#00559c">
               <Header title="Ergonomia em Interação Humano Computador"
                  type="subtitle"
                  center
                  image={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/tema 2/eu.jpg" ) }
                  ratio="1 / .305610561"
                  bg="#421"

               />

               <Section >
                     <List>
                        <Text>Descrever os elementos a serem definidos em um projeto de design de interface humano-computador.</Text>
                     </List>
                     <List>
                        <Text>Descrever técnicas de concepção e modelagem de interface humano-computador.</Text>
                     </List>
                     <List>
                        <Text>Reconhecer o processo de design de interface humano-computador.</Text>
                     </List>
                     <List>
                        <Text>Definir princípios e diretrizes para o design de interfaces humano-computador.</Text>
                     </List>
               </Section>
            </Section>
            <Section pd={24} w={"100%"} gap={16}>
               {
                  modulos && 
                  <FlatList 
                     ListHeaderComponent={ <>
                        <Header pv={24} >
                           <Text h={4}>Objetivos</Text>
                        </Header>
                     </> }
                     data={ modulos }
                     ItemSeparatorComponent={ () => <View style={{ height: 16, }}/> }
                     renderItem={ ({ item }) => (
                        <Pressable key={ item.id }
                           onPress={ () => router.push( item.src ) }
                           style={{
                              backgroundColor: "#21252b",
                              width: "100%",
                              height: 126,
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 22,
                              padding: 8,
                           }}
                        >
                           <View style={{ paddingBottom: 8, }}>
                              <Text h={6} darkColor="#777">{ item.id }</Text>
                           </View>
                           <Text h={ item.name.length > 28 ? 4 : 3 } style={{ textAlign: "center" }}>{ item.name }</Text>
                           <Text h={5} darkColor="#777" style={{ textAlign: "center", }}>{ item.desc }</Text>
                        </Pressable>
                     ) }
                  />
               }
            </Section>

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema3View  >  */


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
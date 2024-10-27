

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section, View, Text, } from "@/widgets/elements";
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
;

/** == [ exports ]
 * == == == == == == == == == */
export default function ProgramaçãoClienteComTypescriptView( { ...props } ) {
   const 
      modulos = [
         {
            id: "Módulo 1",
            name: "Conceitos gerais e similaridades com o JavaScript",
            desc: "Reconhecer os conceitos gerais e as similaridades com o JavaScript.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-4/modulos/modulo-1",
         },
         {
            id: "Módulo 2",
            name: "Funções com TypeScript",
            desc: "Tipos e narrowing",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-4/modulos/modulo-2",
         },
         {
            id: "Módulo 3",
            name: "Tipos e narrowing",
            desc: "Analisar os tipos e narrowing.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-4/modulos/modulo-3",
         },
         {
            id: "Módulo 4",
            name: "Classes com TypeScript",
            desc: "Aplicar exemplos práticos de classes com TypeScript.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-4/modulos/modulo-4",
         },
      ]
   ;

   return( <>
      <HomePage style={ s.sheet }>
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
                        <Text h={3}>{ item.name }</Text>
                        <Text h={5} darkColor="#777" style={{ textAlign: "center", }}>{ item.desc }</Text>
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
}  /*  </  ProgramaçãoClienteComTypescriptView  >  */


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
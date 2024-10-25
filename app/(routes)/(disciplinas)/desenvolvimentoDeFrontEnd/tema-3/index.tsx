

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
export default function VueJSView( { ...props } ) {
   const 
      modulos = [
         {
            id: "Módulo 1",
            name: "Estrutura básica do Vue.js",
            desc: "Reconhecer a estrutura básica do Vue.js.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-3/modulos/modulo-1",
         },
         {
            id: "Módulo 2",
            name: "Saindo do básico",
            desc: "Empregar uma lógica para interação com o usuário.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-3/modulos/modulo-2",
         },
         {
            id: "Módulo 3",
            name: "Componentes",
            desc: "Aplicar a utilização de componentes para modularização do código.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-3/modulos/modulo-",
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
}  /*  </  VueJSView  >  */


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


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
   ,
   videos = [
   ]
;

/** == [ exports ]
 * == == == == == == == == == */
export default function AngularView( { ...props } ) {
   const 
      modulos = [
         {
            id: "Módulo 1",
            name: "Introdução e preparação do ambiente",
            desc: "Elaborar diferentes ambientes de desenvolvimento para o React.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-6/modulos/modulo-1",
         },
         {
            id: "Módulo 2",
            name: "Conceitos básicos do ReactJS",
            desc: "Aplicar a sintaxe por meio da implementação de exemplos.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-6/modulos/modulo-2",
         },
         {
            id: "Módulo 3",
            name: "React com requisições HTPP/Ajax & React Hooks",
            desc: "Usar requisições HTTP/Ajax com o novo conceito de React Hooks.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-6/modulos/modulo-3",
         },
         {
            id: "Módulo 4",
            name: "Rotas e Redux",
            desc: "Traçar rotas com React Router e o controle da camada de negócio com React Redux.",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-6/modulos/modulo-4",
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
                        <Text h={ item.name.length > 28 ? 4 : 3 } style={{ textAlign: "center" }}>{ item.name }</Text>
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
}  /*  </  AngularView  >  */


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
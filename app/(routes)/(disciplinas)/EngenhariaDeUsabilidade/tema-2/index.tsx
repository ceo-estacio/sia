

/** == [ @imports ] 
 * == == == == == == == == == */
import { Header, HomePage, Section, View, Text, Content, } from "@/widgets/elements";
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
            name: "Descrever os conceitos de Ergonomia e Usabilidade em geral",
            desc: "",
            src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-2/modulos/1",
         },
         {
            id: "Módulo 2",
            name: "Descrever os princípios e critérios ergonômicos em IHC",
            desc: "",
            src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-2/modulos/2",
         },
         {
            id: "Módulo 3",
            name: "Identificar o que é necessário para que um software tenha características mínimas de ergonomia em IHC",
            desc: "",
            src: "/(disciplinas)/EngenhariaDeUsabilidade/tema-2/modulos/3",
         },
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

               <Section darkColor="#">
                  <Content gap={45}>
                     <Section gap={14}>
                        <Text type="subtitle">DESCRIÇÂO</Text>
                        <Text >O design e a construção de softwares ergonomicamente adequados à usabilidade pelas pessoas, visando a facilitação da interação humano-computador.</Text>
                     </Section>
                     
                     <Section gap={14}>
                        <Text type="subtitle">PROPÓSITO</Text>
                        <Text >Compreender os conceitos de Ergonomia e de Usabilidade para poder aplicá-los na concepção e no desenvolvimento de interfaces de software amigáveis aos usuários humanos.</Text>
                     </Section>
                     
                     <Section gap={14}>
                        <Text type="subtitle">Preparação</Text>
                        <Text >Para o estudo deste tema não existem pré-requisitos operacionais.</Text>
                     </Section>
                  </Content>
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
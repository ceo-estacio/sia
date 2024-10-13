

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { 
   HomePage, 
   Header, 
   Section,
   Content, 
   View,
   Text,
   Br,
   Pix,
   OL, 
} from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   Pressable, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema5View( { ...props } ) {

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24} bg={"#00559c"}>
                  <Text h={3}>Ordenação</Text>
               </Header>
               <Section darkColor={ Palette.dark.bg_lv1 }>
                  <Content gap={16}>
                     <Text h={5}>
                        Conceitos de ordenação para métricas de classificação.
                     </Text>
                     <Text h={5}>
                        Algaritmos de ordenação da bolha, para inserção e seleção.
                     </Text>

                  </Content>

                  <Section darkColor="#212329" >
                     <Content>
                        <Text h={3}>Análise de complexidade</Text>
                        <Text>Análise de eficiencia: tempo / espaço</Text>
                     </Content>
                     <Pix h={200} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-5/complexidade.png" ) }/>
                     <Pix h={300} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-5/big-O.png" ) }/>
                     <Pix h={270} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-5/exemplos.png" ) }/>
                     <Pix h={320} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-5/merge-sort.jpg" ) }/>
                  </Section>

                  <Section darkColor="#0af3">
                     <Content gap={16}>
                        <Header center>
                           <Text h={3}>Exercício</Text>
                        </Header>
                        <Text>Métodos de ordenação interna executam em memória principal (RAM) somente, enquanto métodos de ordenação externa executam em memória secundária, porém podem usar memória principal também.</Text>
                        <Text>Somente algoritmos de ordenação não baseados em comparação podem executar em um tempo inferior à O(n log n).</Text>
                        <Text>algoritmos não baseados em comparação entre elementos da sequência a ser ordenada não estão sujeitos ao limite de complexidade de O(n log n).</Text>
                        <Text>Um algoritmo estável pode necessitar de menos operações que um algoritmo instável, entretanto, isto não reduz a complexidade computacional do algoritmo.</Text>
                     </Content>
                  </Section>
               </Section>

               <Section pv={24}>
                  <Header center bg={"#006400"} ph={24} pv={24}>
                     <Text h={2}>Método da bolha (Bubble Sort)</Text>
                  </Header>
                  <Content>
                     <OL 
                        li={[
                           "No melhor caso: (vetor já ordenado), executa n operações \"n = numero de elementos\".",
                           "No pior caso, são feitas n² operações (complexidade quadratica).",
                           "Não recomendado para programas que precisam de velocidade e operem com uma quantidade elevada de dados."
                        ]}
                     />
                     <Text></Text>
                     <Text>Para 1 i &lt; n verificar se si &lt; si+1</Text>
                  </Content>
                  <Pix h={200} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-5/bolha-etapa1.png" ) }/>

                  <Section pd={24}>
                     <Header center>
                        <Text h={3}>Selection sort</Text>
                     </Header>
                  </Section>

                  <Section pd={24}>
                     <Header center>
                        <Text h={3}>Insection sort</Text>
                     </Header>
                     <Section>
                        <Content>
                           <Pressable
                              onPress={ () => router.push( "https://stecine.azureedge.net/repositorio/ordenacao/docs/ordenacao.c" ) }
                           >
                              <Text>Código fonte do programa</Text>
                           </Pressable>
                        </Content>
                     </Section>

                     <Section>
                        <Header center bg="#bd0075" pv={8}>
                           <Text h={3}>Exercicios</Text>
                        </Header>
                        <Content>
                           <OL li={[
                              "algoritmos da bolha e para o Insert Sort. Ambos executam sempre em tempo linear para as instâncias já ordenadas.",
                              "Bubble Sort, Selection Sort, Insert Sort, os três têm a mesma complexidade, são considerados equivalentes."
                           ]} />
                        </Content>
                     </Section>
                  </Section>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
/*
17, 43, 37, 31, 8, 77, 52, 25
17, 37, 31, 8, 43, 52, 25, 77
17, 31, 8, 37, 43, 25, 52, 77
*/
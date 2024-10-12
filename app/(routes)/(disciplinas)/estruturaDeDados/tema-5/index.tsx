

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
} from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme, 
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
                     <Text>S = s1, s2, ..., sn </Text>
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
                  </Section>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
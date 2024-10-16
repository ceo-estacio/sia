

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import X, { T as x, Header, View, Text, Section, Pix } from "@/widgets/elements";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   // View,
   // Text,
   ScrollView, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
function Card( { ...props } ) {
   return( <>
      <View
         style={{
            borderRadius: 13,
            backgroundColor: Palette.dark[1],
            padding: 18,
            gap: 16,
         }}
      >
         { props.children }
      </View>
   </> );
}

const 
   Qea = ( { ...props } ) => (
      <Text darkColor="#27f" h={5}
         style={{ fontWeight: 800, fontSize: 17, }}
         { ...props }
      ></Text>
   ),
   Title = ( { ...props } ) => <>
      <View style={{ gap: 8, }}>
         { 
            props.data.map( ( t, i ) => <>
               <Text key={ `title-${ i }` } style={{ fontWeight: 800, fontSize: 17, color: "#999", }}>{ t }</Text>
            </> )
         }
         
      </View>
   </>
   ,
   Txt = ( { ...props } ) => <>
      <View style={{ gap: 8, }}>
         {
            props.data.map( ( t, i ) => <>
               <Text key={ `txt-${ i }` } style={{ fontSize: 16, color: "#777", }}>{ t }</Text>
            </> )
         }
      </View>
   </>
;

/** == [ exports ]
 * == == == == == == == == == */
export default function ExercíciosView( { ...props } ) {


   return( <>
      <View style={ s.sheet }>
         <ScrollView
            style={{
               flex: 1, width: "100%",
            }}
         >
            <Title data={[`Tema 4`]} />
            <Header center bg="#006400" ph={24} pv={24}>
               <x.H3 style={{ color: "#cfc" }}>Listas, Pilhas e Filas</x.H3>
            </Header>
            <View
               style={{
                  width: "100%",
                  padding: 18,
                  gap: 16,
               }}
            >
               <Card>
                  <Title 
                     data={[
                        '(IBFC/2022 - Adaptada) Assinale, das alternativas abaixo, a única que identifica respectivamente uma Estrutura de Dados do tipo FIFO (First In, First Out) e uma outra com a Estrutura de dados do tipo LIFO (Last In, First Out'
                     ]}
                  />
                  <Txt
                     data={["Fila - pilha"]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `(IBADE/2022) Uma estrutura de dados onde existe uma coleção ordenada de entidades sendo a metodologia de busca com base no deslocamento relativo ao primeiro (cabeça) da coleção, chama-se:`
                     ]}
                  />
                  <Txt 
                     data={[
                        `Lista.`
                     ]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `Várias estruturas de dados podem ser utilizadas para armazenar dados de uma aplicação. Em relação ao assunto, assinale a alternativa correta.`
                     ]}
                  />
                  <Txt 
                     data={[
                        `A estrutura de dados do tipo fila utiliza a ideia do primeiro a ser inserido, será o primeiro a ser retirado.`
                     ]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `Uma lista ordenada alocada sequencialmente possui como desvantagem:`
                     ]}
                  />
                  <Txt 
                     data={[
                        `Tamanho limitado de memória alocada para lista.`
                     ]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `O acesso ao elemento de uma estrutura de dados tipo pilha se restringe ao mais recente na pilha. Já o acesso a um elemento de uma estrutura tipo fila ocorre ao dado há mais tempo na fila. Sobre pilhas e filas, avalie as assertivas a seguir:`,
                        `I - Uma forma de evitar o desperdício de memória numa fila em alocação sequencial é utilizar-se lista circular.`,
                        `II - Em uma pilha em alocação encadeada, a complexidade da remoção é O(n).`,
                        `III - Pilhas têm a propriedade de inverter a ordem de cadeias, enquanto as filas mantêm a ordem.`,
                        ` A opção que contém todas as assertivas corretas é:`
                     ]}
                  />
                  <Txt 
                     data={[
                        `I e III`
                     ]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `Sobre listas duplamente encadeadas, afirma-se: `,
                        `I) Cada nó usa o dobro do número de campos ponteiro de uma lista simplesmente encadeada. `,
                        `II) A complexidade de remoção é metade da complexidade de remoção em lista simplesmente encadeada. `,
                        `III) Não permitem a inserção de nó no meio da lista. `,
                        `É correto apenas: `
                     ]}
                  />
                  <Txt 
                     data={[
                        `I`
                     ]}
                  />
               </Card>
               
               <Card>
                  <Title 
                     data={[
                        `(FCC/ 2013) Insira os dados de entrada numa fila. Em seguida, retire cada dado da fila e insira numa pilha. Mostre a pilha. Depois retire os dados da pilha e insira na fila. Mostre a fila.`,
                        `Dados de entrada: 11, 12, 23, 14, 25, 50, 8, 18, 29, 10`,
                        `As estruturas mostradas ficam`,
                        `I. Pilha: (topo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11`,
                        `II. Fila: (começo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10 (fim)`,
                        `III. Fila: (começo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11 (fim)`,
                        `IV. Pilha: (topo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10`,
                        `V. A fila mostrada fica com os elementos em ordem invertida dos dados de entrada`,
                        `Está correto o que se afirma APENAS em:`
                     ]}
                  />
                  <Txt 
                     data={[
                        `I, III e IV.`
                     ]}
                  />
               </Card>

            </View>

            <View>
               <Title data={["Tema 5"]}/>
               <Header center bg={"#006400"} ph={24} pv={24}>
                  <Text h={3}>Ordenação</Text>
               </Header>


               <Section pd={18} gap={16}>
                  <Card>
                     <Title 
                        data={[
                           "(MPE-BA/2023) Algoritmos de ordenação são responsáveis por ordenar elementos de uma estrutura de dados de forma completa ou parcial. Sobre a complexidade dos algoritmos de ordenação, assinale, a seguir, o algoritmo de ordenação que, no pior caso, tem complexidade igual a O(n log n)."
                        ]}
                     />
                     <Txt 
                        data={[
                           "Merge sort"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "Sobre o método da bolha é correto afirmar que: "
                        ]}
                     />
                     <Txt 
                        data={[
                           "O tempo de execução pode ser linear em relação ao tamanho da entrada se a instância apresentada já estiver ordenada. "
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "(CESGRANRIO/2014) Considere utilizar o algoritmo Bubble Sort para ordenar, em ordem crescente, a sequência de números",
                           "17, 43, 37, 31, 8, 77, 52, 25.",
                           "Se a sequência original for a iteração zero, qual será a sequência de números da segunda iteração?"
                        ]}
                     />
                     <Txt 
                        data={[
                           "17, 31, 8, 37, 43, 25, 52, 77"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "(INSTITUTO AOCP/2013 - Adaptada) A ordenação é um dos conceitos fundamentais da ciência da computação e desempenha um papel crucial em várias áreas, como algoritmos, estruturas de dados e processamento de dados em geral. Qual das alternativas abaixo indica um algoritmo de ordenação?"
                        ]}
                     />
                     <Txt 
                        data={[
                           "Bubble sort"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "(MPE-BA/2023) Algoritmos de ordenação são responsáveis por ordenar elementos de uma estrutura de dados de forma completa ou parcial. Sobre a complexidade dos algoritmos de ordenação, assinale, a seguir, o algoritmo de ordenação que, no pior caso, tem complexidade igual a O(n log n)."
                        ]}
                     />
                     <Txt 
                        data={[
                           "Merge sort"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "(FUMARC/2014 - Adaptada) Considere uma estrutura de dados do tipo vetor de tamanho 6 (seis) inicializado com as chaves abaixo:",
                           "vetor 79, 82, 68, 69, 78, 65",
                           "Analise a ilustração dos passos intermediários de um método de ordenação das chaves do vetor:",
                           "65, 82, 68, 69, 78, 79",
                           "65, 68, 82, 69, 78, 79",
                           "65, 68, 69, 82, 78, 79",
                           "65, 68, 69, 78, 82, 79",
                           "65, 68, 69, 78, 79, 82",
                        ]}
                     />
                     <Txt 
                        data={[
                           "Ordenação por seleção"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "(UEAP/2014) Leia o seguinte trecho de código-fonte escrito em Java."
                           ,"< imagem >"
                        ]}
                     />
                     <Txt 
                        data={[
                           "Bubble Sort"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "Todos os algoritmos de ordenação interna devem ter complexidade de espaço de: "
                        ]}
                     />
                     <Txt 
                        data={[
                           "O(n)"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                           "Algoritmos de ordenação baseados em comparação entre elementos da sequência tem complexidade computacional mínima de: "
                        ]}
                     />
                     <Txt 
                        data={[
                           "O(n log n)"
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                        ]}
                     />
                     <Txt 
                        data={[
                        ]}
                     />
                  </Card>
                  
                  <Card>
                     <Title 
                        data={[
                        ]}
                     />
                     <Txt 
                        data={[
                        ]}
                     />
                  </Card>
               </Section>

               {/* 
            <View>
               <Title data={["Tema 5"]}/>
               <Header center bg={"#006400"} ph={24} pv={24}>
                  <Text h={3}>Ordenação</Text>
               </Header>


               <Section pd={18} gap={16}> */}

               <View>
                  <Title data={["Tema 6"]}/>
                  <Header center ph={24} pv={24} bg={"#006400"}>
                     <Text h={3}>Árvores</Text>
                  </Header>

                  <Section pv={18} gap={16} darkColor="#212329">
                  
                  <Card>
                     <Qea h={5}>
                        Ano: 2015 Banca: NUCEPE Órgão: SEFAZ - PI Prova: Analista - Sistemas Pleno
                        Árvore AVL é uma árvore de busca autobalanceada. Isso significa que:
                     </Qea>
                     <Text>As alturas das duas subárvores a partir de cada nó diferem no máximo em uma unidade.</Text>
                     {/* 
                     
                        55
                  35          75
               25    45    65    85
                     
                     */}
                  </Card>
                  
                  <Card>
                     <Qea>Seja o seguinte código em Python cujo principal objetivo é implementar uma árvore binária. Marque a alternativa correta quanto a execução do código:</Qea>
                     <Pix h={300} image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/ex-2.png" ) }/>
                     <Text>A árvore criada no código acima é uma árvore binária de busca com todas as folhas no último nível.</Text>
                  </Card>
                  
                  <Card>
                     <Qea>Seja a seguinte árvore binária de busca abaixo, marque a sequência correta do percurso em pós-ordem:</Qea>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/ex-3.png" ) }/>
                     <Text>23,24,26,29,28,27,25</Text>
                  </Card>
                  
                  <Card>
                     <Qea>Seja a seguinte árvore, marque a opção correta que indica o porquê a árvore abaixo não é uma árvore binária de busca:</Qea>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/ex-4.png" ) }/>
                     <Text>Não é uma árvore binária de busca pois o nó 22 deveria estar inserido à direita do nó 20.</Text>
                  </Card>
                  
                  <Card>
                     <Qea>As árvores binárias de busca são especializações das árvores binárias que permitem uma melhor organização dos algoritmos de busca. Sobre a inserção de uma nova chave em uma árvore binária de busca é correto afirmar que:</Qea>
                     <Text>Todas as chaves são inseridas em folhas, a posição da folha é determinada pela busca.</Text>
                  </Card>
                  
                  </Section>
               </View>
            </View>
         </ScrollView>
      </View>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         width: "100%",
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: "#16181c",
      },
   } )
;
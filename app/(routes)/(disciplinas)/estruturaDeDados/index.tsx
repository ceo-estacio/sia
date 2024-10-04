

/** == [ @imports ] 
 * == == == == == == == == == */ 
import React, { useState, useEffect } from "react"; 
import { 
   StyleSheet, 
   View, 
   Text,
   Image,
   ScrollView, 
} from "react-native";
import $, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";
// import "../../../../assets/images/disciplinas/estrutura-de-dados/tree-node.png"


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosView( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header bg="#00559c" h={91} ph={18} pv={18} center>
               <$.H1>Estrutura de dados</$.H1>
            </Header>

            <Section ph={22} pv={24}>
               <Text>
                  realizar operações: inserir, excluir e localizar um registro
               </Text>
               <Text>
                  percorrer e classificar de uma forma pré determinada
               </Text>
            </Section>

            <Section ph={22} pv={22}>
               <Header>
                  <$.H3>tipos</$.H3>
               </Header>

               <Section pv={22}>
                  <$.H5>Array</$.H5>
                  <$.Ts>Vetor: estruturas unidimensionais</$.Ts>
                  <$.Ts>Matriz: estruturas multidimensionais</$.Ts>
                  <$.P>
                     armazenar uma coleção de elementos do mesmo tipo "ou não", onde cada elemento pode ser identificado por um indice ou uma chave
                  </$.P>
               </Section>

               <Section pv={22}>
                  <$.H5>Pilha</$.H5>
                  <$.Ts>coleção ordenada de itens baseada no princípio L.I.F.O "Last In First Out"</$.Ts>
                  <$.P>

                  </$.P>
               </Section>

               <Section pv={22}>
                  <$.H5>Fila</$.H5>
                  <$.Ts>coleção ordenada de itens baseada no princípio F.I.F.O "First In First Out"</$.Ts>
                  <$.P>

                  </$.P>
               </Section>

               <Section pv={22}>
                  <$.H5>Árvore</$.H5>
                  <$.Ts>coleção não ordenada de itens</$.Ts>
                  <Picture center >
                     <Pix
                        image={ require( "../../../../assets/images/disciplinas/estrutura-de-dados/tree-node.png" ) }
                        w="70%"   
                     />
                  </Picture>
                  <$.P>
                     constituídas por nós, com relacionamento pai e filhos
                  </$.P>
                  <$.T>Nó do topo: raiz</$.T>
                  <$.T>cada nó pode ter 0 ou mais filhos: ramos</$.T>
                  <$.T>nós internos são os que possuem filhos: B, E, F, D, G</$.T>
                  <$.T>nós externos "folhas" não possuem filhos: I, J, K, C, L, H</$.T>
                  <$.T>nós </$.T>

                  <Section pv={16}>
                     <$.H4>Árvore binária</$.H4>
                     <Text>insere seus nós sem nenhuma regra definida</Text>
                  </Section>

                  <Section pv={16}>
                     <$.H4>Árvore binária de busca</$.H4>
                     <Text>inicia a operação inserindo a raiz e o primeiro nó filho</Text>
                     <Text>a partir do segundo nó, é feita a verificação: </Text>
                     <Text>o valor é maior do que o valor da raiz ? ( é adicionado à direita ) : ( é adicionado à esquerda )</Text>
                     <Text>os valores da subarvore da esquerda terão sempre valores menores do que os nós da direita</Text>
                  </Section>

                  <Code ph={24} pv={24} title="Arvore binária">
                     <Text style={{ color: "#eee" }}>
{`class Arvore {
   constructor() {
      this.nós = {}
   }

   inserir( arvore, valor ) {
      if( arvore.valor ) {
         if( valor > arvore.valor ) {
            this.inserir( arvore.direita, valor );
         } else {
            this.inserir( arvore.esquerda, valor );
         }
      } else {
         arvore.valor = valor;
         arvore.direita = {};
         arvore.esquerda = {};
      }
   }
}

const 
   novaArvore = new Arvore();

   novaArvore.inserir( novaArvore.nos, 23 );
   novaArvore.inserir( novaArvore.nos, 12 );
   novaArvore.inserir( novaArvore.nos, 4 );
   novaArvore.inserir( novaArvore.nos, 18 );
   novaArvore.inserir( novaArvore.nos, 1 );
   novaArvore.inserir( novaArvore.nos, 27 );
   novaArvore.inserir( novaArvore.nos, 25 );
;`}
                     </Text>
                  </Code>
                  <Picture center>
                     <Pix 
                        image={ require( "../../../../assets/images/disciplinas/estrutura-de-dados/novaArvore.png" ) }
                        w="70%"
                     />
                  </Picture>

               </Section>

            </Section>
         </ScrollView>
      </HomePage>
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
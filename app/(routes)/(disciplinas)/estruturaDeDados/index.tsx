

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
import _, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";
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
               <_.H1 style={{ color: "#eee" }}>Estrutura de dados</_.H1>
            </Header>

            <Section pv={24} bg="#e5e5e5" gap={18}>
               <_.H2 style={{ paddingHorizontal: 24 }}>Tema 2</_.H2>

               <Section gap={18}>
                  <Header bg="#f5f5f5" ph={24} center>
                     <_.H4 style={{ color: "#0075bd" }}>Empregar ponteiros com a utilização da linguagem de programação C</_.H4>
                  </Header>
                  <Section pd={24} gap={16}>
                     <Text>ponteiro é um apontador para um endereço de memória</Text>
                     <Text>também apontam para o primeiro de arrays e strings</Text>
                     
                     <Picture center>
                        <Pix 
                           image={ require( "@/assets/images/disciplinas/estrutura-de-dados/ponteiro para ponteiro.jpg" ) }
                        />
                     </Picture>

                     <Section>
                        <_.H4>alocação dinamica com dois vetores: um com malloc e um com calloc</_.H4>
                        <Code 
                           title="alocação com malloc"
                           script={`
int *i;   // vetor para ser alocado
i = ( int* ) malloc( 5 *sizeof( int ) );   // 5 é o n° de elementos, e o tamanho de cada elemento
                           `}
                        />
                        <Code 
                           title="alocação com calloc"
                           script={`
int *i;   // vetor para ser alocado
i = ( int* ) calloc( 5, sizeof( int ) );   // 1° arg é o n° de elementos, 2° arg é o tamanho de cada elemento
                           `}
                        />
                     </Section>
                  </Section>
               </Section>

               <Section gap={18}>
                  <Header bg="#f5f5f5" ph={24} center>
                     <_.H4 style={{ color: "#0075bd" }}>Definir estrutura de dados heterogênea</_.H4>
                  </Header>

                  <Section pd={24} gap={16}>
                  </Section>
               </Section>

               <Section gap={18}>
                  <Header bg="#f5f5f5" ph={24} center>
                     <_.H4 style={{ color: "#0075bd" }}>Aplicar structs com a utilização da linguagem de programação C</_.H4>
                  </Header>

                  <Section pd={24} gap={16}>
                  </Section>
               </Section>

               <Section gap={18}>
                  <Header bg="#f5f5f5" ph={24} center>
                     <_.H4 style={{ color: "#0075bd" }}>Empregar as estruturas de dados aninhadas, os vetores de estruturas e a instrução typedef usando a linguagem de programação C</_.H4>
                  </Header>
                  
                  <Section pd={24} gap={16}>
                  </Section>
               </Section>

            </Section>

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
                  <_.H3>tipos</_.H3>
               </Header>

               <Section pv={22}>
                  <_.H5>Array</_.H5>
                  <_.Ts>Vetor: estruturas unidimensionais</_.Ts>
                  <_.Ts>Matriz: estruturas multidimensionais</_.Ts>
                  <_.P>
                     armazenar uma coleção de elementos do mesmo tipo "ou não", onde cada elemento pode ser identificado por um indice ou uma chave
                  </_.P>
               </Section>

               <Section pv={22}>
                  <_.H5>Pilha</_.H5>
                  <_.Ts>coleção ordenada de itens baseada no princípio L.I.F.O "Last In First Out"</_.Ts>
                  <_.P>

                  </_.P>
               </Section>

               <Section pv={22}>
                  <_.H5>Fila</_.H5>
                  <_.Ts>coleção ordenada de itens baseada no princípio F.I.F.O "First In First Out"</_.Ts>
                  <_.P>

                  </_.P>
               </Section>

               <Section pv={22}>
                  <_.H5>Árvore</_.H5>
                  <_.Ts>coleção não ordenada de itens</_.Ts>
                  <Picture center >
                     <Pix
                        image={ require( "../../../../assets/images/disciplinas/estrutura-de-dados/tree-node.png" ) }
                        w="70%"   
                     />
                  </Picture>
                  <_.P>
                     constituídas por nós, com relacionamento pai e filhos
                  </_.P>
                  <_.T>Nó do topo: raiz</_.T>
                  <_.T>cada nó pode ter 0 ou mais filhos: ramos</_.T>
                  <_.T>nós internos são os que possuem filhos: B, E, F, D, G</_.T>
                  <_.T>nós externos "folhas" não possuem filhos: I, J, K, C, L, H</_.T>
                  <_.T>nós </_.T>

                  <Section pv={16}>
                     <_.H4>Árvore binária</_.H4>
                     <Text>insere seus nós sem nenhuma regra definida</Text>
                  </Section>

                  <Section pv={16}>
                     <_.H4>Árvore binária de busca</_.H4>
                     <Text>inicia a operação inserindo a raiz e o primeiro nó filho</Text>
                     <Text>a partir do segundo nó, é feita a verificação: </Text>
                     <Text>o valor é maior do que o valor da raiz ? ( é adicionado à direita ) : ( é adicionado à esquerda )</Text>
                     <Text>os valores da subarvore da esquerda terão sempre valores menores do que os nós da direita</Text>
                  </Section>

                  <Code 
                     title="Arvore binária"
                     script={ `
class Arvore {
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
                  />
                  <Picture center>
                     <Pix 
                        image={ require( "../../../../assets/images/disciplinas/estrutura-de-dados/novaArvore.png" ) }
                        w="70%"
                     />
                  </Picture>

               </Section>

               <Section pv={24}>
                  <Text>ponteiros são declarados pelo símbolo “*” entre o tipo e o nome da variável.</Text>
                  <Code title="ponteiros"
                     script=
                        { `int *p;` }
                  />
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
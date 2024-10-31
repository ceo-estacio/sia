

/** == [ @imports ] 
 * == == == == == == == == == */ 
import React, { useState, useEffect } from "react"; 
import { 
   StyleSheet, 
   Image,
   ScrollView, 
} from "react-native";
import X, { Code, Header, HomePage, Page, Picture, Pix, Section, 
   View, 
   Text,
} from "@/widgets/elements";



/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosHeterogêneasView( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header bg="#00559c" h={91} ph={18} pv={18} center>
               <Text style={{ color: "#eee" }}>Estrutura de dados</Text>
            </Header>

            <Section pv={24} bg="#e5e5e5" gap={18}>
               <Text style={{ paddingHorizontal: 24 }}>Tema 2</Text>

               <Section gap={18} bg="#f5f5f5">
                  <Header bg="#f5f5f5" ph={24} center>
                     <Text h={4} style={{ color: "#0075bd" }}>Empregar ponteiros com a utilização da linguagem de programação C</Text>
                  </Header>

                  <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>
                     <Text>ponteiro é um apontador para um endereço de memória</Text>
                     <Text>também apontam para o primeiro de arrays e strings</Text>
                     
                     <Picture center>
                        <Pix 
                           image={ require( "@/assets/images/disciplinas/estrutura-de-dados/ponteiro para ponteiro.jpg" ) }
                        />
                     </Picture>

                     <Section>
                        <Text h={4}>alocação dinamica com dois vetores: um com malloc e um com calloc</Text>
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

                     <Section style={{  }} pv={0}>
                        <Picture bg="#1b1d22" style={{ paddingVertical: 16, borderRadius: 22, overflow: "hidden" }}>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/malloc.png" ) }
                              // mode="stretch"
                           />
                        </Picture>
                     </Section>

                     <Section>
                        <Text h={4}>Ponteiro para ponteiro</Text>
                        <Code 
                           title="Indireção múltipla"
                           script={`
int ** pt2;   /* ponteiro para ponteiro do tipo inteiro */
int * pt1;    /* ponteiro para o tipo inteiro */
int x = 10;

pt2 = &pt1;
pt1 = &x;

*pt1 = 30;
**pt2 = 50
                              `}
                        />
                     </Section>
                  </Section>
               </Section>


{/* --------------------------------------------------- */}
{/*                         <2>                         */}
{/* --------------------------------------------------- */}

               <Section gap={18} bg="#f5f5f5">
                  <Header bg="#f5f5f5" ph={24} center>
                     <Text h={4} style={{ color: "#0075bd" }}>Definir estrutura de dados heterogênea</Text>
                  </Header>

                  <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <Text h={4}>Estrutura de dados</Text>
                        </Header>
                        <Text>São formas de distribuir e relacionar os dados</Text>
                        <Text>São distribuidos em 2 tipos: </Text>
                        <Text h={5}>dado </Text>
                        <Text>elemento usado para solucionar problemas</Text>
                        <Text>
                           possuem tipos especificos: inteiro, real, lógicos, texto
                        </Text>

                        <Text h={5}>estrutura </Text>
                        <Text>Elemento estrutural, responsável por carregar as informações</Text>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Tipos de estrutura de dados</Text>
                        </Header>
                        <Text h={6}>Tipos de estruturas</Text>
                        <Text h={6} style={{ color: "#0af" }}>vetor</Text>
                        <Section>
                           <Text>Unidimencionais / bidimencionais</Text>
                        </Section>
                        <Text h={6} style={{ color: "#0af" }}>lista</Text>
                        <Text h={6} style={{ color: "#0af" }}>pilha</Text>
                        <Text h={6} style={{ color: "#0af" }}>fila</Text>
                        <Text h={6} style={{ color: "#0af" }}>arvore</Text>
                        <Text h={6} style={{ color: "#0af" }}>registro</Text>
                        <Section>
                           <Text>heterogenea</Text>
                        </Section>
                        <Text h={6} style={{ color: "#0af" }}>...</Text>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Estruturas de dados homogêneas x heterogêneas</Text>
                        </Header>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Verificando o aprendizado</Text>
                        </Header>
                     </Section>

                  </Section>
               </Section>


{/* --------------------------------------------------- */}
{/*                         <3>                         */}
{/* --------------------------------------------------- */}

               <Section gap={18} bg="#f5f5f5" >
                  <Header bg="#f5f5f5" ph={24} center>
                     <Text h={4} style={{ color: "#0075bd" }}>Aplicar structs com a utilização da linguagem de programação C</Text>
                  </Header>

                     <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <Text h={4}>Definição de struct em C</Text>
                        </Header>
                        <Text>Struct : Registro</Text>

                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Declaração de struct em C</Text>
                        </Header>
                        <Text>Tipos de declaração struct</Text>
                        <Code title="tipo 1" script={`struct nome {\n   int item;\n}\n\nstruct nome v_nome;`}/>
                        <Code title="tipo 2" script={`struct nome {\n   int item;\n} v_nome1, v_nome2, v_nome3;`}/>
                        <Code title="tipo 3" script={`struct {\n   int item;\n} v_nome;`}/>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Inicializando struct em C</Text>
                        </Header>
                        <Code title="tipo 2" script={`struct endereco x = { "Av. das Américas", "4200", " 22640-102 ", "Barra da Tijuca" };`}/>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Acessando os membros da struct em C</Text>
                        </Header>
                        <Text></Text>
                        <Code title="acesso por struct sendo referenciada por var" script={`printf("%s", x.rua);`}/>
                        <Text></Text>
                        <Code title="acesso por struct sendo referenciada por ponieiro" script={`printf("%s", x->rua);`}/>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Manipulando structs</Text>
                        </Header>
                     </Section>

                     <Section>
                        <Header>
                           <Text h={4}>Verificando o aprendizado</Text>
                        </Header>
                     </Section>

                  </Section>
               </Section>


{/* --------------------------------------------------- */}
{/*                         <4>                         */}
{/* --------------------------------------------------- */}

               <Section gap={18} bg="#f5f5f5" >
                  <Header bg="#f5f5f5" ph={24} center>
                     <Text h={4} style={{ color: "#0075bd" }}>Empregar as estruturas de dados aninhadas, os vetores de estruturas e a instrução typedef usando a linguagem de programação C</Text>
                  </Header>

                  <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <Text h={4}>struct aninhada</Text>
                        </Header>
                        
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>manipulação de struct aninhadas</Text>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>mão na massa</Text>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>array de struct</Text>
                        </Header>
                        <Text h={5}>criando um modelo</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-1.png" ) }
                           />
                        </Picture>
                        <Text h={5}>criando um vetor de 10 posições</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-2.png" ) }
                           />
                        </Picture>
                        <Text h={5}>Inicializando o array de struct</Text>
                        <Text>Para inicializar um array de struct, devemos atribuir aos seus membros os valores padrão (default) de cada tipo de dado</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-3.png" ) }
                           />
                        </Picture>
                        <Text h={5}>Populando o array de struct</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-4.png" ) }
                           />
                        </Picture>
                        <Text h={5}>Buscando um elemento no array de struct</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-5.png" ) }
                           />
                        </Picture>
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>buscando um elemento no array de struct</Text>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>mão na massa</Text>
                        </Header>
                        <Text h={6}>Considere que você está desenvolvendo um novo software para catalogar os jogadores de futebol. Você modelou o seu programa utilizando as structs apresentadas abaixo.</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/jogador.png" ) }
                           />
                        </Picture>
                     </Section>


                     <Section>
                        <Header>
                           <Text h={4}>Verificando o aprendizado</Text>
                        </Header>
                     </Section>

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
                  <Text>tipos</Text>
               </Header>

               <Section pv={22}>
                  <Text h={5}>Array</Text>
                  <Text>Vetor: estruturas unidimensionais</Text>
                  <Text>Matriz: estruturas multidimensionais</Text>
                  <Text>
                     armazenar uma coleção de elementos do mesmo tipo "ou não", onde cada elemento pode ser identificado por um indice ou uma chave
                  </Text>
               </Section>

               <Section pv={22}>
                  <Text h={5}>Pilha</Text>
                  <Text>coleção ordenada de itens baseada no princípio L.I.F.O "Last In First Out"</Text>
                  <Text>

                  </Text>
               </Section>

               <Section pv={22}>
                  <Text h={5}>Fila</Text>
                  <Text>coleção ordenada de itens baseada no princípio F.I.F.O "First In First Out"</Text>
                  <Text>

                  </Text>
               </Section>

               <Section pv={22}>
                  <Text h={5}>Árvore</Text>
                  <Text>coleção não ordenada de itens</Text>
                  <Picture center >
                     <Pix
                        image={ require( "../../../../../assets/images/disciplinas/estrutura-de-dados/tree-node.png" ) }
                        w="70%"   
                     />
                  </Picture>
                  <Text>
                     constituídas por nós, com relacionamento pai e filhos
                  </Text>
                  <X.T>Nó do topo: raiz</X.T>
                  <X.T>cada nó pode ter 0 ou mais filhos: ramos</X.T>
                  <X.T>nós internos são os que possuem filhos: B, E, F, D, G</X.T>
                  <X.T>nós externos "folhas" não possuem filhos: I, J, K, C, L, H</X.T>
                  <X.T>nós </X.T>

                  <Section pv={16}>
                     <Text h={4}>Árvore binária</Text>
                     <Text>insere seus nós sem nenhuma regra definida</Text>
                  </Section>

                  <Section pv={16}>
                     <Text h={4}>Árvore binária de busca</Text>
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
                        image={ require( "../../../../../assets/images/disciplinas/estrutura-de-dados/novaArvore.png" ) }
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
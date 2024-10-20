

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
import X, { Code, Header, HomePage, Page, Picture, Pix, Section } from "@/widgets/elements";



/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosHeterogêneasView( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header bg="#00559c" h={91} ph={18} pv={18} center>
               <X.H1 style={{ color: "#eee" }}>Estrutura de dados</X.H1>
            </Header>

            <Section pv={24} bg="#e5e5e5" gap={18}>
               <X.H2 style={{ paddingHorizontal: 24 }}>Tema 2</X.H2>

               <Section gap={18} bg="#f5f5f5">
                  <Header bg="#f5f5f5" ph={24} center>
                     <X.H4 style={{ color: "#0075bd" }}>Empregar ponteiros com a utilização da linguagem de programação C</X.H4>
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
                        <X.H4>alocação dinamica com dois vetores: um com malloc e um com calloc</X.H4>
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
                        <X.H4>Ponteiro para ponteiro</X.H4>
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
                     <X.H4 style={{ color: "#0075bd" }}>Definir estrutura de dados heterogênea</X.H4>
                  </Header>

                  <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <X.H4>Estrutura de dados</X.H4>
                        </Header>
                        <Text>São formas de distribuir e relacionar os dados</Text>
                        <Text>São distribuidos em 2 tipos: </Text>
                        <X.H5>dado </X.H5>
                        <Text>elemento usado para solucionar problemas</Text>
                        <Text>
                           possuem tipos especificos: inteiro, real, lógicos, texto
                        </Text>

                        <X.H5>estrutura </X.H5>
                        <Text>Elemento estrutural, responsável por carregar as informações</Text>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Tipos de estrutura de dados</X.H4>
                        </Header>
                        <X.H6>Tipos de estruturas</X.H6>
                        <X.H6 style={{ color: "#0af" }}>vetor</X.H6>
                        <Section>
                           <Text>Unidimencionais / bidimencionais</Text>
                        </Section>
                        <X.H6 style={{ color: "#0af" }}>lista</X.H6>
                        <X.H6 style={{ color: "#0af" }}>pilha</X.H6>
                        <X.H6 style={{ color: "#0af" }}>fila</X.H6>
                        <X.H6 style={{ color: "#0af" }}>arvore</X.H6>
                        <X.H6 style={{ color: "#0af" }}>registro</X.H6>
                        <Section>
                           <Text>heterogenea</Text>
                        </Section>
                        <X.H6 style={{ color: "#0af" }}>...</X.H6>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Estruturas de dados homogêneas x heterogêneas</X.H4>
                        </Header>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Verificando o aprendizado</X.H4>
                        </Header>
                     </Section>

                  </Section>
               </Section>


{/* --------------------------------------------------- */}
{/*                         <3>                         */}
{/* --------------------------------------------------- */}

               <Section gap={18} bg="#f5f5f5" >
                  <Header bg="#f5f5f5" ph={24} center>
                     <X.H4 style={{ color: "#0075bd" }}>Aplicar structs com a utilização da linguagem de programação C</X.H4>
                  </Header>

                     <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <X.H4>Definição de struct em C</X.H4>
                        </Header>
                        <Text>Struct : Registro</Text>

                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Declaração de struct em C</X.H4>
                        </Header>
                        <Text>Tipos de declaração struct</Text>
                        <Code title="tipo 1" script={`struct nome {\n   int item;\n}\n\nstruct nome v_nome;`}/>
                        <Code title="tipo 2" script={`struct nome {\n   int item;\n} v_nome1, v_nome2, v_nome3;`}/>
                        <Code title="tipo 3" script={`struct {\n   int item;\n} v_nome;`}/>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Inicializando struct em C</X.H4>
                        </Header>
                        <Code title="tipo 2" script={`struct endereco x = { "Av. das Américas", "4200", " 22640-102 ", "Barra da Tijuca" };`}/>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Acessando os membros da struct em C</X.H4>
                        </Header>
                        <Text></Text>
                        <Code title="acesso por struct sendo referenciada por var" script={`printf("%s", x.rua);`}/>
                        <Text></Text>
                        <Code title="acesso por struct sendo referenciada por ponieiro" script={`printf("%s", x->rua);`}/>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Manipulando structs</X.H4>
                        </Header>
                     </Section>

                     <Section>
                        <Header>
                           <X.H4>Verificando o aprendizado</X.H4>
                        </Header>
                     </Section>

                  </Section>
               </Section>


{/* --------------------------------------------------- */}
{/*                         <4>                         */}
{/* --------------------------------------------------- */}

               <Section gap={18} bg="#f5f5f5" >
                  <Header bg="#f5f5f5" ph={24} center>
                     <X.H4 style={{ color: "#0075bd" }}>Empregar as estruturas de dados aninhadas, os vetores de estruturas e a instrução typedef usando a linguagem de programação C</X.H4>
                  </Header>

                  <Section pd={24} gap={16} bg="#e5e5e5" style={{ borderTopStartRadius: 24, borderTopEndRadius: 24, }}>

                     <Section>
                        <Header>
                           <X.H4>struct aninhada</X.H4>
                        </Header>
                        
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>manipulação de struct aninhadas</X.H4>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>mão na massa</X.H4>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>array de struct</X.H4>
                        </Header>
                        <X.H5>criando um modelo</X.H5>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-1.png" ) }
                           />
                        </Picture>
                        <X.H5>criando um vetor de 10 posições</X.H5>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-2.png" ) }
                           />
                        </Picture>
                        <X.H5>Inicializando o array de struct</X.H5>
                        <Text>Para inicializar um array de struct, devemos atribuir aos seus membros os valores padrão (default) de cada tipo de dado</Text>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-3.png" ) }
                           />
                        </Picture>
                        <X.H5>Populando o array de struct</X.H5>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-4.png" ) }
                           />
                        </Picture>
                        <X.H5>Buscando um elemento no array de struct</X.H5>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/arrayDeStruct-5.png" ) }
                           />
                        </Picture>
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>buscando um elemento no array de struct</X.H4>
                        </Header>
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>mão na massa</X.H4>
                        </Header>
                        <X.H6>Considere que você está desenvolvendo um novo software para catalogar os jogadores de futebol. Você modelou o seu programa utilizando as structs apresentadas abaixo.</X.H6>
                        <Picture>
                           <Pix 
                              image={ require( "@/assets/images/disciplinas/estrutura-de-dados/jogador.png" ) }
                           />
                        </Picture>
                     </Section>


                     <Section>
                        <Header>
                           <X.H4>Verificando o aprendizado</X.H4>
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
                  <X.H3>tipos</X.H3>
               </Header>

               <Section pv={22}>
                  <X.H5>Array</X.H5>
                  <X.Ts>Vetor: estruturas unidimensionais</X.Ts>
                  <X.Ts>Matriz: estruturas multidimensionais</X.Ts>
                  <X.P>
                     armazenar uma coleção de elementos do mesmo tipo "ou não", onde cada elemento pode ser identificado por um indice ou uma chave
                  </X.P>
               </Section>

               <Section pv={22}>
                  <X.H5>Pilha</X.H5>
                  <X.Ts>coleção ordenada de itens baseada no princípio L.I.F.O "Last In First Out"</X.Ts>
                  <X.P>

                  </X.P>
               </Section>

               <Section pv={22}>
                  <X.H5>Fila</X.H5>
                  <X.Ts>coleção ordenada de itens baseada no princípio F.I.F.O "First In First Out"</X.Ts>
                  <X.P>

                  </X.P>
               </Section>

               <Section pv={22}>
                  <X.H5>Árvore</X.H5>
                  <X.Ts>coleção não ordenada de itens</X.Ts>
                  <Picture center >
                     <Pix
                        image={ require( "../../../../../assets/images/disciplinas/estrutura-de-dados/tree-node.png" ) }
                        w="70%"   
                     />
                  </Picture>
                  <X.P>
                     constituídas por nós, com relacionamento pai e filhos
                  </X.P>
                  <X.T>Nó do topo: raiz</X.T>
                  <X.T>cada nó pode ter 0 ou mais filhos: ramos</X.T>
                  <X.T>nós internos são os que possuem filhos: B, E, F, D, G</X.T>
                  <X.T>nós externos "folhas" não possuem filhos: I, J, K, C, L, H</X.T>
                  <X.T>nós </X.T>

                  <Section pv={16}>
                     <X.H4>Árvore binária</X.H4>
                     <Text>insere seus nós sem nenhuma regra definida</Text>
                  </Section>

                  <Section pv={16}>
                     <X.H4>Árvore binária de busca</X.H4>
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
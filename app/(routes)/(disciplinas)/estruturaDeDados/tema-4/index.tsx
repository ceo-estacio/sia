

/** == [ @imports ] 
 * == == == == == == == == == */
import X, { T, Header, HomePage, Section, Code, Pix,
   View,
   Text,
} from "@/widgets/elements";
import { transform } from "@babel/core";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   FlatList,
   Image, 
   Dimensions,
   ImageBackground,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
function ModuloView( { ...props }: { n?: number; children: any; hbg?: string; bg?: string; } ) {
   return( <>
      <Section bg={ props.bg }>
         { props.n &&
            <Header ph={18} pv={18} bg={ props.hbg }>
               <Text h={6} style={{ color: "#0af" }}>Módulo { props.n }</Text>
            </Header>
         }
         { props.children }
         {/* <Section pd={18}>

            <Section gap={16} pv={16}>
               <Text h={5}></Text>
            </Section>

         </Section> */}
      </Section>
   </> );
}

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema4View( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header center ph={24} pv={24} bg="#00559c">
               <Text h={3} style={{ color: "#0ef" }}>Listas, Pilhas, Filas e Deques</Text>
            </Header>

            <Section>

               <Section bg="#e5e5e5">
                  <Header ph={18} pv={18}>
                     <Text h={6}>Módulo 1</Text>
                  </Header>
                  <Section pd={18} bg="#fafafa">

                     <Section gap={16} pv={16} style={{ borderBottomWidth: 30, borderColor: "#0001" }}>
                        <Text h={5}>Entendendo a alocação sequencial</Text>
                        <Text>
                           <Text h={6}>listas lineares alocadas sequencialmente  </Text>
                           São eficientes no acesso ao elemento da lista.
                        </Text>
                        <Text>
                           <T.T>os elementos do vetor podem ser acessados diretamente pelo seu indice </T.T>
                           <T.Small> o indice corresponde ao offset "deslocamento a ser feito a partir do endereço do elemento anterior"</T.Small>
                        </Text>
                        <Text h={6}>Vantagens </Text>
                        <Text>facilidade no acesso dos elementos</Text>
                        <Text h={6}>Desvantagens</Text>
                        <Text>operações como remoção são prejudicadas por não ser possivel desalocar o espaço sem perder a sequencialidade das posições</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Conceitos e operações em listas lineares genéricas</Text>
                        <Section>
                           <Text h={6}>Busca</Text>
                           <Code script={`int buscar( chave ) {
    if( n > 0 ) {
       for( i = 1; i <= n; i++ ) {
          if( Lista[ i ].chave == chave ) {
             return i;
          }
       }
    }
    return( n + 1 );\n}`}/>
                        </Section>

                        <Section>
                           <Text h={6}>Inserir  </Text>
                           <Code script={`int inserir( novo_elemento ) {
    if( busca( novo_elemento.chave ) == n + 1 ) {
       Lista[ n + 1 ] == novo_elemento;
       n = n + 1;
       return 1;
    } else {
 	    return -1;
    }
}`}/>
                        </Section>

                        <Section>
                           <Text h={6}>Remover  </Text>
                           <Code script={`int remover( chave ) {
    if( n > 0 ) {
       int i = busca( chave );
       if( i < n + 1 ) {
          for( a = i;a < n; a++ ) {
             Lista[ i ] = Lista[ i + 1 ];
             n = n -1;
          }
       } else {
         retornar -1
       }
    } else {
      return( "Erro: lista vazia" );
}`}/>
                        </Section>

                        <Section>
                           <Text h={6}>alocação dinamica</Text>
                           <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/alocaçãoDinamica-malloc.png" ) }/>
                        </Section>

                        <Section>
                           <Text h={6}>BuscaBinaria</Text>
                           <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/BuscaBinaria.png" ) }/>
                        </Section>

                        <Section>
                           <Text h={6}>Deque</Text>
                           <Code title="Deque"
                              script={`
v = [ a, b, r, t, c, p ]
      0  1  2  3  4  5
aux_l = 0;
aux_r = 5;
// remove a => aux_l = aux_l + 1;
// remove p => aux_r = aux_r - 1;

// testar se a v está vazio => aux_l > aux_r;
// inserir à esquerda, verificar se aux_l é 0 => aux_l == 0;
// inserir à direita, verificar se aux_r == ultimo indice do vetor =>`}
                           />
                        </Section>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Mão na Massa</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Verificando o aprendizado</Text>
                     </Section>

                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <Text h={6}>Módulo 2</Text>
                  </Header>
                  <Section pd={18}>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Listas lineares dinamicamente encadeadas</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Teoria na prática</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Entendendo a alocação encadeada</Text>
                        <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/lista-encadeada.jpg" ) }/>
                        <Text h={6}>lista duplamente encadeada</Text>
                        <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/lista-duplamente-encadeada.jpg" ) }/>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Listas encadeadas</Text>

                        <Text>precisa de um ponteiro ref para guardar o endereço da HEAD</Text>
                        <Text>precisa de um ponteiro ref para guardar o endereço da TAIL</Text>
                        <Text>cada elemento precisa de um ponteiro NEXT para guardar a ref do elemento seguinte, e um ponteiro para a HEAD</Text>
                        <Text>quando a lista for vazia, NEXT será == null </Text>
                        <Text>testar se a lista está vazia, testar se NEXT da HEAD == null </Text>
                        <Text>inserir um elemento, alocar em memoria e fazer o NEXT apontar para ele</Text>

                        <Text h={6}>Nó de lista simples encadeada</Text>
                        <Code title=" Definição genérica de um nó de uma lista simplesmente encadeada." 
                           script={`struct Node {\n\t<type> name;\n\t<type> name;\n\t...\n\t<type> nameN;\n\tNode *NEXT;\n};`}
                        />

                        <Text h={6}>Busca em lista encadeada ordenada</Text>
                        <Code 
                           script={``}
                        />
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Verificando o aprendizado</Text>
                     </Section>

                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <Text h={6}>Módulo 3</Text>
                  </Header>
                  <Section pd={18}>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Tipo de lista: Pilha</Text>
                        <Pix h={ 1110 } image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/pilha.png" ) }/>
                        {
                           [
                              "verificar se esta vazia antes de inserir ou remover itens",
                              "d"
                           ].map( ( item, i ) => <>
                              <View style={{ padding: 8 }}>
                                 <Text key={ i } style={{ alignItems: "center", justifyContent: "center",}}>
                                    <Text h={6} style={{ fontSize: 18, color: "#fc0" }}>{ i + 1 }-  </Text>
                                    { item }
                                 </Text>
                              </View>
                           </> )
                        }
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Teoria na prática</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Pilhas em alocação sequencial</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Pilhas em alocação dinâmica</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Pilhas e expressões aritméticas binárias</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Teoria na prática</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Mão na Massa</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Verificando o aprendizado</Text>

                        <Text h={6}>vantagem de se implementar pilhas em alocação encadeada</Text>
                        <Text>Evita o desperdício de memória.</Text>
                     </Section>

                  </Section>
               </Section>

               <ModuloView n={4} >
                  <Section pd={18}>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Tipo de lista: Fila ( queue )</Text>
                        <Text h={6}>caracteristicas</Text>
                        {
                           [
                              {
                                 "0": "lista vazia será caracterizada por ",
                                 "1": " inicio = fim = NULL."
                              },
                              {
                                 "0": "quando o primeiro elemento for inserido numa fila vazia",
                                 "1": "(“inicio” e “fim”) apontarão para o mesmo endereço de memória."
                              },
                              {
                                 "0": "Se novas inserções ocorrerem",
                                 "1": "“inicio” manter-se-á apontando para o primeiro elemento inserido",
                              },
                              {
                                 "0": "A remoção",
                                 "1": "provocará a desalocação do nó apontado por “inicio”, forçando com que a variável passe a apontar para o nó seguinte.",
                              },
                              {
                                 "0": "A remoção do único elemento na fila",
                                 "1": "novamente inicio = fim = NULL.",
                              },
                              {
                                 "0": "",
                                 "1": "",
                              },
                              {
                                 "0": "",
                                 "1": "",
                              },
                           ].map( ( item, i ) => <>
                              <View 
                                 style={
                                    [ i % 2 == 0 ? { backgroundColor: "#c5c5c5" } : { backgroundColor: "#e5e5e5" },
                                    {
                                       padding: 8, borderRadius: 13
                                    }
                                 ]} 
                                 key={ `id-${ i }` }
                              >
                                 <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "bold" }}>#  </Text>
                                    <Text style={{  }}>{ item[0] }</Text>
                                 </View>
                                 <View style={{ paddingLeft: 24 }}>
                                    <Text>{ item[1] }</Text>
                                 </View>
                              </View>
                           </> )
                        }
                        <Text>inserção no final</Text>
                        <Text>remoção no começo</Text>
                        <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-4/fila.jpg" ) }/>
                        
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Filas em alocação sequencial</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Teoria na prática</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Filas em alocação dinâmica</Text>
                     </Section>

                     <Section gap={16} pv={16}>
                        <Text h={5}>Verificando o aprendizado</Text>
                     </Section>
                  </Section>
               </ModuloView>
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
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;

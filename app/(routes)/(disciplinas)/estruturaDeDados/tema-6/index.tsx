

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import YouTubePlayer from "@/widgets/céo/YoyTubePlayer";
import { 
   HomePage, 
   Header, 
   Section,
   Content, 
   View,
   Text,
   // Br,
   Pix,
   OL,
   Collapsible, 
} from "@/widgets/elements";
import { transform } from "@babel/core";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   Pressable,
   Dimensions, 
} from "react-native";
import Animated, { 
   useSharedValue, 
   withSpring 
} from "react-native-reanimated";
import YoutubePlayer from "react-native-youtube-iframe";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Tema6View( { ...props } ) {
   const 
      w = useSharedValue( 200 )
   ;

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center bg={"#00559c"}>
                  <Section>
                     <Content position="relative" top={0}>
                        <Text h={3}>Árvores</Text>
                     </Content>
                  </Section>   
               </Header>
               <Section darkColor={ Palette.dark.bg_lv1 }>
                  <Header pv={24} ph={24}>
                     <Text h={6}>Módulo 1</Text>
                  </Header>
                  <Content gap={16}>
                     <Text>Árvores</Text>
                     <Collapsible title="Conceito">
                        <Text>um conjunto finito de elementos que obedecem duas regras</Text>
                     </Collapsible>
                     <Collapsible title="Regras">
                        <Text>se existe pelo menos um elemento, a árvore é considerada "NÃO VAZIA" e esse elemento é chamado de "NÓ RAIZ".</Text>
                     </Collapsible>
                  </Content>
                  <Content>
                     <Text h={5}>Especificações</Text>
                     <Pix h={ Dimensions.get( "window" ).width * .5 } image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/arvores-niveis.jpg" ) }/>
                     <Pix h={ Dimensions.get( "window" ).width * .5 } image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-6/arvores-niveis-2.png" ) }/>
                  </Content>

                  <Content pd={24} gap={24}>
                     <Text h={5} darkColor="#00559c">Propriedades básicas</Text>

                     <Text h={5}>Algumas propriedades básicas de uma árvore como estrutura de dados são: </Text>

                  </Content>

                  <Content gap={16}>
                     <Collapsible
                        title="Node"
                     >
                        <Text >Uma árvore é constituída por um conjunto de elementos, chamados nós, que armazenam informações. </Text>
                     </Collapsible>

                     <Collapsible
                        title="Raiz"
                     >
                        <Text >O elemento mais alto da árvore é a raiz, que possui ligações para outros elementos, chamados filhos ou ramos. </Text>
                     </Collapsible>

                     <Collapsible
                        title="Aresta"
                     >
                        <Text >A ligação entre dois nós é a aresta.</Text>
                     </Collapsible>

                     <Collapsible
                        title="Folha"
                     >
                        <Text >Um nó que não tem filhos na árvore é uma folha. </Text>
                     </Collapsible>

                     <Collapsible
                        title="ALtura"
                     >
                        <Text >O tamanho do caminho mais longo até uma folha é a altura.</Text>
                     </Collapsible>

                     <Collapsible
                        title="Profundidade"
                     >
                        <Text >O tamanho do caminho percorrido do nó até a raiz é a profundidade. </Text>
                     </Collapsible>
                  </Content>

                  <Content pd={24} gap={16}>
                     <Text>As árvores são uma estrutura de dados versátil e poderosa, com diversas aplicações em ciência da computação. Por exemplo, em sistemas de arquivos, as árvores representam a estrutura hierárquica de diretórios e arquivos, permitindo uma rápida navegação e acesso aos dados.</Text>
                     <Text>Um tipo de árvore binária é a Árvore Binária de Pesquisa (BST), que é uma estrutura de dados baseada em nós. A BST é aplicada para resolver problemas que exigem eficiência em operações como busca, inserção e remoção. </Text>
                  </Content>

                  <Content pd={24} gap={24}>
                     <Text h={5} darkColor="#00559c">Representação computacional de árvores</Text>
                     <Text>A representação computacional de árvores como estruturas de dados pode ser feita de duas formas principais:</Text>
                  </Content>
                  
                  <Content pd={24} gap={16}>
                     <Collapsible title="Diagrama">
                        <Text >Os nós e suas conexões são desenhados graficamente.</Text>
                     </Collapsible>

                     <Collapsible title="Estrutura de dados">
                        <Text >Cada nó é armazenado em uma estrutura que contém referências para seus filhos. </Text>
                     </Collapsible>
                     
                  </Content>
                  
                  <Content pd={24} gap={16}>
                     <Text >Árvores são estruturas de dados complexas que representam dados de forma hierárquica. Elas são formadas por um conjunto de nós, que são entidades que armazenam dados e estão conectadas por arestas. O primeiro nó da árvore é a raiz, que pode ter ou não outros nós conectados. Os nós que estão conectados à raiz são chamados de ramos ou filhos. Os últimos nós da árvore são as folhas, que não têm filhos. </Text>
                     <Text >As árvores são essenciais para organizar dados hierarquicamente e otimizar operações de busca. Algumas aplicações práticas das árvores são: Índices de bancos de dados, Algoritmos de decisão em aprendizado de máquina. </Text>
                     <Text >Existem vários tipos de árvores, como árvores binárias, árvores binárias de busca, árvores balanceadas, entre outras. </Text>
                  </Content>
                  
                  <Content gap={16}>
                     <Text>O maior nível de uma árvore é numericamente igual à sua altura.</Text>
                     <Text>O isomorfismo entre duas árvores diz respeito à possibilidade de elas serem tornadas coincidentes pela permutação de suas subárvores. Permutar as subárvores apenas alterna suas posições relativas, mas não permite alterar a altura de uma árvore. Isto pode ser provado por contradição. Suponha que a permutação tenha alterado a altura da árvore para torná-la coincidente com a outra. Neste caso, se a altura mudou, obrigatoriamente algum nó mudou de nível, pois não há inserção ou remoção de nó. Então, para que ambas as árvores sejam coincidentes, fez-se necessário permutar as subárvores e mudar o nível de algum nó, o que contraria a definição de isomorfismo.</Text>
                  </Content>
               </Section>

               <Section darkColor={ Palette.dark.bg_lv2 }>
                  <Header ph={24} pv={24}>
                     <Text h={6} darkColor="#daa520" lightColor="#daa520">
                        Módulo 2
                     </Text>
                  </Header>
                  <Content>
                     
                  </Content>
               </Section>

               <Section darkColor={ Palette.dark.bg_lv1 }>
                  <Header ph={24} pv={24}>
                     <Text h={6} darkColor="#daa520" lightColor="#daa520">
                        Módulo 3
                     </Text>
                  </Header>

                  <Content gap={16}>
                     <Header>
                        <Text darkColor="#00559c" lightColor="#00559c" h={5}>Conceitos e propriedades relativos às árvores binárias</Text>
                     </Header>
                     <Text type="subtitle">Uma árvore binária é uma estrutura de dados fundamental na Ciência da Computação, que pode ser caracterizada por alguns conceitos e propriedades, como: </Text>
                     
                     <Collapsible title="Nós">
                        <Text>Uma árvore é composta por um conjunto de elementos, chamados nós, que são conectados por arestas. Cada nó contém um valor ou dados, e pode ou não ter um nó filho. </Text>
                     </Collapsible>

                     <Collapsible title="Raiz">
                        <Text>O primeiro nó da árvore é chamado de raiz.</Text>
                     </Collapsible>
                     
                     <Collapsible title="Subárvores">
                        <Text>A raiz tem dois ponteiros para duas estruturas diferentes, chamadas subárvore esquerda e subárvore direita. </Text>
                     </Collapsible>
                     
                     <Collapsible title="Balanceamento">
                        <Text>Uma árvore binária é balanceada quando as subárvores esquerda e direita de cada nó têm aproximadamente a mesma altura. </Text>
                     </Collapsible>
                     
                     <Collapsible title="Altura">
                        <Text>A altura de uma árvore binária é o tamanho do caminho mais longo da raiz até uma folha. </Text>
                     </Collapsible>
                     
                     <Collapsible title="Profundidade">
                        <Text>A profundidade de um nó é o tamanho do caminho percorrido do nó até a raiz. </Text>
                     </Collapsible>
                     
                     <Collapsible title="Nível">
                        <Text>O nível de um nó é a distância desse nó até o nó raiz. </Text>
                     </Collapsible>
                     <Text>
                        As árvores binárias de pesquisa (BST) são um tipo de árvore binária que se baseia em nós, onde os valores numéricos da subárvore esquerda são inferiores ao nó e os valores da subárvore direita são superiores ao nó. 
                     </Text>
                     <Text>
                        As árvores são uma estrutura de dados versátil e poderosa, com aplicações em ciência da computação, como representação de dados hierárquicos e implementação de algoritmos de busca e ordenação. 
                     </Text>
                  </Content>

                  <Content gap={16}>
                     <Header>
                        <Text darkColor="#00559c" lightColor="#00559c" h={5}>Propriedades de árvores binárias</Text>
                     </Header>
                     
                        <Text h={3} darkColor="#833">Estrutura</Text>
                        <Text>Uma árvore binária é uma estrutura de dados que pode estar vazia ou ter um elemento raiz, que possui dois ponteiros para subárvores esquerda e direita. </Text>

                        <Text h={3} darkColor="#833">Balanceamento</Text>
                        <Text>Uma árvore binária é balanceada quando as subárvores esquerda e direita de cada nó têm aproximadamente a mesma altura. </Text>
                     
                        <Text h={3} darkColor="#833">Árvore de busca binária</Text>
                        <Text>Uma árvore binária de busca é uma estrutura de dados que favorece buscas eficientes. Uma propriedade importante desta estrutura é que o valor de um nó é maior que o valor dos descendentes do seu filho da esquerda, mas menor que o valor dos descendentes do seu filho da direita. </Text>
                     
                        <Text h={3} darkColor="#833">Níveis e profundidade</Text>
                        <Text>O nível de um nó é a distância até o nó raiz, e a profundidade é o número de arestas no caminho do nó raiz até o nó. </Text>
                     
                        <Text h={3} darkColor="#833">Altura</Text>
                        <Text>A altura de uma árvore binária é o comprimento do caminho mais longo da raiz até uma folha. </Text>
                     
                     <Text>As árvores binárias são estruturas de dados fundamentais na Ciência da Computação e são aplicadas para resolver problemas que demandam eficiência em operações básicas, como busca, inserção e remoção.</Text>
                  </Content>

                  <Content gap={16}>
                     <Header>
                        <Text darkColor="#00559c" lightColor="#00559c" h={5}>Percurso em árvores binárias</Text>
                     </Header>
                     
                     <Text>Um percurso em uma árvore binária é uma forma de acessar todos os nós da árvore de forma sistemática, geralmente realizando alguma operação.</Text>
                     <Text>Existem vários tipos de percursos em árvores binárias, incluindo: </Text>
                     <Collapsible title="Percurso em-ordem:">
                        <Text> Exclusivo das árvores binárias de busca (BST), este percurso visita primeiro a subárvore esquerda, depois o nó atual e, por fim, a subárvore direita. É ideal para operações de ordenação e para obter uma visão sequencial dos elementos da árvore. </Text>
                     </Collapsible>
                     <Collapsible title="Percurso em profundidade:">
                        <Text>Neste percurso, os nós da sub-árvore atual têm prioridade na ordem de acesso. </Text>
                     </Collapsible>
                     <Collapsible title="Percurso em Pré-Ordem: ">
                        <Text>Este percurso é constituído por visitar nós especiais e subárvores. </Text>
                     </Collapsible>
                     <Text>A maioria dos percursos em árvores binárias são recursivos, pois cada percurso é composto por visitar nós especiais e subárvores. </Text>
                     <Text>Uma árvore binária é uma estrutura de dados que organiza os dados de forma hierárquica, onde cada nó tem no máximo dois filhos: um à esquerda e outro à direita. </Text>
                  </Content>

                  <Content gap={16}>
                     <Header>
                        <Text darkColor="#00559c" lightColor="#00559c" h={5}>Verificando o aprendizado</Text>
                     </Header>
                     <Text>Cada nível tem condição de acomodar o dobro de nós do nível anterior.</Text>
                     <Text>O percurso em ordem simétrica visita todos os nós da árvore somente uma vez.</Text>
                     <Text>Todas as 3 formas de percorrer uma árvore, pré-ordem, ordem simétrica e pós-ordem visitam todos os nós da árvore binária uma única vez. A diferença dos percursos é a ordem com que os nós são visitados.</Text>
                  </Content>

               </Section>
                  
               <View style={{ flexDirection: "row" }}>
                  <Animated.View
                     style={{
                        width: w,
                        backgroundColor: "#743"
                     }}
                     // here
                     // entering={ w.value = 150 }
                     // exiting={ w.value = 50 }
                  >
                        <Pressable onPress={ () => {
                           w.value = withSpring( 250 );
                        } }>
                           <Text>oi</Text>
                        </Pressable>
                  </Animated.View>
                  <Animated.View
                     style={{
                        width: 150,
                        backgroundColor: "#175"
                     }}
                  >
                     <Text>io</Text>
                  </Animated.View>
               </View>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Tema5View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
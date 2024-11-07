

/** == [ @imports ] 
 * == == == == == == == == == */
import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content,
   PixBG,
   Exercices,
   List,
   Collapsible,
} from "@/widgets/elements";
import React, { useState, useEffect,  } from "react";
import { 
   StyleSheet,
   ScrollView,
   Alert,
   ActivityIndicator,
} from "react-native";
import YouTube from "react-native-youtube-iframe";
import YouTubePlayer from "@/widgets/céo/YouTubePlayer";
import { Palette } from "@/constants/Colors";
import { Stack } from "expo-router";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Modulo2View( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <Stack.Screen 
         options={{ headerTitle:"Ergonomia em IHC: Módulo 2" }}
      />
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } 
                  center
                  title="Descrever os princípios e critérios ergonômicos em IHC"
                  type="subtitle"
                  image={ require( "@/assets/images/ui/banners/banner-020_2.78.jpg" ) }
                  ratio="2.78/1"
               >
               </Header>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Introdução a princípios e critérios ergonômicos</Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Critérios ergonômicos em IHC</Text>
                  </Header>
                  <Section ph={44} gap={18}>
                     <Collapsible title="Condução">
                        <Text>
                           {`O objetivo deste critério é guiar os usuários ainda sem experiência no uso do sistema. 
A interface deve conseguir conduzir o usuário na realização de suas tarefas. 
Deve também dar orientação e guiar como devem ser feitas as interações com o sistema. 
Alguns exemplos de condução para facilitação seriam: 

(i) Fornecer um título para cada campo de entrada de dados; 

(ii) Dar um título a cada nova janela que se abra na aplicação; 

(ii) Criar mecanismo de ajuda online para cada campo de informação e para a interface como um todo; 

(iv) Indicar formato nas entradas de dados; 

(v) Definir um agrupamento adequado dos itens na interface, entre outros. 


A condução deve levar em consideração alguns subcritérios:
                           `}
                        </Text>
                        <List children={<>
                           <Text h={4} darkColor="#757">Convite</Text>
                           <Text>{``}</Text>
                        </>}/>
                     <List children={<>
                           <Text h={4} darkColor="#757">Agrupamento e distinção por localização e por formato</Text>
                           <Text>{``}</Text>
                        </>}/>
                     <List children={<>
                           <Text h={4} darkColor="#757">Legibilidade</Text>
                           <Text>{``}</Text>
                        </>}/>
                     <List children={<>
                           <Text h={4} darkColor="#757">Feedback imediato</Text>
                           <Text>{``}</Text>
                        </>}/>
                     </Collapsible>

                     <Collapsible title="Carga de trabalho">
                        <Text>{`O objetivo deste critério é diminuir ao máximo a carga cognitiva que o usuário precisa para realizar seu trabalho. 
Deve-se reduzir, sempre que possível, a quantidade de informações exibidas. 
Alguns itens a serem observados:`}
                        </Text>
                     </Collapsible>
                     
                     <Collapsible title="Controle explícito">
                        <Text>{`O objetivo deste critério é permitir que o usuário tenha controle sobre a interface do sistema. É subdividido em`}</Text>
                     </Collapsible>
                     
                     <Collapsible title="Adaptabilidade">
                        <Text>{`O objetivo deste critério é garantir a capacidade do sistema de se adaptar ao contexto e às preferências do usuário. Divide-se em`}</Text>
                     </Collapsible>
                     
                     <Collapsible title="Gestão de erros">
                        <Text>{`O objetivo deste critério é prevenir ou reduzir a ocorrência de erros, entendendo como e quando ocorrem. Este critério é subdividido em`}</Text>
                     </Collapsible>
                     
                     <Collapsible title="Consistência/homogeneidade">
                        <Text>{`O objetivo deste critério é padronizar as interfaces de modo que os elementos sejam facilmente reconhecidos, localizados e, principalmente, lembrados.`}</Text>
                     </Collapsible>
                     
                     <Collapsible title="Significados de códigos">
                        <Text>{`O objetivo deste critério é garantir que o vocabulário utilizado em rótulos, títulos, cabeçalhos, mensagens e opções de menus estejam compatíveis com as figuras e ícones utilizados.`}</Text>
                     </Collapsible>
                     
                     <Collapsible title="Compatibilidade">
                        <Text>{`O objetivo deste critério é fazer com que a organização das saídas e entradas de uma aplicação se adequem às características do usuário, como hábitos, idade, competências, expectativas etc.`}</Text>
                     </Collapsible>
                     
                  </Section>
               </View>

{/* == [ section 3 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Critérios de Usabilidade</Text>
                  </Header>
                  <Content>
                     <List>
                        <Text>Facilidade de uso</Text>
                     </List>
                     <List>
                        <Text>eficiência</Text>
                     </List>
                     <List>
                        <Text>facilidade de memorização</Text>
                     </List>
                     <List>
                        <Text>taxa de erros</Text>
                     </List>
                     <List>
                        <Text>satisfação</Text>
                     </List>
                  </Content>
               </View>

{/* == [ section 4 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Requisitos de Usabilidade</Text>
                  </Header>
               </View>

{/* == [ section 5 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Tipos de problemas no uso das interfaces</Text>
                  </Header>
               </View>

{/* == [ section 5 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Avaliação da aplicação dos critérios ergonômicos em uma interface</Text>
                  </Header>
               </View>

{/* == [ exercicios ] */}
                  <View darkColor={ Palette.dark.bg } pv={24}>
                     <Header pd={24}>
                        <Text h={3}>Atividades</Text>
                     </Header>

                     <Section gap={16}>
                        
                        <Exercices id={1}
                           question={<Text></Text>}
                           answer={<Text></Text>}
                        />
                        
                     </Section>
                  </View>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo2View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
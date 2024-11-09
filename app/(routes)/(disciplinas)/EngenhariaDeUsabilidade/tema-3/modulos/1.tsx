

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
export default function Modulo1View( { ...props } ) {
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
                  title=""
                  type="subtitle"
                  // image={ require( "@/assets/images/ui/banners/banner-020_2.78.jpg" ) }
                  ratio="2.78/1"
               >
               </Header>

{/* == [ introdução ] */}
      <Content>
         <Text darkColor="#cf6478">A interface pode definir o sucesso ou o fracasso de um software?</Text>
      </Content>
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Características do projeto de design IHC</Text>
                     <Text darkColor="#cf6478"></Text>
                  </Header>
                  <Content>
                     <Text type="subtitle">O projeto de design de interface se preocupa com muitos elementos</Text>
                     <List>
                        <Text>Parte visual</Text>
                     </List>
                     <List>
                        <Text>Usabilidade</Text>
                     </List>
                     <List>
                        <Text>Arquitetura da informação</Text>
                     </List>
                     <List>
                        <Text>Navegação</Text>
                     </List>
                     <List>
                        <Text>Transição de telas</Text>
                     </List>
                  </Content>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>{`Affordance`}</Text>
                  </Header>
                  <Content>
                     <Text darkColor="#cf6478">O usuário entende os elementos que estão postos na interface?</Text>
                  </Content>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Comunicabilidade</Text>
                  </Header>
                  <Content>
                     <Text darkColor="#cf6478">O usuário olhando para a interface, consegue imaginar a idéia que o designer teve para projetar o sistema?</Text>
                     <Text>Para que serve o sistema.</Text>
                     <Text>Qual a vantagem de utilizá-lo.</Text>
                     <Text>Como ele funciona.</Text>
                     <Text>Quais são os princípios gerais de interação com o sistema.</Text>
                  </Content>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Definindo as representações do projeto</Text>
                  </Header>
                  <Content>
                     <Text>Modelo de usuário</Text>
                     <List>
                        <Text>Quem vai usar o sistema?</Text>
                     </List>
                     <List>
                        <Text>Quais são as caracteristicas? </Text>
                     </List>
                     <List>
                        <Text>Oque ele sabe do sistema? </Text>
                     </List>
                     <List>
                        <Text>Oque ele sabe de interação? </Text>
                     </List>
                  </Content>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
                  <Content>
                     <Text type="subtitle">Personas</Text>
                     <Collapsible title="Identidade">
                        <Text>Nome, idade, avatar (foto) e dados demográficos.</Text>
                     </Collapsible>
                     <Collapsible title="Status">
                        <Text>Categoria como stakeholder, usuário primário, administrador ou outras.</Text>
                     </Collapsible>
                     <Collapsible title="Objetivos">
                        <Text>Objetivos definidos com relação ao sistema.</Text>
                     </Collapsible>
                     <Collapsible title="Habilidades">
                        <Text>Competências e habilidades especificadas.</Text>
                     </Collapsible>
                     <Collapsible title="Tarefas">
                        <Text>Tarefas que realiza normalmente e a frequência de realização.</Text>
                     </Collapsible>
                     <Collapsible title="Relacionamentos">
                        <Text>Indicação das outras personas com quem se relaciona.</Text>
                     </Collapsible>
                  </Content>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ exercicios ] */}
                  <View darkColor={ Palette.dark.bg } pv={24}>
                     <Header pd={24}>
                        <Text h={3}>Atividades</Text>
                     </Header>

                     <Section gap={16}>
                        
                        <Exercices id={1}
                           question={<Text>No contexto de design de interfaces humano-computador (IHC), qual das seguintes opções melhor descreve os focos principais que devem ser considerados durante o projeto de design da interface?</Text>}
                           answer={<Text>No projeto de design IHC, a experiência do usuário é fundamental, envolvendo a parte visual, usabilidade, arquitetura da informação, navegação e transição de telas.</Text>}
                        />
                        
                        <Exercices id={2}
                           question={<Text>Estudamos o conceito de affordance. Abaixo, listamos algumas definições para esse conceito fundamental em IHC. Assinale a alternativa correta:</Text>}
                           answer={<Text>Indica que tipos de operações podem ser realizadas com o sistema interativo.</Text>}
                        />
                        
                        <Exercices id={3}
                           question={<Text>Qual das seguintes opções melhor descreve o conceito de comunicabilidade em uma interface humano-computador (IHC) e seus objetivos principais?</Text>}
                           answer={<Text>Comunicabilidade refere-se à capacidade da interface de comunicar ao usuário a lógica do design, as intenções do designer e os princípios de interação.</Text>}
                        />
                        
                        <Exercices id={14}
                           question={<Text>Quais são as fases principais de um projeto de interface humano-computador (IHC) segundo Rogers, Sharp e Preece (2013), e quais atividades são realizadas em cada fase?</Text>}
                           answer={<Text>Entendimento dos processos de trabalho dos usuários, criação de cenários de interação, desenvolvimento de protótipos e avaliação das alternativas de design.</Text>}
                        />
                        
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
}  /*  </  Modulo1View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
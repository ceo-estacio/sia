

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
         options={{ headerTitle:"Avaliação de Interface Humano Computador" }}
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

               <Content>
                  <Text type="subtitle">Avaliação da tecnologia</Text>
                  <Text darkColor="#e77">{`\tDe que maneira os usuários utilizam o sistema?\n\n\tQuanto os usuários consideram que esse sistema apoia na realização de suas tarefas?\n`}</Text>
                  <Text type="subtitle">Avaliar idéias para odesign</Text>
                  <Text darkColor="#e77">{`\tQual alternativa de design os usuários preferem?\n\n\tQual alternativa pode ser construída em menos tempo?`}</Text>
               </Content>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Avaliação de IHC</Text>
                     <Text darkColor="#cf6478"></Text>
                  </Header>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>{``}</Text>
                  </Header>
                  <Content>
                     <Text darkColor="#cf6478"></Text>
                  </Content>
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
                        
                        <Exercices id={4}
                           question={<Text>Quais são as fases principais de um projeto de interface humano-computador (IHC) segundo Rogers, Sharp e Preece (2013), e quais atividades são realizadas em cada fase?</Text>}
                           answer={<Text>Entendimento dos processos de trabalho dos usuários, criação de cenários de interação, desenvolvimento de protótipos e avaliação das alternativas de design.</Text>}
                        />
                        
                        <Exercices id={5}
                           question={<Text>Personas representam um grupo hipotético de usuários. São definidas principalmente por seus objetivos de atividade no sistema em geral. Elas têm algumas características que devem ser definidas. Assinale a alternativa que contenha a lista correta com essas características.</Text>}
                           answer={<Text>Identidade; status; objetivos; habilidades; tarefas; relacionamentos.</Text>}
                        />
                        
                        <Exercices id={6}
                           question={<Text>Qual é a importância do levantamento de requisitos no desenvolvimento de software, especialmente em projetos de interface humano-computador (IHC)?</Text>}
                           answer={<Text>O levantamento de requisitos é crucial para entender as necessidades dos usuários, alinhar expectativas e controlar o projeto.</Text>}
                        />
                        
                        <Exercices id={17}
                           question={<Text>Quais das seguintes técnicas são usadas para levantamento de requisitos em projetos de interface humano-computador (IHC)?</Text>}
                           answer={<Text>Entrevistas, grupos de foco, questionários, brainstorming, card sorting, estudos de campo, investigação contextual, storyboard e protótipos são todas as técnicas usadas para levantamento de requisitos em IHC.</Text>}
                        />
                        
                        <Exercices id={18}
                           question={<Text>A técnica de modelagem design centrado no usuário possui quatro etapas principais. Indique qual das opções a seguir é uma dessas etapas.</Text>}
                           answer={<Text>Especificação dos requisitos do sistema.</Text>}
                        />
                        
                        <Exercices id={19}
                           question={<Text>O estudo de técnicas para análise e modelagem de tarefas em IHC é essencial para compreender e otimizar a interação dos usuários com sistemas complexos. Entre as técnicas mais utilizadas, estão a análise hierárquica de tarefas (HTA), o GOMS e o ConcurTaskTrees (CTT). Qual das afirmações a seguir descreve corretamente um dos aspectos fundamentais da técnica GOMS?</Text>}
                           answer={<Text>GOMS descreve tarefas usando objetivos e operadores.</Text>}
                        />
                        
                        <Exercices id={20}
                           question={<>
                              <Text type="subtitle">Design</Text>
                              <Text>Qual é uma característica básica dos processos de design de IHC (interação humano-computador) segundo Barbosa et al. (2010)?</Text>
                           </>}
                           answer={<Text>Execução das atividades de forma iterativa, permitindo refinamentos sucessivos..</Text>}
                        />
                        
                        <Exercices id={21}
                           question={<>
                              <Text type="subtitle">Modelos de ciclo de vida</Text>
                              <Text>Nielsen (1993) propôs um conjunto de atividades para o ciclo de vida de produtos. Qual atividade que faz parte desse conjunto?</Text>
                           </>}
                           answer={<Text>Definir as metas de usabilidade</Text>}
                        />
                        
                        <Exercices id={22}
                           question={<>
                              <Text type="subtitle">Engenharia de usabilidade</Text>
                              <Text>Quais são as principais diferenças entre os ciclos de vida de engenharia de usabilidade propostos por Nielsen (1993) e Mayhew (1999)?</Text>
                           </>}
                           answer={<Text>Nielsen propõe atividades contínuas durante todo o ciclo de vida do produto, enquanto Mayhew organiza atividades em fases distintas.</Text>}
                        />
                        
                        <Exercices id={23}
                           question={<>
                              <Text type="subtitle">Tipos de design</Text>
                              <Text>Quais são os principais tipos de design em projetos de interface humano-computador (IHC) e suas características distintivas?</Text>
                           </>}
                           answer={<Text>Design contextual foca o contexto de uso dos usuários; design baseado em cenários usa narrativas; design dirigido por objetivos cria soluções criativas; design centrado na comunicação foca a metacomunicação.</Text>}
                        />
                        
                        <Exercices id={24}
                           question={<>
                              <Text type="subtitle">Princípios e diretrizes de design IHC: parte I</Text>
                              <Text>Quais são os princípios e diretrizes de design de interface humano-computador (IHC) destacados e suas características principais?</Text>
                           </>}
                           answer={<Text>Correspondência com as expectativas dos usuários requer ações e efeitos previsíveis, e simplicidade nas tarefas implica manter tarefas e fornecer suporte.</Text>}
                        />
                        
                        <Exercices id={25}
                           question={<>
                              <Text type="subtitle">Princípios e diretrizes de design IHC: parte II</Text>
                              <Text>O conceito de antecipação das necessidades do usuário é fundamental no design de interface humano-computador. Ele tem como objetivo tornar o sistema mais eficiente e intuitivo, prevendo as ações e informações necessárias durante a interação. Com base nisso, assinale a alternativa correta que descreve o conceito de antecipação das necessidades do usuário.</Text>
                           </>}
                           answer={<Text>Prever e fornecer proativamente o que o usuário quer e precisa.</Text>}
                        />
                        
                        <Exercices id={26}
                           question={<>
                              <Text type="subtitle">Integração entre IHC e engenharia de software</Text>
                              <Text>A diretriz de correspondência com as expectativas dos usuários faz algumas recomendações de usos de alguns elementos. Assinale a alternativa que contém uma das recomendações feitas nessa diretriz:</Text>
                           </>}
                           answer={<Text>{`Uso de metáforas.\n\nA diretriz de correspondência com as expectativas dos usuários recomenda o uso de metáforas, pois ajudam os usuários a entenderem a interface de maneira intuitiva.`}</Text>}
                        />
                        
                        <Exercices id={2}
                           question={<>
                              <Text type="subtitle"></Text>
                              <Text></Text>
                           </>}
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
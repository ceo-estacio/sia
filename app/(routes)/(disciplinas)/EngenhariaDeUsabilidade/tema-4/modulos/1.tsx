

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
                  <Text darkColor="#e77">{"\tDe que maneira os usuários utilizam o sistema?\n\n\tQuanto os usuários consideram que esse sistema apoia na realização de suas tarefas?\n"}</Text>
                  <Text type="subtitle">Avaliar idéias para odesign</Text>
                  <Text darkColor="#e77">{"\tQual alternativa de design os usuários preferem?\n\n\tQual alternativa pode ser construída em menos tempo?"}</Text>
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
                     <Text h={3}>{""}</Text>
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
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text></Text>
                        </>}
                        answer={<Text></Text>}
                     />
                        
                     <Exercices id={1}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>No processo de desenvolvimento de sistemas interativos, uma atividade essencial é a avaliação da interface humano-computador. Assinale a opção correta em relação aos benefícios dessa atividade:</Text>
                        </>}
                        answer={<Text>A identificação e a correção de problemas na interface podem tornar o produto mais robusto.</Text>}
                     />
                        
                     <Exercices id={2}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>Uma avaliação de interface humano-computador pode ser realizada em diferentes ambientes: Em contexto real de uso ou em laboratório. Nesse sentido, é correto afirmar que:</Text>
                        </>}
                        answer={<Text>Na avaliação em laboratório, o avaliador tem maior controle, pois configura o ambiente e define previamente como será a interação do usuário com o sistema.</Text>}
                     />
                        
                     <Exercices id={3}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>A avaliação heurística é uma técnica de avaliação de IHC que tem como objetivo encontrar problemas de usabilidade em interfaces. Podemos classificá-la como sendo do tipo:</Text>
                        </>}
                        answer={<Text>Inspeção</Text>}
                     />
                        
                     <Exercices id={4}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>Sobre a fase de consolidação dos resultados na avaliação heurística, podemos afirmar que:</Text>
                        </>}
                        answer={<Text>O objetivo dessa fase é os avaliadores chegarem a um consenso sobre os problemas encontrados.</Text>}
                     />
                        
                     <Exercices id={5}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>Sobre a técnica de avaliação de interface humano-computador por inspeção por meio de lista de verificação, podemos afirmar que:</Text>
                        </>}
                        answer={<Text>Não são necessários profissionais especializados em IHC para realizar esse tipo de avaliação.</Text>}
                     />
                        
                     <Exercices id={6}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>Qual destes itens faz parte da famosa lista de critérios ergonômicos proposta por Bastien e Scapin?</Text>
                        </>}
                        answer={<Text>Legibilidade</Text>}
                     />
                        
                     <Exercices id={7}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>A avaliação por ensaio de interação é uma técnica na qual usuários são observados enquanto utilizam o sistema para realizarem um conjunto de tarefas. Assinale a alternativa correta sobre essa técnica:</Text>
                        </>}
                        answer={<Text>O ensaio de interação possibilita a confirmação de predições feitas antes com a aplicação de técnicas de inspeção.</Text>}
                     />
                        
                        
                     <Exercices id={8}
                        question={<>
                           <Text type="subtitle"></Text>
                           <Text>Sobre o ambiente onde é realizado o ensaio de interação, podemos afirmar que:</Text>
                        </>}
                        answer={<Text>O ensaio de interação pode ocorrer em ambientes reais do usuário, ou em laboratórios, onde há maior controle por parte do avaliador.</Text>}
                     />
                        
                        
                     <Exercices id={1}
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
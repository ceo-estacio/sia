

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
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } center ph={24} pv={24}>
                  <Text darkColor={ Palette.dark.bar } h={3}>Introdução e preparação do ambiente</Text>
               </Header>
               <Section ph={24}>
{/* == [ introdução ] */}
                  <View pv={24}>
                     <Header pd={24}>
                        <Text h={3}></Text>
                     </Header>
                     <Section pd={24}>
                        <List children={<>
                           <Text h={4} darkColor="#757">Instalação</Text>
                           <Text>{`npm install -g @angular/cli`}</Text>
                        </>}/>
                     </Section>
                  </View>

{/* == [ section 1 ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Elementos fundamentais do ReactJS</Text>
                     </Header>

                     <Section gap={16}>
                     </Section>
                  </View>

{/* == [ section 2 ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Ambiente para testes</Text>
                     </Header>
                  </View>

{/* == [ section 3 ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Ferramentas para desenvolvimento</Text>
                     </Header>
                  </View>

{/* == [ section 4 ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Primeiro App React</Text>
                     </Header>
                  </View>

{/* == [ exercicios ] */}
                  <View pv={24}>
                     <Header pv={24}>
                        <Text h={3}>Atividades</Text>
                     </Header>

                     <Section gap={16}>
                        <Text h={3}>Atividade</Text>
                        <Exercices id={1}
                           question={
                              <Text>{`A biblioteca JavaScript usada para criação de interface de usuário, React, tem como uma de suas principais características a natureza declarativa. Analise os exemplos a seguir em relação à programação declarativa.
      
      I. HTML
      II. XML
      III. PHP
      
      Está correto, em relação à programação declarativa, o que se afirma em:`}</Text>
                           }
                           answer={<Text>{`1 e 2\n\n\nA linguagem declarativa é baseada no aspecto lógico e funcional: ela descreve o que se faz, e não exatamente como suas instruções funcionam. Já a linguagem procedural é focada na mudança de estado de variáveis, o que acontece em PHP.`}</Text>}
                        />

                        <Exercices id={2}
                           question={<Text>O React é uma biblioteca do JavaScript muito útil no desenvolvimento de aplicações. Vimos que, para desenvolver uma aplicação na máquina local, precisamos instalar o Node.js. Nesse sentido, assinale a alternativa correta que descreve o que é o Node.js.</Text>}
                           answer={<Text>É um ambiente em tempo de execução que permite desenvolver aplicações JavaScript sem a necessidade de um navegador.</Text>}
                        />

                        <Exercices id={3}
                           question={<Text>{`Para criarmos uma aplicação local do React, tivemos que digitar o comando:

npx create-react-app my-app

Nesse sentido, assinale a alternativa correta que explique o que faz o comando npx.`}</Text>}
                           answer={<Text>É um programa que pode executar pacotes ou executáveis que estão na pasta node_modules.</Text>}
                        />

                        <Exercices id={4}
                           question={<Text></Text>}
                           answer={<Text></Text>}
                        />
                     </Section>
                  </View>

               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo1View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
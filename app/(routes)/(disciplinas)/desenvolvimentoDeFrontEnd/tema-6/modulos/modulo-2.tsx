

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
export default function Modulo2View( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } center ph={24} pv={24}>
                  <Text darkColor={ Palette.dark.bar } h={3}>Conceitos básicos do ReactJS</Text>
               </Header>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}></Text>
                  </Header>
                  <Section pd={24}>
                     <List children={<>
                        <Text h={4} darkColor="#757"></Text>
                        <Text>{``}</Text>
                     </>}/>
                  </Section>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 3 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 4 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}></Text>
                  </Header>
               </View>

{/* == [ section 5 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}></Text>
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
                           question={<Text>{`Considerando o React, avalie as afirmativas:

I. Um elemento descreve o que será renderizado em tela. Um componente é uma função ou uma classe, contendo opcionalmente parâmetros que retornam um elemento.
II. Algumas das vantagens de se utilizar o React são o aumento de performance da aplicação devido ao uso de Virtual DOM e a capacidade de renderização tanto no lado cliente quanto no do servidor.
III. States e props são objetos JavaScript que armazenam informações que influenciam a exibição de um componente. Ambos são definidos pelos próprios componentes, podendo ser repassados como parâmetros de uma função.

Agora, aponte a alternativa correta.`}</Text>}
                           answer={<Text>1 e 2.</Text>}
                        />

                        <Exercices id={2}
                           question={<Text>Um termo bastante comum no React é o nome componentes. No entanto, os componentes podem ter comportamentos e estruturas muito distintas. Nesse sentido, assinale a alternativa correta a respeito de qual tipo de componente devemos utilizar quando o nosso objetivo é trabalhar com generalizações de comportamentos a partir da propriedade herança.</Text>}
                           answer={<Text>Nesse caso, devemos usar componentes de classe.</Text>}
                        />
                        
                        <Exercices id={3}
                           question={<Text>{`No desenvolvimento de uma aplicação do React, constantemente, precisamos trabalhar com componentes. Inclusive, é comum utilizarmos a estrutura:

class MinhaClasse extends React.Component

Nesse sentido, selecione a opção correta a respeito dessa estrutura sintática.`}</Text>}
                           answer={<Text>Quando uma classe herda de React.Component, ela pode padronizar comportamentos e propriedades.</Text>}
                        />
                        
                        <Exercices id={4}
                           question={<Text>Os componentes desempenham um papel essencial no uso de uma aplicação com React. Eles estabelecem comportamentos e fazem uso de propriedades que padronizam a forma de trabalhar. Nesse sentido, selecione a opção correta a respeito do ciclo de vida dos componentes do React.</Text>}
                           answer={<Text>O getSnapshotBeforeUpdate é executado logo antes de a renderização ser confirmada no DOM. Qualquer valor retornado será encaminhado para o constructor.</Text>}
                        />
                        
                        <Exercices id={5}
                           question={<Text>A classe React.Component desempenha um importante papel no desenvolvimento de uma aplicação no React. Entre os diversos métodos que ela possui, há o método “constructor”. Nesse sentido, selecione a opção correta sobre o objetivo desse método.</Text>}
                           answer={<Text>Ele estabelece o estado inicial do componente e faz a vinculação com os manipuladores de eventos.</Text>}
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
}  /*  </  Modulo2View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */


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
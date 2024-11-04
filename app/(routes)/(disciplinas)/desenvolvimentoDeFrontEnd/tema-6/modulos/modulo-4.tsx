

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
export default function Modulo4View( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header darkColor={ Palette.sigrid.tint } center ph={24} pv={24}>
                  <Text darkColor={ Palette.dark.bar } h={3}>Rotas e Redux</Text>
               </Header>

{/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Reduce</Text>
                  </Header>
                  <Section pd={24}>
                     <List children={<>
                        <Text h={4} darkColor="#757">instalação</Text>
                        <Text>{`° npm i react-redux\n° npm i @reduxjs/toolkit react-redux`}</Text>
                     </>}/>
                  </Section>
               </View>

{/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Biblioteca React Route</Text>
                  </Header>
               </View>

{/* == [ section 2 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Biblioteca React Redux</Text>
                  </Header>
               </View>

{/* == [ section 3 ] */}
               <View pv={24}>
                  <Header pv={24}>
                     <Text h={3}>Reducers, slicer e componentes login e logout</Text>
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
                        
                        <Exercices id={1}
                           question={<Text>O React Router é uma biblioteca que permite navegar entre outras interfaces em nossa aplicação. Neste material, falamos exclusivamente da versão V6, modificando algumas sintaxes com novos recursos. Em relação aos principais componentes dessa versão nova do Router, assinale a alternativa correta.</Text>}
                           answer={<Text>O Route é o componente mais importante, pois é responsável pela renderização da aplicação.</Text>}
                        />
                        
                        <Exercices id={2}
                           question={<Text>Biblioteca utilizada para auxiliar o gerenciamento de estado, o Redux centraliza as informações, sendo responsável por repassá-las para o componente que precisa utilizar essas informações. Assinale a opção correta a respeito do Redux.</Text>}
                           answer={<Text>Actions são basicamente as instruções enviadas aos reducers, informando qual a função terá de ser executada e que valor essa função utilizará como parâmetro.</Text>}
                        />
                        
                        <Exercices id={3}
                           question={<Text>{`No desenvolvimento do componente de logout, em um dado momento, vimos a construção:

const handleLogout = () => {
     dispatch(logout(name));
}

No entanto, também vimos uma estrutura sintática semelhante no componente de login:

const handleLogin = () => {
     dispatch(changeUser(name));
}

Nesse sentido, selecione a opção correta a respeito dessas estruturas sintáticas.`}</Text>}
                           answer={<Text>São exemplos de arrows functions baseadas em programação funcional.</Text>}
                        />
                        
                     </Section>
                  </View>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo4View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */


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
import React, { useState, useEffect, useRef, useCallback, } from "react";
import { 
   StyleSheet,
   ScrollView,
   Alert,
} from "react-native";
import YouTubePlayer from "@/widgets/céo/YouTubePlayer";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function ComponentesView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header center ph={24} pv={24} darkColor="#005577">
                  <Text h={2}>Componentes</Text>
               </Header>

               <Section>
                  <Header>
                     <Text>Projeto Clima Tempo: com vite</Text>
                  </Header>
                  <Content>
                     <YouTubePlayer
                        videoID="yxUR67t6UcA"
                     />
                  </Content>
               </Section>

               <Section>
                  <Header pd={24}>
                     <Text darkColor="#159050" h={3}>O que é um componente?</Text>
                  </Header>
                  <Content gap={24}>
                     <Text h={4}>Exemplo de um componente</Text>
                     <PixBG 
                        source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/componente.jpg" ) }
                     />

                     <View gap={16}>
                        <Text>Componentização da página</Text>
                        <PixBG 
                           source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/componentizaçãoDaPágina.jpg" ) }
                        />
                     </View>

                     <View gap={16}>
                        <Text>Design do App de Clima Tempo</Text>
                        <PixBG 
                           source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/appDeClimaTempo.jpg" ) }
                        />
                     </View>
                  </Content>
               </Section>
               
               <Section>
                  <Header pd={24}>
                     <Text darkColor="#159050" h={3}>Single file components</Text>
                  </Header>
                  <Content gap={24}>

                  </Content>
               </Section>
               
               <Section>
                  <Header pd={24}>
                     <Text darkColor="#159050" h={3}>Verificando Aprendizado</Text>
                  </Header>
                  <Content gap={24}></Content>
               </Section>
               
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ComponentesView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
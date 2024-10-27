

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
                  <Header pd={24}>
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

                     <Section gap={24}>
                        <Text h={3}>Criação e uso de componentes</Text>
                        <PixBG h={330} source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/vue-componentes.png" ) }/>                     
                        <Text h={4}>inserção de componentes dentro de outros ( ""props:children"" )</Text>
                        <PixBG source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/slot-declaração.jpg" ) }/>                     
                        <PixBG source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/slot-uso.jpg" ) }/>                     
                     </Section>

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
                  <Exercices 
                     id={5}
                     question={<>
                        <Text>{`Um desenvolvedor está trabalhando em um componente que mostra o resumo de um perfil de usuário. Nesse componente, são utilizados três outros: a foto do usuário, a bio dele (um texto resumido) e a lista de seguidores. Apesar de muito esforço, nada é mostrado na tela.

Observe a estrutura a seguir e responda à pergunta:`}</Text>
                        <PixBG source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/q5.jpg" ) }/>
                        <Text>Do que o desenvolvedor se esqueceu?</Text>
                     </>}
                     answer={<Text>De importar e registrar os componentes filhos.</Text>}
                  />

                  <Exercices 
                     id={6}
                     question={<Text>Uma aplicação de rede social tem um componente de perfil de usuário (Perfil.vue) que mostra a foto, a bio e os seguidores de determinado usuário. Esse componente espera receber um objeto usuário com os dados necessários. De que maneira um componente pai pode passar informações para esse componente filho?</Text>}
                     answer={<Text>Utilizando props.</Text>}
                  />
               </Section>
               
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ComponentesView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
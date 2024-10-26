

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
} from "@/widgets/elements";
import React, { useState, useEffect, useRef, useCallback, } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   Alert,
   Button, 
   ActivityIndicator,
   ImageBackground,
} from "react-native";
import YouTubePlayer from "@/widgets/céo/YouTubePlayer";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function SaindoDoBásicoView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header center ph={24} pv={24}>
                  <Text h={3}>Saindo do básico</Text>
               </Header>

               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Projeto Todo.list</Text>
                  </Header>
                  <Content>
                     <View>
                        <YouTubePlayer 
                           videoID="_6Pg94rlgL8"
                        />
                     </View>

                     <Header pv={24}>
                        <Text h={5}>Resultado esperado pelo cliente Todo.list.</Text>
                     </Header>
                     <PixBG h={350}
                        source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/todolist.jpg" ) }
                     />
                     
                     <Content>
                        <Header pv={24}>
                           <Text h={3}>Requisitos do projeto</Text>
                        </Header>
                        {
                           [
                              "Itens marcados como importante em vermelho (classe CSS: importante).",
                              "Ao clicar no item, ele deve ser marcado como feito e ficar em branco e esmaecido (classe CSS: feito) independentemente de ser importante.",
                              "O usuário digita o texto e clica em salvar ou aperta a tecla Enter, e o item vai para a lista. O botão salvar só deverá aparecer se houver um texto digitado. Após a inserção, os campos deverão ser limpos.",
                              "O texto deve contar com até 20 caracteres, enquanto a contagem precisa ser mostrada a seguir do input de texto.",
                           ].map( ( item, i ) => (
                              <Content key={ i } style={{ flexDirection: "row", marginVertical: 8, alignItems: "flex-start" }}>
                                 <Text h={4}># </Text>
                                 <Text >{ item }</Text>
                              </Content>
                           ) )
                        }
                     </Content>
                  </Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Classes e eventos</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Adicionando elementos</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Elementos dinâmicos</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Verificando Aprendizado</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  SaindoDoBásicoView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
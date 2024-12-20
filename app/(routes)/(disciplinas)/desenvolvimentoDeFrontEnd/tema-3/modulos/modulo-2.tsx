

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
                              <List key={ i }>
                                 <Text>{ item }</Text> 
                              </List>
                           ) )
                        }
                     </Content>
                  </Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Classes e eventos</Text>
                  </Header>
                  <Content>
                     <YouTubePlayer 
                        videoID="cRE9x5axOdM"
                     />
                  </Content>
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
               
               <Section gap={16}>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Verificando Aprendizado</Text>
                  </Header>
                  <Exercices 
                     id={3}
                     question={<>
                        <Text>{`Este código para o método salvarNovoItem não se comporta como o esperado:`}</Text>
                        <PixBG 
                           source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/aprendizado-3.jpg" ) }
                        />
                     </>}
                     answer={<Text>{`Toda vez que utilizamos variáveis, métodos e computed properties, entre outros, dentro do escopo do Vue Instance, precisamos usar a palavra-chave this.`}</Text>}
                  />
                  <Exercices 
                     id={4}
                     question={<Text>Qual das opções a seguir cria uma div para cada elemento de uma lista chamada list, imprimindo o nome do usuário (variável name)?</Text>}
                     answer={<Text>{`<div for=”list as user”> {{user.name}} </div>`}</Text>}
                  />
               </Section>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  SaindoDoBásicoView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
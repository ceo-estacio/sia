

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


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaBásicaDoVueJS( { ...props } ) {
   const 
      videoHeight = 210,
      [ VideoReady, setVideoReady ] = useState<boolean>( false )
   ;

   return( <>
      <HomePage>
         <ScrollView>
            <View darkColor="#212329" lightColor="#e5e5e5">
               <Header center ph={24} pv={24}>
                  <Text h={3}>Estrutura básica do Vue.js</Text>
               </Header>

               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>O que é Vue.js e por que usá-lo?</Text>
                  </Header>
                  <Content>
                     <YouTubePlayer videoID="hbMuYkKKRqQ"/>
                     <Header pv={24}>
                        <Text h={3}>Configurar o Vue</Text>
                     </Header>
                     <Content>
                        <Text>
                           1 - Importar o Vue;
                        </Text>
                        <Text>
                           2 - Criar uma instância do Vue;
                        </Text>
                        <Text>
                           3 - Montar a instância no HTML;
                        </Text>
                        <Text>
                           4 - Fazer as ligações necessárias;
                        </Text>
                     </Content>
                     <Content>
                        <Header pv={24}>
                           <Text h={3} darkColor="#f0a">Vue keys</Text>
                        </Header>
                        {
                           [
                              {
                                 name: "v-bind",
                                 item: ( <>
                                    <View darkColor="#fff1" pd={8}>
                                       <Text h={4}>Forma longa</Text>
                                       <Text>{`<img v-bind:src=”perfil.foto” />`}</Text>
                                    </View>
                                    <View darkColor="#fff1" pd={8}>
                                       <Text h={4}>Forma reduzida</Text>
                                       <Text>{`<img :src=”perfil.foto” />`}</Text>
                                    </View>
                                 </> ),
                              },
                              {
                                 name: "v-on",
                                 item: ( <>
                                    <View darkColor="#fff1" pd={8}>
                                       <Text h={4}>click forma longa</Text>
                                       <Text>{`<img v-on:click=”item.feito = !item.done” />`}</Text>
                                    </View>
                                    <View darkColor="#fff1" pd={8}>
                                       <Text h={4}>click forma reduzida</Text>
                                       <Text>{`<img :src=”perfil.foto” />`}</Text>
                                    </View>
                                 </> ),
                              },
                              {
                                 name: "v-for",
                                 item: ( <View darkColor="#fff1" pd={8}><Text>v-for="item in lista"</Text></View> ),
                              },
                              {
                                 name: "v-model",
                                 item: (<Text>{`v-model="name"`}</Text>),
                              },
                              {
                                 name: "v-text",
                                 item: (<Text>{`v-text="name"`}</Text>),
                              },
                              {
                                 name: "",
                                 item: ``,
                              },
                           ].map( ( item, i ) => (
                              <List gap={8} key={i}>
                                 <Text h={3}>{ item.name }</Text>
                                 <View darkColor="#fff1" pd={16} gap={8} style={{ flex: 1, width: "100%", }}>
                                    { item.item }
                                 </View>
                              </List>
                           ) )
                        }
                     </Content>
                  </Content>
               </Section>

               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Projeto - Carteirinha de Estudante</Text>
                  </Header>
                  <Content>
                     <View h={ videoHeight }>
                        <YouTube 
                           videoId="UcfXV4YhhMA" 
                           height={ VideoReady ? videoHeight : 0 }
                           onReady={ () => { setVideoReady( true ) } }
                        />
                        {
                           !VideoReady && 
                           <ActivityIndicator color={ "#f55" } style={{ height: videoHeight, position: "relative", top: "50%", }}/>
                        }
                     </View>
                     <View>
                        <Header pv={24}>
                           <Text h={3}>Projeto: Carteirinha do Aluno</Text>
                        </Header>
                        <Text>Modelo da carteirinha</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/carteirinha.jpg") }/>

                        <Text>Importar o vue</Text>
                        <PixBG h={150}
                           source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/importVue.jpg" ) }
                        />

                        <Text>create-vue-instance</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/create-vue-instance.jpg") }/>

                        <Text>mounting-vue-instance</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/mounting-vue-instance.jpg") }/>

                        <Text>mounting-vue-instance-2.jpg</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/mounting-vue-instance-2.jpg") }/>

                        <Text>binding-1</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/binding-1.jpg") }/>

                        <Text>binding-2</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/binding-2.jpg") }/>

                        <Text>ligações-de-entrada</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/ligações-de-entrada.jpg") }/>

                        <Text>ligações-de-saída</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/ligações-de-saída.jpg") }/>
                     </View>
                     <View>
                        <Header pv={24}>
                           <Text h={3}>Refatorando</Text>
                        </Header>

                        <Text>defining-vue-app</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/defining-vue-app.jpg") }/>
                        
                        <Text>insert-v-cloak</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/insert-v-cloak.jpg") }/>
                        
                        <Text>v-cloak-css</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/v-cloak-css.jpg") }/>
                        
                        <Text>bigode2v-text</Text>
                        <PixBG source={ require("@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-3/bigode2v-text.jpg") }/>
                     </View>
                  </Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Entregando valor ao cliente</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
               <Section>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Refatorando: criando uma melhor experiência</Text>
                  </Header>
                  <Content></Content>
               </Section>
               
               <Section gap={16}>
                  <Header pd={24} darkColor="#fff1">
                     <Text>Verificando Aprendizado</Text>
                  </Header>
                  <Exercices id={1}
                     question={<><Text>{ `Qual seria a definição mais correta para a instância do Vue?` }</Text></>}
                     answer={ <Text>{`Um objeto que utilizamos para configurar nossa aplicação e gerenciar os dados`}</Text> }
                  />

                  <Exercices id={2}
                     question={<Text>{`Qual das alternativas abaixo indica uma forma correta para se mostrar, dentro de uma tag span de nosso documento HTML, a variável nome constante na instância do Vue (mais precisamente, no objeto retornado pela função data)?`}</Text>}
                     answer={<Text>{`<span>{{ nome }}</span>\nou\n<span v-text=”nome”></span>`}</Text>}
                  />
               </Section>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  EstruturaBásicaDoVueJS  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
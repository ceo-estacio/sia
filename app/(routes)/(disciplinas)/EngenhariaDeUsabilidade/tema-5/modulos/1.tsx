

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
import { Fonts } from "@/constants/Sizes";


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
         options={{ headerTitle:"Acessibilidade à Web" }}
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

               {/* == [ introdução ] */}
               <View pv={24}>
                  <Header pd={24} style={{ gap: 8 }}>
                     <Text >Módulo 1</Text>
                     <Text style={ Fonts.h2 } darkColor="#cf6478">As seis dimensões da acessibilidade</Text>
                     <Text style={ Fonts.t5 }>Descrever o conceito geral de acessibilidade, suas seis dimensões e características.</Text>
                  </Header>

                  {/* == [ section 1 ] */}
                  <View pv={24}>
                     <Header pd={24}>
                        <Text h={3}>{""}</Text>
                     </Header>
                     <Content>
                        <Text darkColor="#cf6478"></Text>
                     </Content>
                  </View>
               </View>

               <View pv={24}>
                  <Header pd={24} style={{ gap: 8 }}>
                     <Text >Módulo 2</Text>
                     <Text style={ Fonts.h2 } darkColor="#cf6478">Acessibilidade e seus benefícios</Text>
                     <Text style={ Fonts.h5 }>Descrever os conceitos gerais sobre acessibilidade à web e seus benefícios.</Text>
                  </Header>

                  {/* == [ section 1 ] */}
                  <View pv={24}>
                     <Header pd={24}>
                        <Text h={3}>{""}</Text>
                     </Header>
                     <Content>
                        <Text darkColor="#cf6478"></Text>
                     </Content>
                  </View>
               </View>

               <View pv={24}>
                  <Header pd={24} style={{ gap: 8 }}>
                     <Text >Módulo 3</Text>
                     <Text style={ Fonts.h2 } darkColor="#cf6478">Componentes para acessibilidade na web</Text>
                     <Text style={ Fonts.h5 }>Identificar os sete componentes essenciais para promoção da acessibilidade web.</Text>
                  </Header>

                  {/* == [ section 1 ] */}
                  <View pv={24}>
                     <Header pd={24}>
                        <Text h={3}>{""}</Text>
                     </Header>
                     <Content>
                        <Text darkColor="#cf6478"></Text>
                     </Content>
                  </View>
               </View>

               <View pv={24}>
                  <Header pd={24} style={{ gap: 8 }}>
                     <Text >Módulo 4</Text>
                     <Text style={ Fonts.h2 } darkColor="#cf6478">Integração da acessibilidade na produção de produtos digitais</Text>
                     <Text style={ Fonts.h5 }>Reconhecer as estratégias de integração da acessibilidade em todo o processo de desenvolvimento de websites, aplicativos e outros produtos digitais.</Text>
                  </Header>

                  {/* == [ section 1 ] */}
                  <View pv={24}>
                     <Header pd={24}>
                        <Text h={3}>{""}</Text>
                     </Header>
                     <Content>
                        <Text darkColor="#cf6478"></Text>
                     </Content>
                  </View>
               </View>

               {/* == [ exercicios ] */}
               <View darkColor={ Palette.dark.bg } pv={24}>
                  <Header pd={24}>
                     <Text >Atividades</Text>
                  </Header>

                  <Section gap={16}>
                        
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
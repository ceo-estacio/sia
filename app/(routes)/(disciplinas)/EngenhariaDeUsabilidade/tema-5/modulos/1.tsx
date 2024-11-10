

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
                  <Header pd={24}>
                     <Text h={3}></Text>
                     <Text darkColor="#cf6478"></Text>
                  </Header>
               </View>

               {/* == [ section 1 ] */}
               <View pv={24}>
                  <Header pd={24}>
                     <Text h={3}>{""}</Text>
                  </Header>
                  <Content>
                     <Text darkColor="#cf6478"></Text>
                  </Content>
               </View>

               {/* == [ exercicios ] */}
               <View darkColor={ Palette.dark.bg } pv={24}>
                  <Header pd={24}>
                     <Text h={3}>Atividades</Text>
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
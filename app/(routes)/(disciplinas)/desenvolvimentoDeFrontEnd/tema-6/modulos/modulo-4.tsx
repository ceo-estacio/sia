

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
                           question={<Text></Text>}
                           answer={<Text></Text>}
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
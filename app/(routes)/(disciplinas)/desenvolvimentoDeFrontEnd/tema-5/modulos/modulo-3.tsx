

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
                  <Text h={3}>Tipos e narrowing</Text>
               </Header>

               <View>

               </View>
               
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  EstruturaBásicaDoVueJS  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
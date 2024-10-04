

/** == [ @imports ] 
 * == == == == == == == == == */
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   ScrollView,
   Pressable, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function HomeView( { ...props } ) {


   return( <>
      <View style={ s.sheet }>
         <View style={{ width: "100%", height: 160, padding: 24, backgroundColor: "#0af", alignItems: "center", justifyContent: "center", }}>
            <Text style={{ fontSize: 24, fontWeight: 700, color: "#00559c", }}>Estácio</Text>
         </View>
         <ScrollView>
            <View>
               <Pressable
                  onPress={ () => router.push( "/(routes)/(disciplinas)/estruturaDeDados/" ) }
               >
                  <Text style={{ color: "#eee", }}>Estrutura de dados</Text>
               </Pressable>
            </View>
         </ScrollView>
      </View>
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;
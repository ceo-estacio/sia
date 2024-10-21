

/** == [ @imports ] 
 * == == == == == == == == == */
import { Grid, HomePage, Text, Tile, View, } from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   Pressable,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function HomeView( { ...props } ) {


   return( <>
      <HomePage>
         <View style={{ width: "100%", height: 160, padding: 24, backgroundColor: "#0af", alignItems: "center", justifyContent: "center", }}>
            <Text h={2} darkColor="#00559c">Estácio</Text>
         </View>
         <ScrollView style={{ flex: 1, width: "100%", }}>
            <View pv={68}>
               <Grid>
                  <Tile
                     btn
                     onPress={ () => router.push( "/(routes)/(disciplinas)/estruturaDeDados/tema-2/c" ) }
                  >
                     <Pressable
                        style={{ flex: 1 }}
                        onPress={ () => router.push( "/(routes)/(disciplinas)/estruturaDeDados/tema-2/c" ) }
                     >
                        <Text style={{ color: "#eee", }}>Linguagem C</Text>
                     </Pressable>
                  </Tile>
                  <Tile>
                     <Pressable
                        style={{ flex: 1 }}
                        onPress={ () => router.push( "/(routes)/(disciplinas)/estruturaDeDados/" ) }
                     >
                        <Text style={{ color: "#eee", }}>Estrutura de dados</Text>
                     </Pressable>
                  </Tile>
                  <Tile>
                     <Pressable
                        style={{ flex: 1 }}
                        onPress={ () => router.push( "/(disciplinas)/desenvolvimentoDeFrontEnd" ) }
                     >
                        <Text style={{ color: "#eee", }}>Estrutura de dados</Text>
                     </Pressable>
                  </Tile>
               </Grid>
            </View>
            <View>

            </View>
         </ScrollView>
      </HomePage>
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
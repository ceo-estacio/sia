

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { Grid, Header, HomePage, Text, Tile, View, } from "@/widgets/elements";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   Pressable,
   FlatList,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function HomeView( { ...props } ) {
   const 
      tiles = [
         {
            id: "Linguagem C",
            src: "/(routes)/(disciplinas)/estruturaDeDados/tema-2/c",
         },
         {
            id: "Estrutura de dados",
            src: "/(routes)/(disciplinas)/estruturaDeDados/",
         },
         {
            id: "Desenvolvimento de Front-End",
            src: "/(disciplinas)/desenvolvimentoDeFrontEnd",
         },
         {
            id: "",
            src: "",
         },
      ]
   ;

   return( <>
      <HomePage>
         <Header center pv={24} bg={ Palette.dark.bar }>
            <Text h={2} darkColor="#00559c">Estácio</Text>
         </Header>
         <ScrollView>
            <View pv={68} gap={16} style={{
               flexDirection: "row",
               flexWrap: "wrap",
               // backgroundColor: "#e5e5e5",
               justifyContent: "center",
            }}>
               {
                  tiles && 
                  tiles.map( item => (
                        <Tile key={ item.id }>
                           <Pressable
                              onPress={ () => router.push( item.src ) }
                              style={{
                                 // backgroundColor: "#21252b",
                                 width: "100%",
                                 // height: 56,
                                 height: "100%",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 borderRadius: 16,
                                 
                              }}
                           >
                              <Text style={{ color: "#eee", }}>{ item.id }</Text>
                           </Pressable>
                        </Tile>
                  ) )
               }
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
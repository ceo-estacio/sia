



/** == [ @imports ] 
 * == == == == == == == == == */
import X, { Header, HomePage, Page, Section } from "@/widgets/elements";
import { Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   ScrollView, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function CView( { ...props } ) {

   function Tecido( { ...props } ) {
      return( 
         <View style={{ width: props.w || "100%", height: props.h || 132, backgroundColor: props.fundo || "#21232900", margin: 0, padding: 0, alignItems: "center", }}>
            <View 
               style={{
                  width: props.w || "100%", height: props.h || 132,
                  backgroundColor: props.bg || "#16181c",
                  alignItems: "center",
                  borderBottomStartRadius: props.rd || 45,
                  borderBottomEndRadius: props.rd || 45,
                  elevation: 5,
                  // borderStyle: "dashed",
                  // borderColor: props.bc || "#daa520",
                  // borderTopWidth: 0,
                  // borderWidth: 6,
                  shadowOpacity: 1,
                  shadowColor: "#0005",
                  shadowRadius: 10,
                  shadowOffset: {
                     width: 0,
                     height: 10
                  },
               }}
            >
               <View 
                  style={{
                     width: "95.3%", height: "93%",
                     backgroundColor: props.bg || "#16181c",
                     alignItems: "center",
                     borderBottomStartRadius: props.rd || 45,
                     borderBottomEndRadius: props.rd || 45,
                     elevation: 5,
                     borderStyle: "dashed",
                     borderColor: props.bc || "#ffab00",
                     borderTopWidth: 0,
                     borderWidth: 4.5,
                     shadowOpacity: 1,
                     shadowColor: "#0000",
                     shadowRadius: 0,
                     shadowOffset: {
                        width: 0,
                        height: 10
                     },
                  }}
               >
                  { props.children }
               </View>
            </View>
         </View>
      );
   }

   return( <>
      <Stack.Screen 
         options={{
            header: () => ( 
               <Tecido fundo="#fafafa">
                  <Tecido
                     w="105%" h="95%" rd={ 90 }
                     bg="#1b1d22" bc="#313339"
                  >
                  </Tecido>
               </Tecido>
            ),
         }}
      />
      <HomePage>
         <Page bg="#e5e5e5">
            <Section>
               <Header center pv={18} ph={24} bg="#c5c5c5">
                  <X.H3 style={{ textAlign: "center" }}>tamanho em bytes dos tipos de dados em C </X.H3>
               </Header>
               <Section
                  gap={16} pd={24}
               >
                  <X.P>sizeof( arg ): retorna o valor exato do tipo passado como argumento</X.P>
                  <Text>char: 1 byte em todos os computadores</Text>
                  <Text>int: 4 bytes em muitos computadores</Text>
                  <Text>double: 8 bytes em muitos computadores</Text>
                  <Text>double: 8 bytes</Text>
               </Section>
            </Section>
         </Page>
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
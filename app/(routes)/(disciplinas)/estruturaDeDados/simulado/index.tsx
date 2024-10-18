

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { Header, HomePage, Section, Text } from "@/widgets/elements";
import { View } from "@/widgets/ThemedView";
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
type EProps = {
   title: string;
}

function Exercicio( { ...props }: ExProps ) {
   return( <>
      <View 
         { ...props }
         style={{ 
            borderRadius: 13,
            backgroundColor: Palette.dark.bg_lv2,
            overflow: "hidden",
         }}
      >
         <Header ph={8} pv={8} bg="#00559c">
            <Text>{ props.title }</Text>
         </Header>
         <View gap={8} style={{
            padding: 16,

         }}>
            { props.children }
         </View>
      </View>
   </> );
}

type QProps = {
}

function Question( { ...props }: QProps ) {
   return( <>
      <View pv={16}
         style={{}}
      >
         <Text h={4}>{ props.children }</Text>
      </View>
   </> );
}

type ResProps = {
   title: string;
}

function Res( { ...props }: ResProps ) {
   return( <>
      <View pv={16} ph={24}
         style={{}}
      >
         <Text darkColor="#777">{ props.children }</Text>
      </View>
   </> );
}

/** == [ exports ]
 * == == == == == == == == == */
export default function SimuladoEstruturaDeDados( { ...props } ) {


   return( <>
      <HomePage>
         <Header ph={24} pv={24}>
            <Text h={3}>Estrutura de Dados</Text>
         </Header>
         <Section darkColor={ Palette.dark.bg_lv1 } pd={24}>

            <Exercicio title="titulo">
               <Question>Comparando o Merge Sort com o Método da bolha podemos afirmar que:</Question>
               <Res>O merge sort tem complexidade computacional inferior ao bubble sort, porém o merge sort sempre executa em tempo linear em algumas instâncias  (melhores casos).</Res>
            </Exercicio>
         </Section>
      </HomePage>
   </> );
}  /*  </  SimuladoEstruturaDeDados  >  */


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


/** == [ @imports ] 
 * == == == == == == == == == */
import _, { Code, Header, HomePage, Pix, Section } from "@/widgets/elements";
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
export default function ModularizaçãoView( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header bg="#00559c" h={91} ph={18} pv={18} center>
               <_.H1 style={{ color: "#eee" }}>Modularização</_.H1>
            </Header>

            <Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3>Definições</_.H3>
                  </Header>
                  <Section pd={18}
                  ></Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3>Passagem de parâmetros</_.H3>
                  </Header>
                  <Section pd={18}
                  >
                     <Code title="parametro comum 'sem alteração na var original'"
                        script={``}
                     />
                     <Code title="param por ref 'com alteração da var origin'"
                        script={`void Dobro( int *pX ) {\n\t( *pX ) = ( *pX ) * 2;\n}`}
                     />

                     <Pix 
                        image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-3/dobro.png" ) }
                     />
                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3>Protótipos de sub-rotinas</_.H3>
                  </Header>
                  <Section pd={18}
                  >
                     <Code title="a assinatura do protótipo deve vir no inicio do script ou antes do uso"
                        script={`#include <stdio.h>\n\nint Soma( int x, int y );\n\nint main()`}
                     />
                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3>Passagem de vetores</_.H3>
                  </Header>
                  <Section pd={18}
                  ></Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3>Verificando o aprendizado</_.H3>
                  </Header>
                  <Section pd={18}
                  ></Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <_.H3></_.H3>
                  </Header>
                  <Section pd={18}
                  ></Section>
               </Section>

            </Section>
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
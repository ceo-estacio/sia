

/** == [ @imports ] 
 * == == == == == == == == == */
import X, { Code, Header, HomePage, Picture, Pix, Section } from "@/widgets/elements";
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
               <X.H1 style={{ color: "#eee" }}>Modularização</X.H1>
            </Header>

            <Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <X.H3>Definições</X.H3>
                  </Header>
                  <Section pd={18}
                  >
                     <Text>
                        <X.H5>parametros:  </X.H5>
                        são passados no momento da criação da função,
                        são formais e são como uma var local dentro da função.
                     </Text>

                     <Text>
                        <X.H5>argumentos:  </X.H5>
                        
                        são parametros passados na execução da função,
                        são reais/atuais e são como os valores passados para os parametros formais
                     </Text>
                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <X.H3>Passagem de parâmetros</X.H3>
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
                     <X.H3>Protótipos de sub-rotinas</X.H3>
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
                     <X.H3>Passagem de vetores</X.H3>
                  </Header>
                  <Section pd={18}
                  >
                     <Code title="criação de vetores" script={`type name[ quantity ]`}/>

                     <Text>1: criação</Text>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-3/vetores-1.png" ) }/>

                     <Text>2: iniciação</Text>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-3/vetores-2.png" ) }/>

                     <Text>3: criação</Text>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-3/vetores-3.png" ) }/>

                     <Text>4: criação</Text>
                     <Pix image={ require( "@/assets/images/disciplinas/estrutura-de-dados/tema-3/vetores-4.png" ) }/>
                  </Section>
               </Section>

               <Section>
                  <Header ph={18} pv={18}>
                     <X.H3>Verificando o aprendizado</X.H3>
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


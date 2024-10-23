

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   ImageBackground,
} from "react-native";
import { Header, HomePage, Text, View, Section, Code, Content, } from "../../../../../../widgets/elements";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function Modulo_2_View( { ...props } ) {

   return( <>
      <HomePage >
         <ScrollView>
            <View>
               <Header center ph={24} pv={24}>
                  <Text h={3}>Manipulando a árvore DOM com jQuery</Text>
               </Header>
               <Section darkColor="#212329" lightColor="#e5e5e5">
                  <Header ph={24} pv={24}>
                     <Text h={4} darkColor="#e55">Programação Javascript com uso de Frameworks</Text>
                  </Header>
                  <Content>
                     <Text>Bibliotecas jQuery</Text>

                     <Code title="<!-- Versão completa -->"
                        script={`<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.js"></script>`}
                     />
                     <Code title="<!-- Versão completa, compactada/minimificada -->"
                        script={`<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.min.js"></script>`}
                     />
                     <Code title="<!-- Versão slim, sem compactação/minimificação -->"
                        script={`<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.slim.js"></script>`}
                     />
                     <Code title="<!-- Versão slim, com compactação/minimificação -->"
                        script={`<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.slim.min.js"></script>`}
                     />
                  </Content>

                  <Content>
                     <Header center>
                        <Text darkColor="#55e" h={4}>Manipulando a árvore DOM</Text>
                     </Header>
                     <ImageBackground 
                        style={{ width: "100%", height: 250 }}
                        resizeMode="contain"
                        source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/tema-2/DOM.jpg" ) }
                     />
                  </Content>
               </Section>
               <Section darkColor="#212329" lightColor="#e5e5e5">
                  <Header ph={24} pv={24}>
                     <Text h={4} darkColor="#e55">JQuery Methods</Text>
                  </Header>
                  <Content>
                     {
                        [
                           [
                              "$( \"p\" )",
                              "seletor == querySelector() e querySelectorAll()"
                           ],
                           [
                              "$( \"p\" ).first()",
                           ],
                           [
                              "$( \"p\" ).last()",
                           ],
                           [
                              "$( \"p\" ).eq(0)",
                           ],
                           [
                              "$( \"p\" ).append()",
                           ],
                           [
                              "$( \"p\" ).before()",
                           ],
                           [
                              "$( \"p\" ).find()",
                           ],
                           [
                              "$( \"p\" ).html()",
                              "same as innerHTML"
                           ],
                           [
                              "$( \"p\" ).replaceWith()",
                              "same as outerHTML"
                           ],
                        ].map( ( item, i ) => ( 
                           <View key={ i } pd={8}>
                              <Text darkColor="#559">{ item[0] }</Text>
                              <Text style={{ marging: 8 }}>{ item[1] }</Text>
                           </View>
                         ) )
                     }
                  </Content>
               </Section>
            </View>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  Modulo_2_View  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
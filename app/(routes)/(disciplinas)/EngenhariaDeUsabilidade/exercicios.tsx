

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content,
   Exercices,
   PixBG, 
} from "@/widgets/elements";
import React, { useState, useEffect, ReactElement, ReactNode } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   ImageBackground,
   FlatList,
   SectionList, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function ExercíciosView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView>

            {/* section 2 */}
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>Tema 2</Text>
                  <Text h={5} darkColor="#777">
                     Ergonomia em Interação Humano Computador
                  </Text>
               </Header>
               <Section darkColor="#1b1d22" lightColor="#e5e5e5" gap={16}>

                  <Exercices
                     id={1}
                     question={ <>
                        <Text>{`Os princípios e critérios ergonômicos são elementos que desenvolvedores devem seguir de modo a garantir uma experiência mais agradável e interessante para o usuário no seu contato com a interface de qualquer sistema. 

Existem diversos critérios para isso. Assinale a alternativa que contém 3 (três) destes critérios:`}
                        </Text>
                     </> }
                     answer={ <>
                        <Text>{`Condução, Carga de Trabalho, Controle Explícito.`}</Text>
                     </> }
                  />

                  <Exercices
                     id={2}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={7}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

                  <Exercices
                     id={10}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
                     </> }
                  />

               </Section>
            </View>

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
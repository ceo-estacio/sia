

/** == [ @imports ] 
 * == == == == == == == == == */
 import { 
   View,
   Text, 
   HomePage, 
   Header, 
   Section,
   Content, 
} from "@/widgets/elements";
import React, { useState, useEffect, ReactElement } from "react";
import { 
   StyleSheet,
   ScrollView,
   useColorScheme,
   ImageBackground,
   FlatList, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
type ExercicesProps = {
   id: number;
   question: ReactElement;
   answer: ReactElement;
}

function Exercices( props: ExercicesProps ) {
   return(
      <View darkColor="#151515" pd={16}>
         <View ratio={1} borderRadius={8}
            style={{ borderColor: "#9995", borderWidth: 1, width: 26, alignItems: "center", justifyContent: "center", }}
         >
            <Text>{ props.id }</Text>
         </View>
         <View pv={16} gap={8}>
            { props.question }
         </View>
         <View borderRadius={9} pd={16}
            style={{
               borderColor: "#27f9", borderWidth: .5,
            }}
         >
            { props.answer }
         </View>
      </View>
   );
}
/** == [ exports ]
 * == == == == == == == == == */
export default function ExercíciosView( { ...props } ) {

   return( <>
      <HomePage>
         <View>
            <Header ph={24} pv={24}>
               <Text h={3}>{ "Tema 2" }</Text>
               <Text h={5} darkColor="#777">{ "Programação Cliente Com Javascript" }</Text>
            </Header>
            <Section darkColor="#212329" lightColor="#e5e5e5">
               <Exercices
                  id={1}
                  question={ <>
                     <Text style={{ fontSize: 16 }}>Considere o bloco de código abaixo que utiliza JS e JSON.</Text>
                     <ImageBackground style={{ width: "100%", height: 150, }}
                        source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/exercicios/1.png" ) }
                     />
                     <Text style={{ fontSize: 16 }}>Para que o bloco de código exiba 0146 vermelha, a lacuna 1 deve ser corretamente preenchida por: </Text>
                  </> }
                  answer={ <>
                     <Text>x.trens[1].trem + " " + x.trens[1].linha</Text>
                  </> }
               />
               
               <Content>
               </Content>
            </Section>
         </View>
         <ScrollView>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
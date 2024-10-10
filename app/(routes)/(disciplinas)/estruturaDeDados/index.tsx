

/** == [ @imports ] 
 * == == == == == == == == == */ 
import React, { 
   // useState, 
   // useEffect 
} from "react"; 
import { 
   StyleSheet, 
} from "react-native";
// import { Href, router } from "expo-router";
// import { Colors, Palette, } from "@/constants/Colors";
import { DisciplinasMenu } from "@/widgets/ui";



/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosView( { ...props } ) {

   return( <>
      <DisciplinasMenu
         title="Estruturas de Dados"
         items={
            [
               { 
                  id: 2,
                  title: "Estruturas de Dados Heterogêneas", 
                  link: "/(disciplinas)/estruturaDeDados/tema-2", 
               },
               { 
                  id: 3,
                  title: "Modularização", 
                  link: "/(disciplinas)/estruturaDeDados/tema-3", 
               },
               { 
                  id: 4,
                  title: "Listas, Pilhas, Filas e Deques", 
                  link: "/(disciplinas)/estruturaDeDados/tema-4", 
               },
            ]
         }
      />
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         // alignItems: "center",
         // justifyContent: "center",
      },
   } )
;
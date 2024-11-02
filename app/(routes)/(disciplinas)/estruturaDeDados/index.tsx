

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
import { Palette } from "@/constants/Colors";



/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function EstruturaDeDadosView( { ...props } ) {

   return( <>
      <DisciplinasMenu
         title="Estruturas de Dados"
         sectionName="Tema"
         items={
            [
               { 
                  id: 2,
                  title: "Estruturas de Dados Heterogêneas", 
                  link: "/(disciplinas)/estruturaDeDados/tema-2", 
                  doc: "",
               },
               { 
                  id: 3,
                  title: "Modularização", 
                  link: "/(disciplinas)/estruturaDeDados/tema-3", 
                  doc: "",
               },
               { 
                  id: 4,
                  title: "Listas, Pilhas, Filas e Deques", 
                  link: "/(disciplinas)/estruturaDeDados/tema-4", 
                  doc: "",
               },
               { 
                  id: 5,
                  title: "Ordenação", 
                  link: "/(disciplinas)/estruturaDeDados/tema-5", 
                  doc: "",
               },
               { 
                  id: 6,
                  title: "Árvores", 
                  link: "/(disciplinas)/estruturaDeDados/tema-6", 
                  doc: "",
               },
               { 
                  id: 99,
                  title: "Exercícios", 
                  link: "/(disciplinas)/estruturaDeDados/exercicios", 
                  doc: "",
               },
               { 
                  id: 999,
                  title: "Simulados", 
                  link: "/(disciplinas)/estruturaDeDados/simulado", 
                  doc: "",
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
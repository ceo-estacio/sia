

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
export default function DesenvolvimentoDeFrontEndView( { ...props } ) {

   return( <>
      <DisciplinasMenu
         title="Desenvolvimento de Front-end"
         sectionName="Tema"
         items={
            [
               { 
                  id: 1,
                  title: "Caminho do Brilho", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-1/", 
               },
               { 
                  id: 2,
                  title: "Programação Cliente Com Javascript", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-2/", 
               },
               { 
                  id: 3,
                  title: "Vue js", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-3/", 
               },
               // { 
               //    id: 3,
               //    title: "", 
               //    link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-", 
               // },
               { 
                  id: 99,
                  title: "Exercícios", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/Exercicios", 
               },
            ]
         }
      />
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
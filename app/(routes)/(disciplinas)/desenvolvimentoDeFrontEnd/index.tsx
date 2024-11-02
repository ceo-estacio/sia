

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
                  doc: "",
               },
               { 
                  id: 2,
                  title: "Programação Cliente Com Javascript", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-2/", 
                  doc: "https://stecine.azureedge.net/repositorio/00212ti/07662/index.html?brand=estacio#",
               },
               { 
                  id: 3,
                  title: "Vue js", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-3/", 
                  doc: "https://stecine.azureedge.net/repositorio/00212ti/04319/index.html?brand=estacio#imprimir",
               },
               { 
                  id: 4,
                  title: "Programação Cliente Com Typescript", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-4/", 
                  doc: "https://stecine.azureedge.net/repositorio/00212ti/07666/index.html?brand=estacio#imprimir",
               },
               { 
                  id: 5,
                  title: "Angular", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-5/", 
                  doc: "https://stecine.azureedge.net/repositorio/00212ti/07669/index.html?brand=estacio#imprimir",
               },
               { 
                  id: 6,
                  title: "Reactjs", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/tema-6/", 
                  doc: "",
               },
               { 
                  id: 99,
                  title: "Exercícios", 
                  link: "/(disciplinas)/desenvolvimentoDeFrontEnd/Exercicios", 
                  doc: "",
               },
            ]
         }
      />
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
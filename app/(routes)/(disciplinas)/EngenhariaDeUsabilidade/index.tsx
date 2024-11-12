

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
export default function EngenhariaDeUsabilidadeView( { ...props } ) { 

   return( <>
      <DisciplinasMenu
         title="Engenharia de Usabilidade"
         sectionName="Tema"
         items={
            [
               { 
                  id: "Tema 1",
                  title: "Caminho do Brilho", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-1/", 
                  doc: "",
               },
               { 
                  id: "Tema 2",
                  title: "Ergonomia em Interação Humano Computador", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-2/", 
                  doc: "https://stecine.azureedge.net/repositorio/ergonomia_em_interacao_humano_computador/index.html?brand=estacio#imprimir",
               },
               { 
                  id: "Tema 3",
                  title: "Desenvolvimento de Interface Humano Computador", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-3/", 
                  doc: "",
               },
               { 
                  id: "Tema 4",
                  title: "Avaliação de Interface Humano Computador", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-4/", 
                  doc: "https://stecine.azureedge.net/repositorio/avaliacao_de_interface_humano_computador/index.html?brand=estacio#imprimir",
               },
               { 
                  id: "Tema 5",
                  title: "Acessibilidade à Web", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-5/", 
                  doc: "https://stecine.azureedge.net/repositorio/00212ti/07660/index.html?brand=estacio#imprimir",
               },
               { 
                  id: "Tema 6",
                  title: "Prepare", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/tema-6/", 
                  doc: "",
               },
               { 
                  id: "Exercícios",
                  title: "Exercícios", 
                  link: "/(disciplinas)/EngenhariaDeUsabilidade/exercicios", 
                  doc: "",
               },
            ]
         }
      />
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
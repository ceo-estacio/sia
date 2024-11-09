

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
               <Section darkColor="#" lightColor="#e5e5e5" gap={16}>

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
                        <Text>{`Os objetos de interação são elementos nas interfaces digitais que permitem aos usuários acessarem e manipularem conteúdo necessário à execução de suas tarefas, sendo próprios para isso. Existem diversos tipos de objetos de interação. 

Assinale abaixo a alternativa que contém somente objetos de interação:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Janelas, Combo Boxes, Barra de Ferramentas.`}</Text>
                     </> }
                  />

                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{`Em um novo software de gestão de projetos, os desenvolvedores incluíram um sistema robusto de ajuda e tutoriais. Eles pretendem facilitar o aprendizado do`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Suporte ao usuário e aprendizado facilitado.`}</Text>
                     </> }
                  />

                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{`Uma plataforma de e-commerce está sendo redesenhada para oferecer uma melhor experiência ao usuário. A equipe de design decide incorporar elementos que permitam aos usuários personalizar a interface de acordo com suas preferências.

Que aspecto da ergonomia em IHC está sendo enfatizado nessa decisão?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Adaptabilidade da interface.`}</Text>
                     </> }
                  />

                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{`IBGE/2013) A ergonomia cognitiva nas interfaces de programas de design gráfico tornou-se uma das principais contribuições do que se convencionou chamar de revolução digital. A facilitação do trabalho e a concepção do conceito de sistema amigável (user-friendly software) popularizaram tais programas a ponto de causarem uma reestruturação nos ambientes profissionais ligados às áreas gráficas.

Uma das características desses softwares encontra-se em:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Abundância de ícones operacionais reforçados pela redundância presente nos menus, nas barras de ferramentas e nos atalhos de teclado.`}</Text>
                     </> }
                  />

                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{`SELECON/2022 - Adaptada) No que se refere à Interface Homem-Máquina, um termo é definido como a qualidade que um produto apresenta de poder ser utilizado por usuários específicos para atingir determinadas metas com eficiência, eficácia e satisfação num contexto de uso específico. Em resumo, os sistemas devem ser flexíveis e fáceis de usar e aprender. Além disso, devem despertar uma boa atitude nas pessoas.
Esse termo é denominado:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Usabilidade.`}</Text>
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


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
               <Section gap={16}>

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

            { /** == [ Exercicios tema 3 ]
             * == == == == == == == == == */ }
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>Tema 3</Text>
                  <Text h={5} darkColor="#777">Desenvolvimento De Interface Humano Computador</Text>
               </Header>
               <Section gap={16}>
                  
                  <Exercices
                     id={1}
                     question={ <>
                        <Text>{`Projetos de software podem apresentar diversas dificuldades, que vão desde questões técnicas até problemas relacionados à gestão do projeto e às relações interpessoais da equipe envolvida. 

Qual método ágil de desenvolvimento é amplamente utilizado em projetos de software?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Scrum`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={2}
                     question={ <>
                        <Text>{`FGV/2021) Considere que a empresa XPTO, uma desenvolvedora brasileira de jogos de videogame, esteja planejando realizar o lançamento de um novo jogo no final do ano. Pondera-se, entretanto, que a XPTO ainda não decidiu o tema principal do jogo, tendo estabelecido somente uma estimativa inicial de orçamento.
Visando à escolha do tema do jogo, os diretores da XPTO se reuniram em um hotel fazenda para discutir o projeto. Em um momento de descontração, realizaram uma dinâmica na qual cada um falava rapidamente qualquer ideia que tivesse, sem qualquer tipo de crítica ou julgamento do grupo. Essas ideias eram anotadas e, posteriormente, analisadas e debatidas, até a escolha da melhor alternativa. 
Ao fim do encontro, o tema do jogo estava decidido.
Assinale a opção que indica a técnica de decisão utilizada pelos diretores da empresa XPTO.`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Brainstorming`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{`Em um projeto de interface humano-computador, uma equipe adotou a técnica de prototipação de baixa fidelidade. Eles utilizaram papel e caneta para criar representações iniciais do design da interface, facilitando discussões rápidas e ajustes conforme o feedback dos usuários.

Qual é o principal benefício da utilização de p`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Facilitação da colaboração e feedback rápido.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{`Em um projeto de interface web para um aplicativo de compras online, a equipe de desenvolvimento se concentra na usabilidade e na experiência do usuário. Eles aplicam princípios de IHC para criar uma interface intuitiva e de fácil navegação. O foco está na clareza das informações e na facilidade de realização de tarefas comuns.

Qual é o principal objetivo ao aplicar os princípios de IHC neste contexto?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Facilitar a interação do usuário com a interface.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{`O ciclo de vida é a estrutura contendo processos, atividades e tarefas envolvidas no desenvolvimento, operação e manutenção de um produto de software, abrangendo a vida do sistema, desde a definição de seus requisitos até o término de seu uso.

Disponível em: https://www.devmedia.com.br/ciclos-de-vida-dosoftware/21099. Acesso em: 23 set. 2022.

No Ciclo de Vida Estrela, a atividade central é:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Avaliação`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{`Existem diversos tipos de processo de design de interface. Qual das alternativas abaixo apresenta um deles?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Ciclo de vida em estrela`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={7}
                     question={ <>
                        <Text>{`Em termos de tecnologia da informação, quando falamos em design de interface do usuário, referimo-nos ao design de softwares, sites ou aplicativos. Na verdade, trata-se de programar a aparência das coisas para facilitar a usabilidade e a experiência do usuário.

Disponível em: https://www.dialhost.com.br/blog/o-que-e-design-de-interfacedo-usuario/. Acesso em: 23 set. 2022.

Qual das alternativas abaixo melhor define o design baseado em cenários?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`É uma história sobre pessoas executando uma atividade.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{`CONSULPAM/2022 - Adaptada) A Engenharia de Requisitos agrupa as ações voltadas para a identificação das demandas dos usuários relacionadas a uma solução. Uma das técnicas para o levantamento desses requisitos, caracterizase por formulários com perguntas bem definidas são aplicadas aos usuários do sistema, objetivando obter informações quantificáveis para identificar requisitos, sendo comumente aplicado em cenários onde existem distanciamentos geográficos consideráveis ou em domínios específicos para obter mensurações. 

Assinale a alternativa que apresenta o nome desta técnica para o levantamento de requisito.`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Questionário.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{`UNIUV/2015 - Adaptada) Quando um grupo se reúne para discutir ideias, é possível obter diferentes perspectivas, opiniões e experiências de um conjunto diverso de pessoas, o que pode levar a soluções mais criativas e eficazes.

Acerca dos conceitos de IHC, é correto definir brainstorming como:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Reunião desenvolvida para estimular a produção de ideias. O Coordenador seleciona e avalia as sugestões recebidas pelos Colaboradores.`}</Text>
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
            { /* == == == == == == == == == */ }

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */


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
                        <Text>{"Condução, Carga de Trabalho, Controle Explícito."}</Text>
                     </> }
                  />

                  <Exercices
                     id={2}
                     question={ <>
                        <Text>{`Os objetos de interação são elementos nas interfaces digitais que permitem aos usuários acessarem e manipularem conteúdo necessário à execução de suas tarefas, sendo próprios para isso. Existem diversos tipos de objetos de interação. 

Assinale abaixo a alternativa que contém somente objetos de interação:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Janelas, Combo Boxes, Barra de Ferramentas."}</Text>
                     </> }
                  />

                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{"Em um novo software de gestão de projetos, os desenvolvedores incluíram um sistema robusto de ajuda e tutoriais. Eles pretendem facilitar o aprendizado do"}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Suporte ao usuário e aprendizado facilitado."}</Text>
                     </> }
                  />

                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{`Uma plataforma de e-commerce está sendo redesenhada para oferecer uma melhor experiência ao usuário. A equipe de design decide incorporar elementos que permitam aos usuários personalizar a interface de acordo com suas preferências.

Que aspecto da ergonomia em IHC está sendo enfatizado nessa decisão?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Adaptabilidade da interface."}</Text>
                     </> }
                  />

                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{`IBGE/2013) A ergonomia cognitiva nas interfaces de programas de design gráfico tornou-se uma das principais contribuições do que se convencionou chamar de revolução digital. A facilitação do trabalho e a concepção do conceito de sistema amigável (user-friendly software) popularizaram tais programas a ponto de causarem uma reestruturação nos ambientes profissionais ligados às áreas gráficas.

Uma das características desses softwares encontra-se em:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Abundância de ícones operacionais reforçados pela redundância presente nos menus, nas barras de ferramentas e nos atalhos de teclado."}</Text>
                     </> }
                  />

                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{`SELECON/2022 - Adaptada) No que se refere à Interface Homem-Máquina, um termo é definido como a qualidade que um produto apresenta de poder ser utilizado por usuários específicos para atingir determinadas metas com eficiência, eficácia e satisfação num contexto de uso específico. Em resumo, os sistemas devem ser flexíveis e fáceis de usar e aprender. Além disso, devem despertar uma boa atitude nas pessoas.
Esse termo é denominado:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Usabilidade."}</Text>
                     </> }
                  />

                  <Exercices
                     id={7}
                     question={ <>
                        <Text>{`Você está trabalhando como desenvolvedor de software em uma empresa de tecnologia, responsável por criar interfaces gráficas para diversos aplicativos. Durante o desenvolvimento, percebe que a experiência do usuário está sendo comprometida por certas dificuldades que os usuários enfrentam ao tentar utilizar o sistema. Essas dificuldades podem afetar a usabilidade da interface e, consequentemente, a satisfação do cliente com o produto final. Para garantir que a interface gráfica seja eficiente e agradável, é essencial entender o conceito de "barreiras na usabilidade". Considerando esse contexto, como você definiria as barreiras na usabilidade de interfaces?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Problemas que impossibilitam que os usuários executem seu trabalho sem ajuda externa."}</Text>
                     </> }
                  />

                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{`Imagine que você é um analista de sistemas e está trabalhando na revisão de uma interface para um sistema de gerenciamento de tarefas. Durante a análise, percebe que as caixas de mensagens desempenham um papel crucial na comunicação com o usuário, especialmente quando ocorre algum erro ou quando é necessário informar sobre o andamento de um processo. Essas caixas de mensagens são fundamentais para guiar o usuário durante sua interação com o software, evitando confusões e garantindo que ele saiba o que está acontecendo em cada etapa. Com isso em mente, qual seria um possível uso correto para as caixas de mensagens dentro de uma interface?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Apresentação de um erro do sistema."}</Text>
                     </> }
                  />

                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{"Você trabalha como designer de interfaces para um estúdio de design gráfico que produz softwares de edição de imagens. Com a evolução das ferramentas digitais, a ergonomia cognitiva tornou-se cada vez mais relevante para garantir que esses softwares sejam intuitivos e acessíveis aos usuários, independentemente do seu nível de habilidade. É importante que a interface gráfica não apenas seja funcional, mas também que ajude a reduzir a carga cognitiva dos usuários, facilitando o processo de criação artística. Nesse contexto, considere as características que tornam um software de design gráfico verdadeiramente amigável ao usuário. Qual das opções a seguir melhor exemplifica essas características?"}</Text>
                     </> }
                     answer={ <>
                        <Text>{""}</Text>
                     </> }
                  />

                  <Exercices
                     id={10}
                     question={ <>
                        <Text>{""}</Text>
                     </> }
                     answer={ <>
                        <Text>{""}</Text>
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
                        <Text>{"Scrum"}</Text>
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
                        <Text>{"Brainstorming"}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{`Em um projeto de interface humano-computador, uma equipe adotou a técnica de prototipação de baixa fidelidade. Eles utilizaram papel e caneta para criar representações iniciais do design da interface, facilitando discussões rápidas e ajustes conforme o feedback dos usuários.

Qual é o principal benefício da utilização de p`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Facilitação da colaboração e feedback rápido."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{`Em um projeto de interface web para um aplicativo de compras online, a equipe de desenvolvimento se concentra na usabilidade e na experiência do usuário. Eles aplicam princípios de IHC para criar uma interface intuitiva e de fácil navegação. O foco está na clareza das informações e na facilidade de realização de tarefas comuns.

Qual é o principal objetivo ao aplicar os princípios de IHC neste contexto?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Facilitar a interação do usuário com a interface."}</Text>
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
                        <Text>{"Avaliação"}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{"Existem diversos tipos de processo de design de interface. Qual das alternativas abaixo apresenta um deles?"}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Ciclo de vida em estrela"}</Text>
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
                        <Text>{"É uma história sobre pessoas executando uma atividade."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{`CONSULPAM/2022 - Adaptada) A Engenharia de Requisitos agrupa as ações voltadas para a identificação das demandas dos usuários relacionadas a uma solução. Uma das técnicas para o levantamento desses requisitos, caracterizase por formulários com perguntas bem definidas são aplicadas aos usuários do sistema, objetivando obter informações quantificáveis para identificar requisitos, sendo comumente aplicado em cenários onde existem distanciamentos geográficos consideráveis ou em domínios específicos para obter mensurações. 

Assinale a alternativa que apresenta o nome desta técnica para o levantamento de requisito.`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Questionário."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{`UNIUV/2015 - Adaptada) Quando um grupo se reúne para discutir ideias, é possível obter diferentes perspectivas, opiniões e experiências de um conjunto diverso de pessoas, o que pode levar a soluções mais criativas e eficazes.

Acerca dos conceitos de IHC, é correto definir brainstorming como:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Reunião desenvolvida para estimular a produção de ideias. O Coordenador seleciona e avalia as sugestões recebidas pelos Colaboradores."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={10}
                     question={ <>
                        <Text>{""}</Text>
                     </> }
                     answer={ <>
                        <Text>{""}</Text>
                     </> }
                  />
                  
               </Section>
            </View>
            { /* == == == == == == == == == */ }

            { /** == [ Exercicios tema 4 ]
             * == == == == == == == == == */ }
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>Tema 4</Text>
                  <Text h={5} darkColor="#777">Avaliação De Interface Humano Computador</Text>
               </Header>
               <Section gap={16}>
                  
                  <Exercices
                     id={1}
                     question={ <>
                        <Text>{"IBFC/2014 - Adaptada) Usabilidade é a medida da facilidade com que as pessoas podem utilizar uma interface de usuário para atingir seus objetivos de forma eficiente, eficaz e satisfatória. Identifique o termo técnico abaixo que está diretamente relacionado com os conceitos de ergonomia e usabilidade:"}</Text>
                     </> }
                     answer={ <>
                        <Text>{"IHC"}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={2}
                     question={ <>
                        <Text>{"A usabilidade é capacidade do sistema em fazer com que o usuário tenha sucesso na execução de suas tarefas. Fácil aprendizagem, utilização eficiente e gestão de erros são pontos fundamentais para que o usuário perceba a boa usabilidade. Disponível em: https://www.teclogica.com.br/oque-e-usabilidade/. Acesso em: 23 set. 2022. Assinale a alternativa que contém somente parâmetros observados durante a técnica Ensaios de Interação. "}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Amostra de usuários, local de realização e verbalizações do usuário."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{"VUNESP/2022 - Adaptada) Testes de software são uma prática fundamental no desenvolvimento de software que consiste em executar um programa com o objetivo de encontrar defeitos, falhas ou erros no software. Considerando os chamados testes de unidade feitos no software de um sistema computacional, marque a alternativa correta. "}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Testam suas interfaces que recebem e transmitem dados. "}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{"Segundo a ISO 9241-11, usabilidade é a capacidade que um produto tem de ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação em contexto específico de uso. Disponível em: https://www.neomind.com.br/blog/aimportancia-da-usabilidade-em-software/. Acesso em: 23 set. 2022. Acerca dos conceitos da avaliação de interface humano-computador, analise as afirmativas sobre a técnica de Ensaio de Interação e marque a alternativa correta."}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Durante uma sessão de ensaios de interação, o comportamento dos usuários pode ser observado e comparado com os outros usuários que realizam uma mesma tarefa. "}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{"UFRJ/2021) Assinale, dentre as alternativas a seguir, uma das heurísticas de Nielsen, responsável por nortear as definições básicas de usabilidade na área de Interface HomemMáquina."}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Visualização do estado do sistema. "}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{"Um novo aplicativo de gerenciamento de tarefas foi lançado, visando atender às necessidades de profissionais autônomos. Durante a avaliação da interface, a equipe se concentrou em entender como esses profissionais interagem com as funcionalidades do aplicativo para melhorar a eficiência no gerenciamento de suas tarefas. Qual aspecto da interface é mais relevante na avaliação de um aplicativo de gerenciamento de tarefas para profissionais autônomos?"}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Capacidade de personalização da interface. "}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={7}
                     question={ <>
                        <Text>{"Avaliação de usabilidade é parte integrante do processo de design de interfaces com o usuário. As técnicas de avaliação existentespodem ser categorizadas de várias formas, mas uma delas focaliza se a avaliação é feita envolvendo ou não usuários. Considere as afirmações abaixo. I - Avaliação Heurística é uma técnica de avaliação que NÃO envolve usuários. II - Inspeção é uma técnica de avaliação que NÃO envolve usuários. III Estudo de Campo é uma técnica de avaliação que NÃO envolve usuários. Quais estão corretas?"}</Text>
                     </> }
                     answer={ <>
                        <Text>{"Apenas I e II"}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{"(ESAF/2015 - Adaptada) Segundo Jakob Nielsen, um pesquisador reconhecido e precursor na área de usabilidade, a engenharia de usabilidade visa ao desenvolvimento de interfaces com determinados atributos. Em relação a esses atributos, marque a alternativa correta: "}</Text>
                     </> }
                     answer={ <>
                        <Text>{"prevenção de erros do usuário significa que o sistema deve prevenir erros cometidos pelo usuário quando o utiliza em suas atividades."}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{""}</Text>
                     </> }
                     answer={ <>
                        <Text>{""}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={10}
                     question={ <>
                        <Text>{""}</Text>
                     </> }
                     answer={ <>
                        <Text>{""}</Text>
                     </> }
                  />
                  
               </Section>
            </View>
            { /* == == == == == == == == == */ }

            { /** == [ Exercicios tema 5 ]
             * == == == == == == == == == */ }
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>Tema 5</Text>
                  <Text h={5} darkColor="#777">Acessibilidade à Web</Text>
               </Header>
               <Section gap={16}>
                  
                  <Exercices
                     id={1}
                     question={ <>
                        <Text>{`Para que a Web seja acessível a pessoas com deficiência, vários componentes
de desenvolvimento Web e ferramentas de interação devem ser coordenados,
dentre os quais:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Conteúdo e tocadores de mídia (media players)`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={2}
                     question={ <>
                        <Text>{`Qual a função do componente "Agentes de Usuário" quando uma pessoa cega
acessa um texto alternativo com imagens com apoio de um software leitor de
tela:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Fornecem uma interface humana e de máquina para o texto alternativo.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={3}
                     question={ <>
                        <Text>{`O desenvolvedor de conteúdo (código) Web é o profissional responsável pela
codificação semântica do conteúdo Web. Qual a dica de boas práticas pode
apoiar este profissional no cumprimento dos requisitos das chamadas Diretrizes
de Acessibilidade de Conteúdo da Web WCAG):`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Associe um rótulo a cada campo de entrada de um formulário.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={4}
                     question={ <>
                        <Text>{`A World Wide Web, também conhecida como WWW ou simplesmente Web, é
um sistema de informação baseado em hipertexto que permite o acesso a
documentos interconectados e vinculados pela internet. Foi desenvolvida por
qual pesquisador?`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Tim Berners-Lee - reconhecido por ter desenvolvido o primeiro servidor web, a primeira biblioteca de hipertexto e a primeira linguagem para criação de páginas web.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={5}
                     question={ <>
                        <Text>{`Acessibilidade Digital é a eliminação de barreiras na Web. O conceito
pressupõe que os sites e portais sejam projetados de modo que todas as
pessoas possam perceber, entender, navegar e interagir de maneira efetiva
com as páginas.
Disponível em: https://www.gov.br/governodigital/pt-br/acessibilidade-digital
Acesso em: 26 set. 2022.
São consideradas dimensões de Acessibilidade:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Arquitetônica, metodológica, instrumental, programática, atitudinal e
comunicacional.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={6}
                     question={ <>
                        <Text>{`No que se refere à World Wide Web Consortium W3C, comunidade
organizada por membros internacionais, é correto afirmar que ela possui como
objetivos marcos:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Oferecer diretrizes, notas, artigos, tutoriais e afins aos profissionais
que desenvolvem para Web, visando possibilitar uma Web cada vez
mais acessível.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={7}
                     question={ <>
                        <Text>{`A W3C publica documentos que definem as tecnologias Web. Estes
documentos seguem um processo destinado a promover o consenso, justiça,
responsabilidade pública e qualidade. No final deste processo, a W3C publica
recomendações, que são consideradas como padrões Web. A recomendação
que apresenta as diretrizes que explicam como tornar o conteúdo Web
acessível a pessoas com deficiência é a`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Web Content Accessibility Guidelines WCAG.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={8}
                     question={ <>
                        <Text>{`(FAFIPA/2019 - Adaptada) Um novo relatório indica que 99% dos sites que
estão ativos no Brasil não são acessíveis para pessoas com deficiência. O
levantamento foi realizado pela BigData Corp, empresa especializada em
trabalhar com um grande conjunto de dados Big Data), e o Movimento Web
Para Todos (MWPT).
O Brasil possui atualmente mais de 24 milhões de portais registrados. No
entanto, apenas 14 milhões são ativos, ou seja, endereços atualizados
frequentemente e que foram o foco deste estudo. De todos, somente 0,61% dos
sites passaram em testes de acessibilidade, e 99,39% tiveram pelo menos uma
falha que dificulta a navegação de pessoas com deficiência.
Sites governamentais - que possuem "
.gov.br" no domínio - também foram
analisados e o resultado tampouco é positivo: apenas 0,34% foram aprovados.
Isso significa que 99,66% dos portais de prefeituras, estados ou ministérios,
por exemplo, não estão completamente acessíveis.
A pesquisa avaliou questões como linguagem HTML, problemas em
formulários, links e a presença de descrição de imagens, recurso que permite a
explicação de fotografias para pessoas com deficiência visual. Práticas
consideradas adequadas estão disponíveis nas Diretrizes de Acessibilidade
para Conteúdo Web WCAG2.1, mantida pela World Wide Web Consortium
W3C, organização mundial de padronização da web.
"Coisas simples, como acessar aplicativos de relacionamentos, consultar
preços e entrar na conta bancária podem ser feitas com o celular ou no
desktop, mas algumas dessas tecnologias são excludentes para pessoas com
deficiência"
, afirma Simone Freire, idealizadora do MWPT.
"O mundo digital
precisa derrubar as barreiras de navegação para melhorar o acesso de todas as
pessoas.
"
Texto adaptado de:
https://revistagalileu.globo.com/Tecnologia/noticia/2019/10/menos-de-1-dossites-brasileiros-saoacessiveis-para-pessoas-com-deficiencia.html. Acesso em
06 de novembro de 2019.
De acordo com o texto, é CORRETO afirmar que:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Portais brasileiros ainda não são completamente acessíveis para
pessoas com deficiência.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={9}
                     question={ <>
                        <Text>{`De acordo com as Diretrizes de Acessibilidade para Conteúdo Web WCAG 2.1,
os quatro princípios que fundamentam a acessibilidade estabelecem que todos
os sites acessíveis devem possuir conteúdo que seja`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Perceptível, operável, compreensível e robusto.`}</Text>
                     </> }
                  />
                  
                  <Exercices
                     id={10}
                     question={ <>
                        <Text>{`(Avança SP/2022 - Adaptada) Uma lei é um conjunto de regras e normas
estabelecidas por uma autoridade competente, seja ela legislativa, executiva ou
judiciária. A lei tem como objetivo regular o comportamento das pessoas e das
instituições, promover a justiça, a ordem e a segurança na sociedade. Segundo
a Lei 13.146/15, o Estatuto da Pessoa com Deficiência, entende-se por desenho
universal:`}</Text>
                     </> }
                     answer={ <>
                        <Text>{`Concepção de produtos, ambientes, programas e serviços a serem
usados por todas as pessoas, sem necessidade de adaptação ou de
projeto específico, incluindo os recursos de tecnologia assistiva.`}</Text>
                     </> }
                  />
                  
               </Section>
            </View>
            { /* == == == == == == == == == */ }

            { /** == [ AV ]
             * == == == == == == == == == */ }
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>AV</Text>
                  <Text h={5} darkColor="#777"></Text>
               </Header>
               <Section gap={16}>

                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/1.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/2.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/3.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/4.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/5.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/6.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/7.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/8.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/9.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/10.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/11.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/12.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/13.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/14.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/15.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/16.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/17.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/18.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/19.png" ) }/>
                  
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/20.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/21.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/22.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/23.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/24.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/25.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/26.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/27.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/28.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/29.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/30.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/31.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/32.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/33.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/34.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/35.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/36.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/37.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/38.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/39.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/40.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/41.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/42.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/43.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/44.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/45.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/46.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/47.png" ) }/>
                  
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/48.png" ) }/>
                  
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/49.png" ) }/>
                  <PixBG h={300} source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/50.png" ) }/>
                  
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/51.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/52.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/53.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/54.png" ) }/>
                  <PixBG source={ require( "@/assets/images/disciplinas/engenharia-de-usabilidade/exercicios/55.png" ) }/>
                  
                  <Exercices
                     id={1}
                     question={ <>
                        <Text>{``}</Text>
                     </> }
                     answer={ <>
                        <Text>{``}</Text>
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
            { /* == == == == == == == == == */ }

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
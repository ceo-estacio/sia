

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


/** == [ exports ]
 * == == == == == == == == == */
export default function ExercíciosView( { ...props } ) {

   return( <>
      <HomePage>
         <ScrollView>
            <View gap={16}>
               <Header ph={24} pv={24} bg={ Palette.dark.bar }>
                  <Text h={3}>{ "Tema 2" }</Text>
                  <Text h={5} darkColor="#777">{ "Programação Cliente Com Javascript" }</Text>
               </Header>
               <Section darkColor="#212329" lightColor="#e5e5e5" gap={16}>
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
                  
                  <Exercices 
                     id={2}
                     question={ <>
                        <Text>{`Em um projeto web, um desenvolvedor opta por utilizar o JQuery para simplificar a manipulação do DOM. Ele necessita implementar uma função que esconda todos os elementos <p> com a classe .destaque ao clicar em um botão específico.\n\n Qual linha de código em JQuery realiza corretamente a ação descrita acima?`}</Text>
                     </> }
                     answer={ <>
                        <Text>
                           {`$("button").click(function() { $("p.destaque").hide(); });`}
                        </Text>
                     </> }
                  />

                  <Exercices 
                     id={3}
                     question={ <>
                        <Text>
                           {`Um programador está trabalhando em uma aplicação web e precisa garantir que uma variável seja acessível somente dentro do bloco onde foi declarada, evitando conflitos com outras partes do código.\n\n Qual palavra-chave em Javascript deve ser usada para declarar a variável com o escopo desejado?`}
                        </Text>
                     </> }
                     answer={ <>
                        <Text>
                           {`let.`}
                        </Text>
                     </> }
                  />

                  <Exercices 
                     id={4}
                     question={ <>
                        <Text>
                           {`O jQuery pode selecionar elementos HTML a partir de seletores, otimizando o desenvolvimento. Sobre a utilização de seletores no jQuery, é correto afirmar:`}
                        </Text>
                     </> }
                     answer={ <>
                        <Text>
                           {`$('p:first'); retornará o primeiro dos elementos p.`}
                        </Text>
                     </> }
                  />

                  <Exercices 
                     id={5}
                     question={ <>
                        <Text>
                           {`Ao contrário da palavra- chave "var", a palavra- chave "let", tem como função restringir o acesso a variáveis dentro de um bloco. Neste sentido, o que acontece quando executamos o código abaixo em um navegador com suporte a ECMAScript versão ES6 ou superior?`}
                        </Text>
                        <ImageBackground style={{ width: "100%", height: 250, }}
                        resizeMode="contain"
                           source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/exercicios/2.png" ) }
                        />
                     </> }
                     answer={ <>
                        <Text>
                           {`O valor da variável teste será sempre 200. `}
                        </Text>
                     </> }
                  />

                  <Exercices 
                     id={6}
                     question={ <>
                        <Text>
                           {`Considere a página abaixo, construída utilizando jQuery: \n   $(document).ready(function() { ..I... });    Esconder Texto do parágrafo.\nPara que, ao se clicar no botão Esconder, o texto do parágrafo se torne oculto, deve-se preencher a lacuna I com: `}
                        </Text>
                     </> }
                     answer={ <>
                        <Text>
                           {`$('button').click(function(){$('p.par').hide();}); `}
                        </Text>
                     </> }
                  />

                  <Exercices 
                     id={7}
                     question={ <>
                        <Text>
                           {`Em um projeto web, ao implementar uma tabela HTML dinâmica utilizando jQuery e AJAX, os dados são recebidos do servidor no formato JSON. A tabela é atualizada automaticamente sem recarregar a página, melhorando a experiência do usuário.\n\nQual método HTTP é mais adequado para a realização dessa tarefa e por quê?`}
                        </Text>
                     </> }
                     answer={ <>
                        <Text>
                           {`GET, pois é utilizado para solicitar dados de um recurso especificado.`}
                        </Text>
                     </> }
                  />

                  <Content>
                  </Content>
               </Section>
            </View>

            <View pv={24} >
               <Header pd={24}>
                  <Text h={3}>Tema 3</Text>
                  <Text h={5}>VueJS</Text>
               </Header>
               <Section gap={16}>

                  <Exercices id={1}
                     question={<>
                        <Text>Um desenvolvedor, ao trabalhar com o componente de lista de cidades, não obteve sucesso ao utilizar o componente filho CardCidade.vue, veja abaixo o código construído por ele. Qual das alternativas apresenta o motivo pelo qual a página não funcionou corretamente?</Text>
                        <PixBG source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/exercicios/t3-1.png" ) }/>
                     </>}
                     answer={<Text>Ele não registrou o componente.</Text>}
                  />

                  <Exercices id={2}
                     question={<Text>{`Vue.js é um framework extremamente versátil e se tornou essencial em aplicações de pequeno, médio e grande porte. O Vue tem a capacidade de interagir com diversos elementos do documento HTML. Qual diretiva do Vue é utilizada num input do tipo text para que ele esteja ligado a uma variável da Vue instance (two way data binding)?`}</Text>}
                     answer={<Text>v-model.</Text>}
                  />

                  <Exercices id={3}
                     question={<Text>{`O carregamento do Javascript ocorre após o carregamento do HTML, pois este contém o caminho para os arquivos JS ou sua declaração direta dentro da tag . Qual diretiva é utilizada (juntamente com uma regra de CSS) para evitar que partes do HTML que contenham variáveis do Vue pisquem antes de serem devidamente processadas pelo framework?`}</Text>}
                     answer={<Text>v-cloak</Text>}
                  />

                  <Exercices id={4}
                     question={<Text>Vue.js é um framework JavaScript leve, de rápida assimilação para os iniciantes e amplamente utilizado no mercado mundial. Com relação ao framework Vue, qual entidade/empresa é responsável pela sua manutenção?</Text>}
                     answer={<Text>A comunidade.</Text>}
                  />

                  <Exercices id={5}
                     question={<Text>Devido a sua sintaxe flexível o Vue possibilita a redução do número de instruções presentes no código sem perder a eficiência na realização da tarefa. Qual das alternativas abaixo representa uma maneira possível de um componente filho passar informações para um componente pai?</Text>}
                     answer={<Text>Através de eventos.</Text>}
                  />

                  <Exercices id={6}
                     question={<Text>Componentes são blocos de código reutilizáveis, que são usados para criar uma base de código modular e de fácil manutenção. Qual alternativa abaixo contém os 3 blocos básicos de um Single File Component?</Text>}
                     answer={<Text>template, script, style</Text>}
                  />

                  <Exercices id={7}
                     question={<Text>De modo geral, todas as variáveis devem ser inicializadas com a atribuição de valores. Posteriormente, esses valores podem ser exibidos através da utilização de palavras-chaves da linguagem. Qual diretiva pode ser utilizada para colocar o valor textual de uma variável como texto renderizado no HTML dentro de uma tag H1?</Text>}
                     answer={<Text>v-text</Text>}
                  />

                  <Exercices id={8}
                     question={<Text>Montar a instância no HTML é uma tarefa relativamente simples. O que deve ser passado dentro do método mount ao criar uma Vue instance, após importar o arquivo do Vue JS?</Text>}
                     answer={<Text>Um seletor css relativo ao elemento raiz onde queremos montar aquela instância.</Text>}
                  />

                  <Exercices id={9}
                     question={<Text>Funções são uma parte importante da programação, permitindo o isolamento de código e a reutilização de partes importantes. Qual das alternativas abaixo representa o bloco dentro da nossa Vue instance adequado para colocarmos as funções, também chamadas de métodos?</Text>}
                     answer={<Text>No objeto methods.</Text>}
                  />

                  <Exercices id={10}
                     question={<Text>Vue.js é um framework JavaScript que possui uma comunidade ativa, contando com uma vasta documentação disponível para consulta e aprendizagem.  Acerca dos seus conhecimentos sobre Vue, qual seria o retorno típico da função data(), utilizada na Vue instance?</Text>}
                     answer={<Text>um objeto.</Text>}
                  />

               </Section>
            </View>

            <View pv={24} >
               <Header pd={24}>
                  <Text h={3}>Tema 4</Text>
                  <Text h={5}>Programação Cliente Com Typescript</Text>
               </Header>
               <Section gap={24} darkColor={ Palette.dark.bar }>
                  <Exercices id={1}
                     question={ <>
                        <Text>Considere o trecho de código:</Text>
                        <PixBG source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/exercicios/t4-q1.jpg" ) }/>
                        <Text>Selecione a opção correta com o resultado da execução do código.</Text>
                     </> }
                     answer={ <Text>8</Text> }
                  />

                  <Exercices id={2}
                     question={ <Text>{`
Considere o trecho de código:</p>
function y(a: number|string):string
{
return (typeof a === 'number' ? "número" : "string");
}
console.log(y(Teste')); 
Selecione a opção correta com o resultado da execução do código.
                     `}</Text> }
                     answer={ <Text>string</Text> }
                  />
                  
                  <Exercices id={3}
                     question={ <Text>Em relação às propriedades da programação orientada a objetos que o TypeScript utiliza, selecione a opção correta que está relacionada a reusabilidade de código.</Text> }
                     answer={ <Text>herança</Text> }
                  />
                  
                  <Exercices id={4}
                     question={ <>
                        <Text>Considere o trecho de código:</Text>
                        <PixBG h={350} source={ require( "@/assets/images/disciplinas/desenvolvimento-de-front-end/exercicios/t4-q4.jpg" ) }/>
                        <Text>Selecione a opção correta com o resultado da execução do código.</Text>
                     </> }
                     answer={ <Text>string</Text> }
                  />
                  
                  <Exercices id={5}
                     question={ <>
                        <Text>Considere o trecho de código:</Text>
                        <Text>{`let s = (x: number, y: number): number => x+y;
console.log(s(s(1,2),s(3,4)));\n`}</Text>
                        <Text>Selecione a opção correta com o resultado da execução do código.</Text>
                     </> }
                     answer={ <Text>10</Text> }
                  />
                  
                  <Exercices id={6}
                     question={ <>
                        <Text>Considere o trecho de código:</Text>
                        <Text>{`function f1(msg: string, num: number): number {
return msg+num;
}
let tnum: number = 10;
let tmsg: string = "10";
console.log(f1(tmsg, tnum))`}</Text>
                        <Text>Selecione a opção correta com o resultado da execução do código.</Text>
                     </> }
                     answer={ <Text>"1010"</Text> }
                  />
                  
                  <Exercices id={7}
                     question={ <>
                        <Text>Considere o trecho de código:</Text>
                        <Text>{`let vetor: number[] = [ 1, 5, 9, 10, 15 ];
const e: number = vetor.indexOf(5);
console.log( e );`}</Text>
                        <Text>Selecione a opção correta com o resultado da execução do código.</Text>
                     </> }
                     answer={ <Text>1</Text> }
                  />
                  
                  <Exercices id={8}
                     question={ <>
                        <Text>{`Considere o trecho de código que deve ser chamado por uma função externa:
class Teste {
      lacuna imprimir = () => {
            console.log( 'imprimir teste' );
      }
}
const t = new Teste();
console.log( t.imprimir() )`}</Text>
                     
                     </> }
                     answer={ <Text>public</Text> }
                  />
                  
                  <Exercices id={9}
                     question={ <Text>{`Considere o trecho de código:
class P {
      public exibir_informacao( a: number | string ): void {
            console.log( 'resultado' );
      }
}
const obj1 = new P();
obj1.exibir_informacao( 10 );
Selecione a opção correta com o resultado da execução do código.`}</Text> }
                     answer={ <Text>vai exibir a frase: "resultado"</Text> }
                  />
                  
                  <Exercices id={10}
                     question={ <Text>{`Considere o trecho de código:
function w( n: number ): number {
      if( n == 0 ) {
            return 0;
      }
      if( n == 1 ) {
            return 1;
      }
      return n + w( n - 1 );
}
console.log( w( 5 ) );`}</Text> }
                     answer={ <Text>15</Text> }
                  />
                  
                  <Exercices id={11}
                     question={ <Text>{`Considere o trecho de código:
let valor: number = (22%10) + 1;
console.log(valor);
Selecione a opção correta com o resultado da execução do código.`}</Text> }
                     answer={ <Text>3</Text> }
                  />
                  

                  <Exercices id={12}
                     question={ <Text>O TypeScript dá suporte ao uso de funções. Uma função nada mais é do que uma subrotina usada em um programa. Selecione a opção correta que explique qual o objetivo da função construtora de uma classe do TypeScript.</Text> }
                     answer={ <Text>Estabelecer o comportamento inicial do objeto.</Text> }
                  />

                  <Exercices id={13}
                     question={<Text>{`Considere que o trecho de código abaixo está correto:
class Teste extends R{
public imprimir = () => {
console.log(1imprimir teste');
}
}
selecione a opção correta a respeito do código.`}</Text>}
                     answer={<Text>R é a superclasse de Teste</Text>}
                  />

                  <Exercices id={14} 
                     question={<Text>{`TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.
Disponível em: https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/. Acesso em: 21 out. 2022.
A respeito do TypeScript, selecione a opção correta.`}</Text>}
                     answer={<Text>Possui código aberto</Text>}
                  />
                  
                  <Exercices id={4} 
                     question={<Text>{`Considere o trecho de código:
function t(a: number|string):number
{
let r:number= (typeof a === 'number' ? 1 : 2);
return r**(r+r);
}
console.log(t('teste'));
Selecione a opção correta com o resultado da execução do código`}</Text>}
                     answer={<Text>16</Text>}
                  />
                  
                  <Exercices id={4} 
                     question={<Text>{`let n: number = ("teste.").length;\nconsole.log(n);`}</Text>}
                     answer={<Text>6</Text>}
                  />
                  
                  <Exercices id={4} 
                     question={<Text></Text>}
                     answer={<Text></Text>}
                  />
                  
                  <Exercices id={4} 
                     question={<Text></Text>}
                     answer={<Text></Text>}
                  />

               </Section>
            </View>

            <View pv={24}>
               <Header pd={24}>
                  <Text h={3}>Tema 5</Text>
                  <Text h={5}>Angular</Text>
               </Header>
               <View gap={24}>
                     <Exercices id={1} 
                        question={<Text>Na engenharia de software, definimos acoplamento como o nível de dependência encontrada entre os diversos elementos de um sistema, e quanto maior for o acoplamento em um sistema, maior será a dificuldade de manutenção. Qualquer plataforma de desenvolvimento atual busca meios para diminuir o acoplamento nos sistemas. No Angular, garantimos o baixo acoplamento dos serviços através de uma técnica específica. Qual o nome da técnica utilizada?</Text>}
                        answer={<Text>Injeção de dependências</Text>}
                     />

                     <Exercices id={2} 
                        question={<Text>Angular é um framework para desenvolver aplicações em diversas plataformas, mantido e desenvolvido pela Google. Ele vem com um conjunto de bibliotecas poderosas que podemos importar, possibilitando construir aplicações com uma qualidade e produtividade surpreendente. O Angular usa qual linguagem como padrão?</Text>}
                        answer={<Text>TypeScript</Text>}
                     />

                     <Exercices id={3} 
                        question={<Text>Atualmente, temos meios para a definição de rotas de acesso aos recursos do sistema em diversas tecnologias de desenvolvimento, tanto no front-end quanto no back-end, e não seria diferente no Angular. Adotando o modelo de rotas, temos maior controle sobre a utilização dos recursos, permitindo que a autenticação e autorização sejam efetuadas de forma simples, já que ocorre um modo de acesso centralizado. Na estrutura do Angular, qual elemento é responsável pela exibição do conteúdo roteado?</Text>}
                        answer={<Text>router-outlet</Text>}
                     />

                     <Exercices id={4} 
                        question={<Text>Em engenharia de software, um padrão de projeto é uma solução geral para um problema que ocorre com frequência dentro de determinado contexto no projeto de software. Qual padrão de projeto comportamental permite que um objeto notifique outros objetos sobre alterações em seu estado?</Text>}
                        answer={<Text>Observer</Text>}
                     />

                     <Exercices id={5} 
                        question={<Text>Através do paradigma da programação reativa, temos um modelo simples para o tratamento de elementos assíncronos, com base no padrão Observer, e a biblioteca RxJS é responsável pela viabilização desse modelo de programação para o Angular. Através da biblioteca, temos acesso a um conjunto de componentes, com papéis bem definidos na implementação de processos que devem ser tratados de forma assíncrona. Nesse contexto, qual componente representa a fonte de informações para o processamento assíncrono, sem possibilidade de assinantes múltiplos?</Text>}
                        answer={<Text>{`Observable\n\nse forem necessários multiplos assinantes: Subject`}</Text>}
                     />

                     <Exercices id={6} 
                        question={<Text>Quando trabalhamos em sistemas Web, a responsabilidade sobre a persistência dos dados é da tecnologia servidora utilizada, com o fornecimento das informações necessárias através do protocolo HTTP e seus diferentes métodos. Por meio da inclusão de HttpClientModule, podemos efetuar a comunicação com o servidor de forma simples, a partir do front-end criado em Angular, onde o objeto injetado, do tipo HttpClient, oferece os métodos necessários atender a todos os modos de utilização do HTTP. Qual seria o método para solicitar a inclusão de um registro?</Text>}
                        answer={<Text>Post</Text>}
                     />

                     <Exercices id={7} 
                        question={<Text>As tecnologias relacionais, que apresentam uma grande preocupação com a manutenção de relacionamentos entre as entidades, nem sempre oferecem resposta em tempo adequado para grandes massas de dados. Com o advento do big data, cuja a quantidade de dados é expressiva, opções ao armazenamento relacional passaram a ser utilizadas, popularizando os repositórios classificados como NoSQL, que por apresentarem grande heterogeneidade, são classificados em diferentes grupos, de acordo com a forma adotada para representar a informação. Uma opção de banco muito utilizada atualmente é o MongoDB, que é classificado como uma base do tipo</Text>}
                        answer={<Text>Documental.</Text>}
                     />

                     <Exercices id={8} 
                        question={<Text>Com o surgimento do Material Design, foi possível determinar um padrão para a criação de interfaces, envolvendo diferentes plataformas, incluindo preocupações com responsividade, usabilidade e acessibilidade. São especificados os melhores padrões de cores, fontes, dimensões e unidades de medida, além de termos o conceito visual de componentes padronizados, que são implementados nas diferentes plataformas, trazendo homogeneidade para os sistemas. Para o Angular, seu uso é baseado na importação da biblioteca adequada e aplicação de atributos nos componentes comuns do HTML, bem como através de um conjunto de seletores próprios. Por exemplo, um botão poderia ser configurado para exibição elevada, ao mesmo tempo em que representa a opção negativa para uma pergunta, utilizando a configuração</Text>}
                        answer={<Text>mat-raised-button color="warn"</Text>}
                     />

                     <Exercices id={9} 
                        question={<Text>Os padrões de desenvolvimento visam resolver problemas recorrentes na implementação de sistemas, com a definição de soluções padronizadas, amplamente testadas e com modelos bem-organizados, utilizando a notação UML. Supondo que os gastos com a manutenção de um determinado sistema estejam muito altos, devido à proliferação de instruções SQL ao longo de todo o código, e você tenha sido contratado para refatorá-lo, qual padrão deverá utilizar para a melhoria da estratégia de persistência e consequente redução do custo de manutenção?</Text>}
                        answer={<Text>Data Access Object</Text>}
                     />

                     <Exercices id={10}
                        question={<Text>As tags semânticas trouxeram para o HTML 5 a possibilidade de transmitir significado para as áreas nas quais uma página é dividida, viabilizando a melhoria no reconhecimento a partir dos sistemas de busca, como o que é utilizado pelo Google. Qual dessas tags deve ser utilizada para configurar a porção inferior de uma página?</Text>}
                        answer={<Text>footer</Text>}
                     />

                     <Exercices id={11}
                        question={<Text>{`Para qualquer programador Angular, é fundamental conhecer a utilização da biblioteca RxJS para implementação de funcionalidades assíncronas. Considere o fragmento de código seguinte.
---------
const observable = interval(1000)
      .pipe(map((x:number)=>x*x))
      .pipe(observeOn(asyncScheduler));
---------
Para que serve o método pipe no código apresentado?`}</Text>}
                        answer={<Text>Direcionar o fluxo de dados para o processamento seguinte, antes de enviar o resultado.</Text>}
                     />

                     <Exercices id={12}
                        question={<Text>{`Uma novidade interessante do HTML 5 foi a definição de folhas de estilo por escopo, trazendo a possibilidade de adotar formatações específicas para o elemento e seus filhos, sem interferir no restante da página. Essa característica é utilizada pelos componentes do Angular, onde temos formatações CSS específicas, adotadas no escopo de utilização do seletor. Observe o fragmento de código que é apresentado a seguir.
---------
.container{
display: flex; flex-direction: row; flex-wrap: wrap;
width: 100%; overflowY: scroll; height:230px;
}
---------
Qual informação é verdadeira, acerca da formatação que foi definida?
`}</Text>}
                        answer={<Text>Permite definir uma área de exibição na forma de grid, com o posicionamento sequencial de elementos e a quebra de linha quando não há mais espaço na horizontal.</Text>}
                     />

                     <Exercices id={13}
                        question={<Text>Na estrutura de um projeto baseado em Angular, temos um conjunto de arquivos no diretório raiz voltados para a configuração geral do aplicativo. Entre os arquivos encontrados, temos um com o nome polyfills.ts, que tem como objetivo:</Text>}
                        answer={<Text>Incluir elementos para compatibilidade em diferentes plataformas e navegadores.</Text>}
                     />

                     <Exercices id={14}
                        question={<Text>Partindo de uma iniciativa do Google, com foco no sistema Android, o Material Design trouxe diretivas relacionadas ao design que se tornaram uma referência de mercado, visando sempre a garantia de usabilidade, responsividade e acessibilidade nas mais diversas plataformas. Além das diretivas estabelecidas, temos a especificação de componentes padronizados e modelo para implementação em cada plataforma, como Android, Web, iOS e Flutter. Os componentes podem ser categorizados de acordo com seus objetivos, e segundo essa classificação, qual das opções a seguir contém apenas elementos para comunicação, feita através da exibição de mensagens?</Text>}
                        answer={<Text>SnackBar, Banner e Dialog</Text>}
                     />

                     <Exercices id={15}
                        question={<Text>Para trabalhar com as coleções do MongoDB a partir de um serviço Web, construído com base no NodeJS, devemos inicialmente obter uma conexão com a base de dados, através de um objeto do tipo MongoClient, oferecido na biblioteca mongodb. A partir da conexão, acessamos as coleções, e podemos utilizar os métodos que são disponibilizados por elas para manipulação e consulta de documentos. Qual desses métodos permite a inclusão de um documento?</Text>}
                        answer={<Text>insertOne</Text>}
                     />

                     <Exercices id={16}
                        question={<Text>No Angular é possível efetuar as críticas sobre os campos de um formulário durante o seu preenchimento, com base na tecnologia de formulários reativos. O processo envolve a criação de um FormGroup, ao nível da classe, contendo as configurações para cada campo, incluindo a possibilidade de uma lista de validadores, e o grupo é associado ao formulário, no modelo. Para uma situação em que o usuário deve aceitar as regras do site para se cadastrar, com a marcação de uma caixa de seleção, qual seria o validador correto para o campo?</Text>}
                        answer={<Text>Validators.requiredTrue</Text>}
                     />

                     <Exercices id={17}
                        question={<Text>Formulários são a forma padrão para viabilizar a entrada de dados em sistemas cadastrais para Web, podendo ser especificados no Angular ao nível dos modelos HTML. No entanto, para a construção de um formulário em um front-end baseado no Angular, temos algumas regras de implementação que devem ser observadas. Qual das opções a seguir constitui uma regra válida para a implementação de formulários no Angular?</Text>}
                        answer={<Text>O evento de submissão do formulário deve ser associado a um método da classe.</Text>}
                     />

                     <Exercices id={18}
                        question={<Text>{`Considerando um serviço no estilo REST, implementado com base no NodeJS e na biblioteca Express, e uma entidade Aluno, persistida no MongoDB via MongoClient, qual a assinatura do método, no servidor, 
para responder à chamada http://localhost:3000/alunos/29891, 
obtendo como retorno os dados do aluno de matrícula 29891 no formato JSON?  `}</Text>}
                        answer={<Text>router.get('/alunos/:id', async (req, res) => { });</Text>}
                     />

                     <Exercices id={19}
                        question={<Text>Para diversas funcionalidades de um sistema ocorre a necessidade de um usuário válido, ou seja, deve haver algum meio de autenticação disponível. Em termos do Angular, o acesso a uma rota pode ser controlado de forma simples, com base em um serviço para verificação de usuário que é associado às rotas privadas. Qual interface deve ser implementada pelo serviço?</Text>}
                        answer={<Text>CanActivate</Text>}
                     />

                     <Exercices id={20}
                        question={<Text>Durante o desenvolvimento de um sistema, principalmente nas fases iniciais, alguns recursos necessários para a funcionalidade desejada podem não estar disponíveis, impedindo a execução de testes. No entanto, podemos emular os recursos, permitindo a continuidade do projeto. No caso do Angular, qual interface permite emular um servidor REST com persistência em banco de dados?</Text>}
                        answer={<Text>InMemoryDbService</Text>}
                     />

                     <Exercices id={21}
                        question={<Text>A biblioteca RxJS é uma excelente opção para a implementação de elementos assíncronos, com a substituição das funções assíncronas (async) e diretivas de espera (await) por um padrão Observer, onde temos fontes de dados assinadas, que enviam suas alterações para o conjunto de assinantes, com a informação sendo tratada em funções de resposta. Considerando a criação de um aplicativo para acompanhamento estatístico, onde diversos gráficos são atualizados de forma simultânea, a cada vez que uma nova pesquisa é cadastrada, qual seria o componente da biblioteca RxJS adequado para emissão da informação atualizada?</Text>}
                        answer={<Text>Subject</Text>}
                     />

                     <Exercices id={22}
                        question={<Text>Devido às exigências de qualidade e prazos extremamente curtos para a criação de softwares, produtividade é um fator essencial para a área de desenvolvimento, e embora seja possível criar projetos para Angular através de simples editores de texto, o Visual Studio Code é um excelente ferramental para ganho de produtividade no uso do Angular. Entre as funcionalidades oferecidas pelo ambiente, qual delas permite a identificação rápida de instruções de controle, variáveis, atributos, métodos e demais tipos de elementos adotados na linguagem?</Text>}
                        answer={<Text>syntax highlighting</Text>}
                     />

                     <Exercices id={23}
                        question={<Text>O uso de decorações, ou anotações, permite a definição de configurações para os diversos elementos do Angular de forma simples, como na definição das propriedades do módulo, por meio da anotação NgModule. Qual dos atributos de NgModule define o componente principal de um módulo do Angular?</Text>}
                        answer={<Text>bootstrap</Text>}
                     />

                     <Exercices id={24}
                        question={<Text>Com a estrutura modular do Angular, conseguimos acrescentar funcionalidades ao sistema de forma muito simples, através da importação dos módulos necessários. Entre os módulos mais comuns, em um sistema baseado no Angular, qual deles permite gerenciar a troca de conteúdo com base em rotas, dentro de uma interface no estilo SPA (Single Page Application)?</Text>}
                        answer={<Text>RouterModule</Text>}
                     />

                     <Exercices id={25}
                        question={<Text>Em um sistema de controle de estacionamento, devem ser exibidas apenas as vagas vazias na página de listagem, através de tags div configuradas como painéis, permitindo que o operador associe a vaga ao carro que estiver acessando o local naquele momento. Qual diretiva do Angular permitirá condicionar o desenho da div ao estado atual da vaga?</Text>}
                        answer={<Text>ngIf</Text>}
                     />

                     <Exercices id={26}
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={2}
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={2}
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={2}
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

               </View>
            </View>

         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
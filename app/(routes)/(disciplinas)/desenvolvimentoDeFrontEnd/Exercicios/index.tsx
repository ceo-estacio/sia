

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

               </Section>
            </View>

            <View pv={24}>
               <Header pd={24}>
                  <Text h={3}>Tema 5</Text>
                  <Text h={5}>Angular</Text>
               </Header>
               <View>
                     <Exercices id={1} 
                        question={<Text>Na engenharia de software, definimos acoplamento como o nível de dependência encontrada entre os diversos elementos de um sistema, e quanto maior for o acoplamento em um sistema, maior será a dificuldade de manutenção. Qualquer plataforma de desenvolvimento atual busca meios para diminuir o acoplamento nos sistemas. No Angular, garantimos o baixo acoplamento dos serviços através de uma técnica específica. Qual o nome da técnica utilizada?</Text>}
                        answer={<Text>Injeção de dependências</Text>}
                     />

                     <Exercices id={2} 
                        question={<Text>Angular é um framework para desenvolver aplicações em diversas plataformas, mantido e desenvolvido pela Google. Ele vem com um conjunto de bibliotecas poderosas que podemos importar, possibilitando construir aplicações com uma qualidade e produtividade surpreendente. O Angular usa qual linguagem como padrão?</Text>}
                        answer={<Text>TypeScript</Text>}
                     />

                     <Exercices id={3} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={4} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={5} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={6} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={7} 
                        
                     />

                     <Exercices id={8} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={9} 
                        question={<Text></Text>}
                        answer={<Text></Text>}
                     />

                     <Exercices id={10}
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
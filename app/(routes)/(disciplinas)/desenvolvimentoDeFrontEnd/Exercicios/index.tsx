

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
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  ExercíciosView  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
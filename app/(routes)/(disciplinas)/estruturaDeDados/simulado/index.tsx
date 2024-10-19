

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { Header, HomePage, Section, Text, View } from "@/widgets/elements";
import React, { useState, useEffect, ReactElement } from "react";
import { 
   ScrollView,
   StyleSheet,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */
type ExProps = {
   title: string;
   question?: ReactElement;
   answer?: ReactElement;
}

function Exercicio( { ...props }: ExProps ) {
   return( <>
      <View 
         { ...props }
         style={{ 
            borderRadius: 13,
            backgroundColor: Palette.dark.bg_lv2,
            overflow: "hidden",
         }}
      >
         <Header ph={8} pv={8} bg="#00559c">
            <Text>{ props.title }</Text>
         </Header>
         <View gap={24} style={{
            padding: 16,

         }}>
            <View gap={8}>{ props.question }</View>
            <View darkColor="#1b1d22" borderRadius={13} pd={16}>{ props.answer }</View>
         </View>
      </View>
   </> );
}

type QProps = {
   children?: any;
}

function Qea( { ...props }: QProps ) {
   return( 
      <Text h={4}>{ props.children }</Text>
   );
}

type ResProps = {
   title?: string;
   children?: any;
}

function Res( { ...props }: ResProps ) {
   return( 
      <Text darkColor="#777">{ props.children }</Text>
   );
}

/** == [ exports ]
 * == == == == == == == == == */
export default function SimuladoEstruturaDeDados( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header ph={24} pv={24}>
               <Text h={3}>Estrutura de Dados</Text>
            </Header>
            <Section darkColor={ Palette.dark.bg_lv1 } gap={24} pd={24}>

               <Exercicio title="titulo"
                  question={ <>
                     <Qea>Comparando o Merge Sort com o Método da bolha podemos afirmar que:</Qea>
                  </> }
                  answer={ <>
                     <Res>O merge sort tem complexidade computacional inferior ao bubble sort, porém o merge sort sempre executa em tempo linear em algumas instâncias  (melhores casos).</Res>
                  </> }
               />
               
               <Exercicio title=""
                  question={<Qea>alocação dinamica de um vetor do tipo primitivo double com 10 posições nalinguagem C.</Qea>}
                  answer={<Res>malloc( 10 * sizeof( doubles ) )</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Considere a definição da seguinte struct escrita em linguagem de programação C.\n\nstruct endereço {\n\t\tchar logradouro [50];\n\t\tint numero;\n\t\tchar cidade[30];\n\t\tchar estado[2];\n} end1;\n\nA alternativa que manipula corretamente a struct acima definida é:`}</Qea>}
                  answer={<Res>{`Para armazenar um valor inteiro na variavel numero: scanf( "%d", &end1.numero );`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Há duas formas de se passar argumentos para funções: por valor e por referencia. Sobre  passagem de parametros, analise as seguintes afirmativas:\n
                     1. Na passagem por referencia, o que é passado como argumento no parametro formal é o endereço da variável.
                     2. Na passagem por valor, o valor é copiado do argumento para o parametro formal da função.
                     4. Na passagem por referencia, dentro da função, o argumento real utilizado na chamada é acessado através do seu endereço, sendo assim alterado.
                     5. Na passagem por valor, quaisquer alterações feitas nesses parametros dentro da função não irão afetar as variáveis usadas como argumentos para chama-la.`}</Qea>}
                  answer={<Res>1, 2, 4 e 5, apenas</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`A modularização de algoritmos é importante para organizar melhor o código, facilitar a manutenção, entre outras coisas. Sobre funções e procedimentos, assinale a alternativa CORRETA sobre a modularização:`}</Qea>}
                  answer={<Res>{`A função retorna um valor ao programa.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Sejam as seguintes propriedades de estrutura de dados:
      1. a remoção de um elemento interno obriga ao deslocamento de todos os sucessores.
      2. um nó pode ser inserido no meio da estrutura com complexidade O(1).
      3. a inserção e a remoção podem ser feitas em ambas as extremidades.
      
      As descrições acima se referem respectivamente à:`}</Qea>}
                  answer={<Res>{`Lista em alocação sequencial, Lista emn alocação encadeada e deque.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Várias estruturas de dados podem ser utilizadas para armazenar dados de um aplicação.
Em relação ao assunto, assinale a alternativa correta.`}</Qea>}
                  answer={<Res>{`A estrutura de dados do tipo fila, utiliza a ideia do primeiro a ser inserido, será o primeiro a ser retirado`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Todos os algoritmos de ordenação interna devem ter complexidade de espaço de:`}</Qea>}
                  answer={<Res>{`O(n)`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Excola de Formação complementar do exército - EsFCRx Prova: CFO - informática - 2019
                     
Árvores binárias podem ser usadas para representar expressões aritméticas. Como um exemplo de expressão, podemos ter: 
a * b + f sen - h * j
com os elementos enumerados "Em-ordem". Nesse caso, a árvore binária terá como raiz: `}</Qea>}
                  answer={<Res>{`O átomo +`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Imagine que temos numeros de 1 a 100 em uma arvore binaria (ABP).
Agora que queremos procurar o numero 50.
Assinale a alternativa qe apresenta a possivel sequencua de elementos da arvore consultada.`}</Qea>}
                  answer={<Res>{`40 - 60 - 45 - 48 - 50.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`#include <stdio.h>
#include <stdlib.h>
struct entrada_cadastro {
      char name[50];
      int idade;
}
int main() {
      struct entrada_cadastro *ptr;
      ptr = malloc( sizeof( ptr ) );
      if( ptr == NULL ) {
            printf( "falha na alocação de memoria!"\n );
            return( 1 );
      }
      memset( ptr, 0x0, sizeof( *ptr ) );
      strcpy( ptr->name, "Aluno" );
      ptr->idade = 20;
      return( 0 );
}
      
Marque (V) para verdadeiro ou (F) para falso.`}</Qea>}
                  answer={<Res>{`( F ) A alocação de memória, presente na função main, efetuada com a função malloc, resulta na mesma quantidade em bytes que ptr = malloc( sizeof( struct entrada_cadastro ) ).
( V ) A função strcpy copia a palavra Aluno para o vetor name da struct <entrada_cadastro className="
( V ) O acesso aos campos da estrutura de dados é ralizado através do ponteiro nomeado ptr de tipo struct entrada_cadastro.
 
F, V, V."`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{``}</Qea>}
                  answer={<Res>{``}</Res>}
               />
            </Section>
         </ScrollView>
      </HomePage>
   </> );
}  /*  </  SimuladoEstruturaDeDados  >  */


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;
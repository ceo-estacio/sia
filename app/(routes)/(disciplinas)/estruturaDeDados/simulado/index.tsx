

/** == [ @imports ] 
 * == == == == == == == == == */
import { Palette } from "@/constants/Colors";
import { Code, Exercicio, Header, HomePage, Pix, Qea, Res, Section, Text, View,
} from "@/widgets/elements";
import React, { useState, useEffect, ReactElement } from "react";
import { 
   Image,
   ImageBackground,
   ScrollView,
   StyleSheet,
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */

/** == [ exports ]
 * == == == == == == == == == */
export default function SimuladoEstruturaDeDados( { ...props } ) {


   return( <>
      <HomePage>
         <ScrollView>
            <Header ph={24} pv={24}>
               <Text h={3}>Estrutura de Dados</Text>
            </Header>
            <Section darkColor={ Palette.dark.bg } gap={24} pd={24}>
            {/* <Section darkColor={ Palette.dark.bg_lv1 } gap={24} pd={24}> */}
            {/* <Section darkColor={ Palette.dark.bg_lv2 } gap={24} pd={24}> */}

               <Exercicio title="titulo"
                  question={ <>
                     <Qea>Comparando o Merge Sort com o Método da bolha podemos afirmar que:</Qea>
                  </> }
                  answer={ <>
                     <Res>O merge sort tem complexidade computacional inferior ao bubble sort, porém o merge sort sempre executa em tempo linear em algumas instâncias  (melhores casos).</Res>
                  </> }
               />
               
               <Exercicio title=""
                  question={<Qea>{`Na linguagem C, é possível realizar alocações de memória utilizando alocação dinâmica ou estática.
Assinale a alternativa que representa uma alocação dinâmica de um vetor do tipo primitivo double com 10 posições na linguagem C.`}</Qea>}
                  answer={<Res>malloc( 10 * sizeof( double ) )</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Considere a definição da seguinte struct escrita em linguagem de programação C.\n\nstruct endereço {\n\t\tchar logradouro [50];\n\t\tint numero;\n\t\tchar cidade[30];\n\t\tchar estado[2];\n} end1;\n\nA alternativa que manipula corretamente a struct acima definida é:`}</Qea>}
                  answer={<View pd={0} gap={8} style={{ flexDirection: "column",  }}>
                     <View pd={5} gap={8} style={{ backgroundColor: "#000" }}>
                        <Text darkColor="#daa520">case 1 - conter "RJ"</Text>
                        <Text darkColor="#955">Para criar um array de structs endereco: struct endereco[10]</Text>
                        <Text darkColor="#27f">Para armazenar um valor inteiro na variável numero: scanf("%d",&end1.numero);</Text>
                     </View>

                     <View pd={5} gap={8} style={{ backgroundColor: "#000", width: "100%", }}>
                        <Text darkColor="#daa520">case 2 - conter "armazenar o valor 104"</Text>
                        <Text darkColor="#955">Para armazenar o valor 104 na variável numero: endereco.numero = 104;</Text>
                        <Text darkColor="#27f">Para criar um array de structs endereco: struct endereco end1[10];</Text>
                     </View>
                  </View>}
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
                  question={<Qea>{`Sejam as seguintes propriedades de estruturas de dados:
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
( V ) A função strcpy copia a palavra Aluno para o vetor name da struct entrada_cadastro.
( V ) O acesso aos campos da estrutura de dados é ralizado através do ponteiro nomeado ptr de tipo struct entrada_cadastro.
 
F, V, V.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Pode-se definir uma estrutura heterogenea como sendo um conjunto de elementos, geralmente, agrupados sob um alógica e associados por um nome.
Esses elementos podem ser variáveis simples, matrizes ou ainda outras estruturas.
Seja a definição de uma estrutura como:

Struct empregado {
      string nome;
      float salario;
};

Suponha ainda que exista um vetor dessa estrutura, definido como:

empregado vet [ 100];

Marque a alternativa em que é atribuida de forma correta o salario 805.7 para o décimo primeiro elemento deste vetor.`}</Qea>}
                  answer={<Res>{`vet[10].salario=805.7;`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Observe o trecho de código abaixo, escrito na linguagem C.
                     
void imprimecabecalho() {
      ...
}
void calcula() {
      int soma;
      ...
      imprimecabecalho();
}
      
com base nesse código, é correto afirmar que:`}</Qea>}
                  answer={<Res>{`O tempo de vida da variável soma estende-se durante o tempo em que a função imprimecabecalho() é executada.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Em relação ao uso de procedimentos e funcões em lógica de programação, analise as seguintes afirmativas:
                     
      1. Procedimentos e funções são blocos de instruções para realizar tarefas especificas e são considerados su-rotinas.
      2. Em um procedimento, a passagem de parametros é obrigatoria.
      3. Em uma função, a passagem de parametros e o retorno de um valor são obrigatórios.`}</Qea>}
                  answer={<Res>{`1, apenas.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Levando em consideração a estrutura de dados do tipo "Pilha", analise os itens a seguir e, ao final, assinale a alternativa correta:`}</Qea>}
                  answer={<Res>{`1. Um elemento a ser removido é o que está há menos tempo na estrutura de dados.\n\nApenas o item I é verdadeiro.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Avalie as afirmativas abaixo:
                     
      1. O merge sort executa em O(n log n).
      2. O bucket sort executa em O(n).
      3. Algoritmos que executam em uma complexidade abaixo de O(n log n) ordenam a sequencia sem comparar os elementos desta sequencia.`}</Qea>}
                  answer={<Res>{`Todas estão corretas.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Todos os algoritmos de ordenação interna devem ter complexidade de espaço de:`}</Qea>}
                  answer={<Res>{`O(n)`}</Res>}
               />
               
               <Exercicio title=""
                  question={<>
                     <Qea>{`Analise a seguinte árvore binaria e assinale a alternativa correta.`}</Qea>
                     <View w={"100%"} h={200}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode="contain" source={ require("@/assets/images/disciplinas/estrutura-de-dados/simulados/1.png") }/>
                     </View>
                  </>}
                  answer={<Res>{`TA é a subarvore enraizada em A, portanto toda a árvore.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Referente a alocação dinâmica de memória em C, é CORRETO afirmar:`}</Qea>}
                  answer={<Res>{`As funções malloc e free e o operador sizeof, são essenciais para a alocação dinâmica de
memória.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Uma pilha segue a regra: "o ultimo a chegar é o primeiro a sair". Já as filas obedecem à regra: o primeiro a chegar é o primeiro a sair. 
Com base nesses argumentos, Uma pilha P e uma fila F originalmente com n elementos cada (n > 5), onde suas operações são:

empilha(P, elemento): insere elemento na pilha P;
desempilha(P): remove da pilha P e retorna o elemento removido;
enfileira(F, elemento): insere elemento na fila F;
desenfileira(F): remove da fila F e retorna o elemento removido;
para i = 1 até n, faça
empilha(P, desempilha(P))
enfileira(F, desenfileira(F))
fim-para

Ao final da execução do pseudocódigo, os estados finais de P e F serão respectivamente:`}</Text>}
                  answer={<Res>{`elementos em ordem original e elementos em ordem original.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Sobre o método da bolha é correto afirmar que:`}</Qea>}
                  answer={<Res>{`O tempo de execução pode ser linear em relação ao tamanho da entrada se a instância apresentada já estiver ordenada.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Árvore de pesquisa é uma estrutura de dados eficiente para armazenar informação, sendo particularmente adequada quando existe a necessidade de considerar todos ou alguma combinação de registros. 
Assinale uma combinação correta desses registros.`}</Qea>}
                  answer={<Res>{`Acesso direto e sequencial eficientes, facilidade de inserção e retirada de registro, boa taxa de utilização de memória, utilização de memória primária e secundária.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Uma lista ordenada alocada sequencialmente possui como desvantagem:`}</Qea>}
                  answer={<Res>{`Tamanho limitado de memória alocada para lista.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<>
                     <Text>{`A estrutura abaixo representa a célula de uma árvore em linguagem C:

typedef struc _no {
      int chave;
      struct no *esq, *dir;
} no;
 
Assinale a alternativa correta sobre qual sequencia será impressa ao executar um caminhamento na árvore abaixo, conforme o código escrito em linguagem C a seguir.`}</Text>
<ImageBackground style={{ width: "100%", height: 150 }} source={ require( "@/assets/images/disciplinas/estrutura-de-dados/simulados/2.png" ) }/>
</>}
                  answer={<Res>{`ABCDEXY`}</Res>}
               />
               
               <Exercicio title=""
                  question={<>
                     <Text>
                        {`Analise o seguinte código implementado na linguagem C:

int soma( int *a, int *b ) {
      *a = *a + *b;
      return *a;
}
int main() {
      int x=5, y=3;
      y = soma(&x, &y);
      printf(?%d?, x+y);
      return(0);
}

QUal será o valor exibido na saída padrão do sistema?`}
                     </Text>
                  </>}
                  answer={<Res>{`16`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Considere o código a seguir escrito na linguagem C.
                     
#include
Int main() {
      printf(?Valor total: %.1f\\n?, 9,1415169265);
      return(0);
}
      
Assinale a alternativa que apresenta a saída correta.`}</Text>}
                  answer={<Res>{`Valor total: 9.1`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Considere uma lista circular simplesmente encadeada com "n" elementos.
Após "n - 1" remoções realizadas no final da lista podemos afirmar que:`}</Qea>}
                  answer={<Res>{`O primeiro elemento estará apontando para si mesmo.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`Internamente, nos softwares, podem ser usadas duas estruturas de dados que armazenam as sucessivas operações de "Desfazer" e Refaser", de modo que o próximo "Refazer" sempre recupera o último "Desfazer".
Os tipos de estrutura de dados que podem ser usados para "Desfazer" e "Refazer" são, respectivamente:`}</Qea>}
                  answer={<Res>{`Pilha e Pilha`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Qea>{`É correto afirmar que:`}</Qea>}
                  answer={<Res>{`O bubble sort. o insert sort e o selection sort tem a mesma complexidade computacional, porém, isto não quer dizer que todos executem ao mesmo tempo para a mesma instância.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Um método de ordenação é dito estável quando preserva a ordem dos elementos da lista durante a execução.
Analise as afirmativas abaixo e marque a opção correta.

      1. A estabilidade não impacta na complexidade computacional teórica.
      2. A estabilidade pode impactar no tempo de execução do algoritmo uma vez que, em algoritmos estáveis, sequências "quase" ordenadas implicam em tempo de execução menor.
      3. O conceito de estabilidade é puramente teórico e não tem implicação prática.`}</Text>}
                  answer={<Res>{`1, 2 são verdadeiras e 3 é falsa.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Acerca das estruturas de dados Árvores, analise as afirmativas a seguir.
                     
      1. A árvore AVL é uma árvore binária com uma condição de balanço, porem não completamente balanceada.
      2. Árvores admitem tratamento computacionaleficiente quando comparadas às estruturas mais genéricas como os grafos.
      3. Em uma Árvore Binária de Busca, todas as chaves da subarvore esquerda são maiores que a chave da raiz.`}</Text>}
                  answer={<Res>{`Se somente as afirmativas 1 e 2estiverem corretas.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`O acesso ao elemento de uma estrutura de dados tipo pilha se restringr ao mais recente na pilha.
Já o acesso a um elemento de uma estrutura tipo fila ocorre ao dado há mais tempo na fila.
Sobre pilhas e filas, avalie as assertivas a seguir:

      1. Uma forma de evitar o desperdício de memória numa fila em alocação sequencial é utilizar-se lista circular.
      3. Pilhas têm a propriedade de inverter a ordem de cadeias, enquanto as filas mantêm a ordem.`}</Text>}
                  answer={<Res>{`1 e 3.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Sobre listas duplamente encadeadas, afirma-se:
                     
      1) Cada nó usa o dobro do número de campos ponteiro de uma lista simplesmente encadeada.
   
   É correto apenas:`}</Text>}
                  answer={<Res>{`1.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Sobre estruturas de dados, assinale a alternativa CORRETA.`}</Text>}
                  answer={<Res>{`Pilhas são tipos de dados abstratos caracterizadas pelapolítica "primeiro a entrar, último a sair".`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Algoritmos de ordenação baseados em comparação entre elementos da sequência tem complexidade computacional mínima de:`}</Text>}
                  answer={<Res>{`O(n log n)`}</Res>}
               />
               {/* 
               

                  *                 *
               a     b     fsen  h     j

               */}
               <Exercicio title=""
                  question={<Text>{`O método de ordenação por seleção tem duas versões, uma estável e outra instável.
Em relação ao tempo de execução do algoritmo quando é apresentado em sua entrada uma sequência quase ordenada e sua complexidade computacional, é correto afirmar que:`}</Text>}
                  answer={<Res>{`É provável que a versão estável execute em tempo inferior a versão instável, porém a complexidade computacional de ambos é O(n²).`}</Res>}
               />
               
               <Exercicio title=""
                  question={<>
                     <ImageBackground style={{ width: "100%", height: 200, }} resizeMode="contain" source={ require( "@/assets/images/disciplinas/estrutura-de-dados/simulados/3.png" ) }/>
                     <Text>
                        {`Considerando a figura acima, que ilustra uma árvore de busca binária, assinale a opção correta.`}
                     </Text>
                  </>}
                  answer={<Res>{`Se a árvore em tela for balanceada, depois da inserção de um nó 9, o nó 12 assume a raiz da árvore.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Árvore ALV é uma árvore de busca autobalanceada. Isso significa que:`}</Text>}
                  answer={<Res>{`As alturas das duas subárvores a partir de cada nó diferem no máximo em uma unidade.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Considere uma estrutura de dados do tipo vetos. Com respeito a tal estrutura, é correto que seus componentes são:`}</Text>}
                  answer={<Res>{`homogêneos e de acesso aleatório por intermédio de índices.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Observe o trecho de código abaixo, escrito na linguagem C.
                     
void quadrado(float, *r, float *t);
int main() {
      float a, b;
      printf("Entre com um numero complexo (2 numeros inteiros):");
      scanf("%f %f, &a, &b);
      quadrado(&a, &b);
      printf("O quadrado do numero e %f + i %f\\n", a, b);
}
      
Com base nesse código, é correto afirmar que as variáveis a e b`}</Text>}
                  answer={<Res>{`Indicam, quando precediads pelo caracter &, que os parâmetros podem ser modificados pelas funções scanf() e quadrado().`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{`Na linguagem de programação em C, as funções permitem a criação de programas em módulos, em que todas as variáveis, que são descritas nas definições de função, são locais, pois são conhecidas apenas na função em que são definidas.
Cada biblioteca-padrão tem um cabeçalho que contém os protótipos de função para todas as funções nessa biblioteca, assim como definições de vários tipos de dados e constantes que são necessárias para estas funções.
Uma dessas bibliotecas tem a seguinte explicação: contém as definições comuns de tipo usadas pela C para realizar cálculos.
Assinale-a.`}</Text>}
                  answer={<>
                     <Text darkColor="#955">stddef.h</Text>
                     <Text darkColor="#955">math.h</Text>
                     {``}
                  </>}
               />
               
               <Exercicio title="7"
                  question={<>
                     <Text>Analisando o quadro comparativo abaixo, marque a opção que indica a melhor escolha de algoritmo de ordenação.</Text>
                     <ImageBackground resizeMode="contain" style={{ width: "100%", height: 200, }} source={ require( "@/assets/images/disciplinas/estrutura-de-dados/simulados/4.png" ) }/>
                  </>}
                  answer={<Res>{`Merge sort, Buble sort, insert sort e Selection sort.`}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
                  answer={<Res>{``}</Res>}
               />
               
               <Exercicio title=""
                  question={<Text>{``}</Text>}
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
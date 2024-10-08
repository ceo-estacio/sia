

#include <stdio.h>
#include <string.h>


int main() {

   // jogador
   typedef struct time {
      char nome[50];
   } Time;
   
   struct Jogador {
      int nr_camisa;
      char nome[30];
      Time t;
   } jogador;
   
   jogador.nr_camisa = 10;
   strcpy( jogador.nome, "Manoel da Silva" );
   strcpy( jogador.t.nome, " Estudante Atlético Club " );
   
   printf(
      "\n== == ==\nJogador: %s - camisa %d, %s", 
      jogador.nome,
      jogador.nr_camisa,
      jogador.t.nome
   );


   // preencher um elemento em uma posição do vetor de struct
   typedef struct {
      char nome[200];
      int idade;
      float salario;
   } Funcionario;
   Funcionario func[10];

   int i = 0;

   &func[i].salario = 10000.00;
}  
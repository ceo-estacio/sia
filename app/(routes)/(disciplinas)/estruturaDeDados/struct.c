

#include <stdio.h>
#include <conio.h>

int main() {
   int matricula;
   char nome[50];
   float nota;

   float vetor_notas[20];
   // vetor de 20 posições

   float matriz_notas[10][2];
   // matriz de 10 linhas e 2 colunas

   // declaração de struct
   struct nomeDaStruct {
      int item01_DaStruct;
      char item02_DaStruct;
   }

   struct fichaDeAluno {
      int matricula;
      char nome[50];
      char disciplina[30];
      float nota;
   }

   // para manipular uma struct, tem q criar uma var do tipo struct
   struct fichaDeAluno aluno;

   printf( "\nInsira as informações do aluno\n");
   printf( "\nNome do aluno: \n" );
   scanf( "%s", &aluno.nome );
   
   printf( "\nMatricula: \n" );
   scanf( "%d", &aluno.matricula );

   printf( "\nDisciplina: \n" );
   scanf( "%s", &aluno.disciplina );

   printf( "\nNota: \n" );
   scanf( "%f", &aluno.nota );

   printf(
      "\n== == == == == == == == ==\nAluno: %s\nmatricula: %d\ndisciplina: %s\nnota: %.2f\n",
      aluno.nome,
      aluno.matricula,
      aluno.disciplina,
      aluno.nota
   );



   char nome[50] = "Anselmo";
   char email[30] = "noah.kd@gmail.com";
   int idade = 39, id = 13;
   float altura = 1.60;
   
   struct Modelo {
      char nome[50];
      char email[30];
      int idade, id;
      float altura;
   };
   
   struct Modelo céo = {
      "Anselmo", "noah.kd@gmail.com", 39, 13, 1.60
   };
   
   printf(
      "\n== == == == == == == == ==\nNome: %s\nemail: %s\nidade: %d\nid: %d\naltura: %.2f\n== == == == == == == == ==\n",
      céo.nome,
      céo.email,
      céo.idade,
      céo.id,
      céo.altura
   );
}
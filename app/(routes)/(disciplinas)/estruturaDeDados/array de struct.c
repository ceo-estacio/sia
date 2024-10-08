

#include <stdio.h>
#include <stdlib.h>


typedef struct {
   char nome[200];
   char disciplina[100];
   float nota;
} Aluno;



Aluno aluno_nota[10];



for( i = 0; i < 10; i++ ) {
	strcpy( aluno_nota [i].nome, "NULL" );
	strcpy( aluno_nota [i].disciplina  = "" );
	aluno_nota [i].nota = 0.0;
}


// &nome_vetor_struct[indice].nome_membro_struct; 
	
for( i = 0; i < 10; i++ ) {
   printf( " Digite nome do aluno: " );
   scanf( "%s%*c", &aluno_nota[i].nome );
   printf( " Digite a disciplina do aluno: " );
   scanf( "%s%*c", &aluno_nota[i].disciplina );
   printf( " Digite o nota do aluno: " );
   scanf( "%f%*c", &aluno_nota[i].nota );
}


// pesquisando um elemento no array de struct

printf( " \n Digite um nome: " );
scanf( "%s%*c", nome );

for( i = 0; i < 10; i++ ) {
   if( strcmp( nome, aluno_nota [i].nome ) == 0 ) {
      printf( "\n Registro encontrado! " );
      posicao = i;
   } else {
      posicao = -1;
   }
}

if( posicao = -1 ) {
   printf( " \n Registro não encontrado! " );
} else {
   printf( " \n Registro Encontrado: " );
   printf( " \n O nome do aluno é: %s ", aluno_nota [posicao].nome );
   printf( " \n A disciplina do aluno é: %s ", aluno_nota [posicao].disciplina );
   printf( " \n A nota do aluno é: %.2f ", aluno_nota [posicao].nota );
}






 
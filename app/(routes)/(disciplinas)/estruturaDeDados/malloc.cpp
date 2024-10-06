

#include <stdio.h>
#include <stdlib.h>

int main() {
   int *p, i;

   p = malloc( 10 * sizeof( int ) );
   //  malloc retorna para o ponteiro p a alocação na 
   //  memória: 10 x o tamanho do tipo int
   //  o p passa a apontar para a primeira posição do vetor

   if( p == NULL ) {
      printf( "Espaço insuficiente" );
      exit( 1 );
   } else {
      printf( "10 numeros alocados." );

      for( i = 0; i < 10; i++ ) {
         p[i] = i + 10;
         printf( " %d-%d\n", i, p[i] );
      }

      p = realloc( p, 20 * sizeof( int ) );

      printf( "Realocado para mais 10 numeros.\n" );

      for( i = 10; i < 20; i++ ) {
         p[i] = i + 10;
         printf( " %d-%d\n", i, p[i] );
      }
      printf( "todos os 20 numeros alocados.\n" );
      for( i = 0; i < 20; i++ ) {
         printf( " %d-%d\n", i, p[i] );
      }
      free( p );
   }
}
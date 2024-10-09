

#include <stdio.h>


int main() {
   /**
    * == [ criação de vetores ] 
    * 1 - declaração
    * 2 - iniciação
    * 3 - preenchimento
    * -- -- -- -- -- -- -- -- -- */ 

   // 1 - declaração
   int numbers[10]; 

   // 2 - iniciação
   void Inicializar( int *p, int n ) {
      int i;

      for( i = 0; i < n; i++ ) {
         p[i] = 0;
      }
   }
   Inicializar( numbers, 10 );

   // 3 - preenchimento
   void Preencher( int *p, int n ) {
      int i;
      
      for( i = 0; i < n; i++ ) {
         p[i] = i + 10;
      }
   }
   Preencher( numbers, 10 );

   numbers[1] = 101;

   // display
   void Display( int *p, int n ) {
      int i;

      printf( "\n== == == == == == == == ==\n" );
      for( i = 0; i < n; i++ ) {
         printf( "\tvetor[ indice %d ]: %d;\n", i, p[i] );
      }
      printf( "\n== == == == == == == == ==\n" );
   }
   Display( numbers, 10 );
}
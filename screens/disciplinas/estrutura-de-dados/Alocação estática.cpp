

/**
 * variaveis
 * == == == == == == == == == */
// tipo  nome   valor  endereço
   int   x   =  5;     10
// tipo  nome   valor  endereço
   char  c   =  'D';   13


/**
 * Alocação estática
 * == == == == == == == == == */
#include <stdio.h> 

static int a = 0; // v global, static aloc

void increment( void ) {
   int b = 0; // v local, auto aloc
   static int c = 0; // v local, static aloc

   printf( "a: %d, b: %d, c: %d\n", a, b, c );
   a++;
   b++;
   c++;
}

int main( void ) {
   int i;
   for( i = 0; i < 5; i++ ) {
      increment();
      system( "pause" );
      return( 0 );
   }
}



/**
 * alocação de memória
 */
#include <stdlib.h>

void * malloc (size_t size)
/*
A função “malloc” aloca um determinado número de bytes na memória 
e retorna um ponteiro para o primeiro byte alocado. 
Se não for possível alocar, a função retorna NULL.
*/

void free (void *ptr)
/*
A função “free” libera o número de bytes alocados 
previamente na memória, apontado por “ptr”.
*/

void * realloc (void *ptr, size_t newsize)
/*
A função “realloc” redimensiona a área previamente 
alocada, apontada por “ptr”, para o novo tamanho “newsize”.
*/


// alocação por vetor
void * calloc (size_t count, size_t eltSize)




ptr = malloc (1024);
free (ptr);
ptr = NULL; // não é obrigatório, mas aconselhável



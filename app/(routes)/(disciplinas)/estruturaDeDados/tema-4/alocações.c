

#include <stdio.h>


int main() {

   // alocação dinamica
   int *vetor;

   vetor = ( int * ) malloc( vetorSize * sizeof( int ) );
   // malloc() solicita ao OS em ETime uma área sequencial 
   // do tamanho igual ao "vetorSize x tamanhoDoTipo()" 
}
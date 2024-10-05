

// Empregar ponteiros com a utilização da linguagem de programação C

// #include <iostream>
#include <stdio.h>
#include <stdlib.h>

int main() {
    
   int x = 15;   // criar variavel
   int *ptr;     // criar ponteiro

   ptr = &x;     // colocar o endereço de x no ponteiro ptr   
   
   printf( "value x: %d\n", x );    // value x: 15
   printf( "address x: %p\n", &x ); // address x: 0x7ffd49c8718c
   printf( "address x: %p\n", x ); // address x: 0xf
   
   printf( "conteudo apontado por ptr: %d\n", *ptr ); // conteudo apontado por ptr: 15
   printf( "endereço apontado por ptr: %p\n", ptr ); // endereço apontado por ptr: 0x7ffff3400684

   // return 0;
}
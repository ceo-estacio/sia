

// Empregar ponteiros com a utilização da linguagem de programação C
/**
 * printf codes
 * %[sinalizadores][largura][.precisão][tamanho]tipo
 * %d    print string and int variable
 * %s    print string and char array
 * %p    writes an implementation-defined character sequence defining a pointer
 */

// #include <iostream>
#include <stdio.h>
#include <stdlib.h>


void display( int x, int *ptr ) {
   printf( "value x: %d\n", x );    
   printf( "address x: %p\n", &x ); 
   printf( "ptr aponta para x o valor de x é:      %d\n", *ptr ); 
   printf( "conteúdo de ptr que é o endereço de x: %p\n", ptr ); 
   printf( "endereço de ptr                      : %p\n", &ptr ); 
}  

void update( int *p ) {
   *p = *p + 1;
}

int main() {
    
   int x = 15;   // criar variavel
   int *ptr;     // criar ponteiro

   ptr = &x;     // colocar o endereço de x no ponteiro ptr   
   
   display( x, ptr );
   /* printf( "value x: %d\n", x );    // value x: 15
   printf( "address x: %p\n", &x ); // address x: 0x7ffd49c8718c
   printf( "ptr aponta para x o valor de x é:      %d\n", *ptr ); // ptr aponta para x o valor de x é: 15
   printf( "conteúdo de ptr que é o endereço de x: %p\n", ptr ); // conteúdo de ptr que é o endereço de x: 0x7fff3c384804
   printf( "endereço de ptr                      : %p\n", &ptr ); // endereço de ptr                      : 0x7fff735b6e40
   */

   // *ptr = 73;
   update( &x );
   
   display( x, ptr );
   
   /* printf( "value x: %d\n", x );    // value x: 73
   printf( "address x: %p\n", &x ); // address x: 0x7ffd665f0dcc
   printf( "ptr aponta para x o valor de x é:      %d\n", *ptr ); // ptr aponta para x o valor de x é:      73
   printf( "conteúdo de ptr que é o endereço de x: %p\n", ptr ); // conteúdo de ptr que é o endereço de x: 0x7ffd665f0dcc
   printf( "endereço de ptr                      : %p\n", &ptr ); // endereço de ptr                      : 0x7ffd665f0dc0
    */

   // return 0;    
}

int arrayComChar() {
    char string[20] = "oi hdsufs";
    char *point;
    
    point = string;
    printf( "point: %c\n\n", *point );
    // o
    point = point + 1;
    printf( "point: %c\n\n", *point );
    // i
    point = point + 2;
    printf( "point: %c\n\n", *point );
    // h
    point = &string[7];
    printf( "point: %c\n\n", *point );
    // f
}

int arrayComString() {

}


#include <stdio.h>
#include <stdlib.h>


#define maxSize 10
// constante de tamanho 10


/**
 * == [ pilha ]
 */

// 1- modelo da pilha
typedef struct {
   int item[ maxSize ];
   int stackTop;
} STACK;

// 2- inicializador da pilha
void StackInit( STACK *p ) {
   p->stackTop = -1;
   // definir o topo com -1
}

// 3- verificar se a stack está vazia
int IsTheStackEmpty( STACK *p ) {
   if( p->stackTop == -1 ) {
      return 1;
   } else {
      return 0;
   }
}

// 4- verificar se a pilha está cheia
int IsTheStackFull( STACK *p ) {
   if( p->stackTop == maxSize - 1 ) {
      return 1;
   } else {
      return 0;
   }
}

// 5- insere item na pilha
void Push( STACK *p, int item ) {
   if( IsTheStackFull( p ) == 1 ) {
      printf( "\nstack is full\n" );
   } else {
      p->stackTop++;
      p->item[ p->stackTop ] = item;
   }
}

// 6- remover item da pilha
int Pop( STACK *p ) {
   int aux;
   if( IsTheStackEmpty( p ) == 1 ) {
      printf( "\nstack is empty\n" );
   } else {
      aux = p->item[ p->stackTop ];
      p->stackTop--;
      return aux;
   }
}


int main() {
   STACK *pilha = ( STACK* ) malloc( sizeof( STACK ) );

   StackInit( pilha );

   // for( int i = 0; i <= 9; i++ ) {

   // }
   Push( pilha, 6 );
   Push( pilha, 13 );
   Push( pilha, 14 );
   Push( pilha, 8 );
   Push( pilha, 1 );
   Push( pilha, 2 );
   Push( pilha, 23 );
   Push( pilha, 234 );
   Push( pilha, 23458 );
   Push( pilha, 234586 );
   Push( pilha, 2345867 );
   Push( pilha, 23458679 );
   Push( pilha, 2345867910 );

   for( int i = 0; i <= pilha->stackTop; i++ ) {
      printf(
         "item: %d\n",
         pilha->item[ i ]
      );
   }
}



/* 
a d r k p
p k r d a
p k r d 
p k r 
p k r h
p k r h a

 */


#include <stdio.h>
#include <stdlib.h>
#define queueSize 3 

typedef struct {
   int FIRST;
   int LAST;
   int items[ queueSize ];
} QUEUE;

void QueueInit( QUEUE *fila ) {
   fila->FIRST = 0;
   fila->LAST = -1;
}

int QueueIsFull( QUEUE *fila ) {
   if( fila->LAST == queueSize - 1 ) {
      return 1;
   } else {
      return 0;
   }
}

int QueueIsEmpty( QUEUE *fila ) {
   if( fila->FIRST > fila->LAST ) {
      return 1;
   } else {
      return 0;
   }
}

void Enqueue( QUEUE *fila, int element ) {
   if( QueueIsFull( fila ) == 1 ) {
      printf( "\nFila lotada!\n" );
   } else {
      fila->LAST++;
      fila->items[ fila->LAST ] = element;
   }
}

void Dequeue( QUEUE *fila ) {
   int auxiliar = 0;

   if( QueueIsEmpty( fila ) == 1 ) {
      printf( "\nFila vazia!\n" );
   } else {
      auxiliar = fila->items[ fila->FIRST ];
      fila->FIRST++;
   }
}

void DisplayFirstElement( QUEUE *fila ) {
   if( QueueIsEmpty( fila ) == 1 ) {
      printf( "\nFila vazia!\n" );
   } else {
      printf( 
         "\nO primeiro da fila eh o [%d]\n",
         fila->items[ fila->FIRST ] 
      );
   }
}

void GetLength( QUEUE *fila ) {
   if( QueueIsEmpty( fila ) == 1 ) {
      printf( "\nFila vazia\n" );
   } else {
      printf( 
         "\nO tamanho da fila eh %d\n",
         ( fila->LAST - fila->FIRST ) + 1 
      );
   }
}


void Exibir( QUEUE *fila ) {
   int i = fila->FIRST;
   printf( "\n---Fila atual---\n" );
   while( i <= fila->LAST ) {
      printf( "[%d] ",fila->items[i] );
      i++;
   }
}

int main() {
   int opcao = -1;
   int valor = 0;
   QUEUE fila;

   QueueInit( &fila );

   while( opcao != 0 ) {
      Exibir( &fila );

      valor = 0;
      
      printf( "\n\nDIGITE 0 PARA SAIR\n" );
      printf( "Escolha uma opcao\n" );
      printf( "1: Enfileirar\n" );
      printf( "2: Desenfileirar\n" );
      printf( "3: Mostrar primeiro\n" );
      printf( "4: Tamanho\n" );
   
      scanf( "%d", &opcao );

      switch( opcao ) {
         case 1:
            printf( "Digite um valor para enfileirar\n" );
            scanf( "%d", &valor );
            Enqueue( &fila, valor );
            break;
         case 2:
            Dequeue( &fila );
            break;
         case 3:
            DisplayFirstElement( &fila );
            break;
         case 4:
            GetLength( &fila );
            break;
         case 0:
            printf( "Tchau! Ate a proxima\n" );
            break;
         default:
            printf( "Opcao invalida!\n" );
            break;
      }
   }

   return 0;
}
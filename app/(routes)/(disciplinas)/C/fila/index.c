

#include <stdio.h>
#include <stdlib.h>


#define listSizeLimit 9

/**
 * == [ QUEUE ]
 * 1- type
 * 2- initQueue
 * 3- isEmpty
 * 4- isFull
 * 5- Enqueue
 * 6- Dequeue
 */


 /* 1- type */
typedef struct {
   int items[ listSizeLimit ];
   int HEAD;
   int TAIL;
} QUEUE;

 /* 2- initQueue */


 /* 3- isEmpty */
int IsEmpty( QUEUE *queue ) {
   if( queue->HEAD == -1 && queue->TAIL == -1 ) {
      return 1;
   } else {
      return 0;
   }
}

 /* 4- isFull */
int IsFull( QUEUE *queue ) {
   if( queue->TAIL == listSizeLimit - 1 ) {
      return 1;
   } else {
      return 0;
   }
}

 /* 5- Enqueue */
void Enqueue( QUEUE *queue, int item ) {
   if( IsFull( queue ) == 1 ) {
      return;
   } else if( IsEmpty( queue ) == 1 ) {
      queue->HEAD = 0;
      queue->TAIL = 0;
   } else {
      queue->TAIL++;
   }
   queue->items[queue->TAIL] = item;
}

 /* 6- Dequeue */
int Dequeue( QUEUE *queue ) {
   int returned;

   if( IsEmpty( queue ) == 1 ) {
      return;
   } else if( queue->HEAD == queue->TAIL ) {
      returned = queue->items[ queue->HEAD ];
      queue->HEAD = - 1;
      queue->TAIL = - 1;
   } else {
      returned = queue->items[ queue->HEAD ];
      queue->HEAD++;
   }
   return returned;
}


int main() {

}
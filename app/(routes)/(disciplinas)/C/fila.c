

#include <stdio.h>
#include <stdlib.h>

#define vectorSize 4


/**
 * == [ properties ]
 * == == == == == == == == == */
typedef struct {
   int vector[ vectorSize ];
   int START;
   int END;
} QUEUE;





int pop( QUEUE *p, int i ) {
   for( i = 0; i < p->END - 1; i++ ) {
      p->vector[i] = p->vector[ i + 1 ];
   }
   p->END--;
}

/**
 * == [ main ]
 * == == == == == == == == == */
int main() {
   /* init a fila */
   QUEUE fila;
   fila.END = 0;

   /* insert an item */
   fila.vector[ fila.END ] = 1;
   fila.END++;

   /* remove an item */
   fila.vector[0] = fila.vector[1];
   fila.END--;

}

/**
 * == [ properties ]
 * == == == == == == == == == */
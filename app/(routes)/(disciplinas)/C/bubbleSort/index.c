

#include <stdio.h>
#include <stdlib.h>

#define TAMANHO 6
#define length 6


void Bolha( int *v ) {
	int troca = 1;
	int i = 0;
	int aux;

	while( troca ) {
		troca = 0;
		while( i < length - 1 ) {
			if( v[i] > v[i+1] ) {
				aux = v[i];
				v[i] = v[i+1];
				v[i+1] = aux;
				troca = 1;
			}
			i++;
		}
		i = 0;
	}
}	


/**
 * == [ selection sort ] 
 * == [ seleção_01 ] 
 * == [ seleção_02 ] 
 * == == == == == == == == == */
void SelectionSort( int list[] ) {
   for( int x = 0; x < length - 1; x++ ) {
      int min_position = x;
      for( int y = x + 1; y < length; y++ ) {
         if( list[ y ] < list[ min_position ] ) {
            min_position = y;
         }
      }
      if( min_position != x ) {
         int temp = list[ x ];
         list[ x ] = list[ min_position ];
         list[ min_position ] = temp;
      }
   }

   for( int x = 0; x < length; x++ ) {
      printf(
         "list[ %d ]: %d\n",
         x,
         list[ x ]
      );
   }
}

/**
 * == [ seleção_01 ] 
 * == == == == == == == == == */
void Seleção_01( int *v ) {
   int aux;

   for( int x = 0; x < length - 1; x++ ) {
      for( int y = x + 1; y < length; y++ ) {
         if( v[x] > v[y] ) {
            aux = v[x];
            v[x] = v[y];
            v[y] = aux;
         }
      }
   }

   for( int x = 0; x < length; x++ ) {
      printf(
         "v[ %d ]: %d\n",
         x,
         v[ x ]
      );
   }
}

/**
 * == [ seleção_02 ] 
 * == == == == == == == == == */
void Seleção_02( int *v ) {
   int aux, minimo, pos_minimo;

   for( int x = 0; x < length - 1; x++ ) {
      minimo = v[x];
      pos_minimo = x;
      // Passo 1 
      for( int y = x + 1; y < length; y++ ) {
         if( minimo > v[y] ) {
            minimo = v[y];
            pos_minimo = y;
         }
      }
      // Passo 2
      if( pos_minimo != x ) {
         aux = v[pos_minimo];
         v[pos_minimo] = v[x];
         v[x] = aux;
      }
   }

   for( int x = 0; x < length; x++ ) {
      printf(
         "v[ %d ]: %d\n",
         x,
         v[ x ]
      );
   }
}




/**
 * == [ insertion sort ] 
 * == == == == == == == == == */
void InsertionSort( int *v ) {
   int aux;

   for( int x = 0, y = x + 1; x < length - 1; x++ ) {
      //   y = x + 1;
      while( v[y-1] > v[y] && y > 0 ) {
         aux = v[y-1];
         v[y-1] = v[y];
         v[y] = aux;
         y--;
      }
   }

   for( int x = 0; x < length; x++ ) {
      printf(
         "v[ %d ]: %d\n",
         x,
         v[ x ]
      );
   }
}


int main() {
   int 
      list[] = { 50, 30, 80, 70, 20, 90 }
   ;

   SelectionSort( list );
}
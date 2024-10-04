

/**
 * Alocação estática
 * == == == == == == == == == */
#include < stdio.h > 

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
      
   }
}
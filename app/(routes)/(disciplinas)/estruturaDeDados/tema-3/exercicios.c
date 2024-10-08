

#include <stdio.h>


int main( void ) {
   int x, *y, z;
   x = 5;
   y = &x;
   z = 10;
   
   scanf( "%d", y );
   printf( "%d %d", x, z );
}



// parametros

// por referencia
void Dobro( int *pX ) {
   ( *pX ) = ( *pX ) * 2;
}

int main1( void ) {
   int n = 2;

   Dobro( &n );
   printf( "dobro: %d", n ); 
}




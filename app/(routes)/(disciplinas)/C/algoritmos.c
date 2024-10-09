

#include <stdio.h>


/**
 * == [ busca ] 
 * == == == == == == == == == */
int BuscaBinaria( int lista[], 
                  int elemento, 
                  int inicio, 
                  int fim        ) {
   int meio = floor( ( fim + inicio ) / 2 );
   
   if( ( inicio == fim ) && ( lista[ meio ] != elemento ) ) {
      return -1;
   } else if( lista[ meio ] == elemento ) {
      return meio;
   } else if( elemento < lista[ meio ] ) {
      BuscaBinaria( lista, elemento, inicio, meio );
   } else {
      BuscaBinaria( lista, elemento, meio + 1, fim );
   } 
}


/**
 * == [ inserção ] 
 * == == == == == == == == == */
int inserir( novo_elemento ) {
 	if( busca ( novo_elemento.chave ) == n + 1 ) {
 		Lista[ n + 1 ] == novo_elemento
 		n = n + 1
 		retornar 1
   } else { 
      return( -1 );
   }
}








/**
 * == [  ] 
 * == == == == == == == == == */


/**
 * == [  ] 
 * == == == == == == == == == */








int main() {
            

}
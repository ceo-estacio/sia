

let v = [ 1, 3, 5, 7, 9 ];
let x = 0;

for( var a of v ) {
   if( a % 2 == 0 ) {
      x += a;
   }
   console.log( "a: ", a );
}
console.log( x );


/**
 * == [ bubble sort ] 
 * == == == == == == == == == */
let 
   vetor = [ 6, 1, 7, 3, 4, 5, ]
;

function BubbleSort( props ) {
   const 
      n = props.length
   ;

   for( let i = 0; i < n - 1; i++ ) {
      for( let j = 0; j < n - i; j++ ) {
         if( props[j] > props[ j + 1 ] ) {
            [ props[j], props[ j + 1 ] ] = [ props[ j + 1 ], props[j] ];
         }
      }
   }

   console.log( `props: [ ${ props } ]` );
}

BubbleSort( vetor );


/*
troca = verdadeiro
enquanto (troca)
   início
      troca = falso
      para i = 0 ate N-1 faça
         início
            se (vetor[i] > vetor[i+1])
               inicio
                  troca = verdadeiro
                     aux = vetor[i]
                     vetor [i] = vetor[i+1]
                     vetor [i] = aux
               fim
         fim
*/

let 
   observer = true
   ,
   list = [ 5, 8, 4, 9, 7, 3, 1, 2, 0, 10, 6, ]
;

do {
   observer = false;
   for( let i = 0; i < list.length - 1; i++ ) {
      if( list[i] > list[ i + 1 ] ) {
         observer = true;
         let aux = list[i];
         list[i] = list[ i + 1 ];
         list[i] = aux;
      }
   }
   console.log( `list: [ ${list} ]` )
}
while( observer );

/*
let r = ( x: number ): number => x == 1 ? 1 : x + r ( x - 1 );
console.log( r( 8 ) );
*/
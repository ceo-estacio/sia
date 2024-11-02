

const 
   _ = ( ...a ) => console.log( ...a )
;

_( 2 **( 2 + 2 ) ); // 16
_( 2 ** 1 ); // 2
_( 2 ** 2 ); // 4
_( 2 ** 3 ); // 8
_( 2 ** 4 ); // 16

class CPerson {
   constructor( name = "", email = "" ) {
      this.name = name;
      this.email = email;
   }

   get( props ) {
      _( `Oi eu sou o ${ props ? ( [ this.name, props ].map( r => r ).join( " " ) ) : this.name }` );
   }
}

_(
   new CPerson( "Anselmo", "noah.kd@gmail.com" ).name
);

new CPerson( "Anselmo", "noah.kd@gmail.com" ).get( "I am a developer" );

_( [ "oi", "io", "o i" ].map( ( x, y ) => {
   return( `<${x}></${y}>` );
} ).join( "\n" ) );


const _ = ( ...a ) => console.log( ...a );

let 
   x = "(13) 9 9148-6078"
   ,
   regexX = /\(\d{2}\) \d \d{4}-\d{4}/
   ,
   y = "(095)11111-1111"
   ,
   regexY = /\(0\d\d\)\d{5}-\d{4}/
;

_(
   regexY.test( y )
);
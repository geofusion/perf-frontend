function fibonacci( number ) {
   return number < 2 ? number : fibonacci( number - 1 ) + fibonacci( number - 2 );
}

self.addEventListener( "message", function( e ) {

  var number = e.data;
  var result = fibonacci( number );
  self.postMessage( result );

} );

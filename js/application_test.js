$(document).ready(function() {

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".name" ).text( value );
  })
  .keyup();


});
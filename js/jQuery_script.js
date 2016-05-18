$(document).ready(function() {

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    var result = window.showNumbersName(value);
    $( ".name" ).text(result );
  });
});
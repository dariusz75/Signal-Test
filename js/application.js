

var digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var hundred = 'hundred';






function showNumbersName(p) {
  
    var stringed = p.toString();
    var reversed = stringed.split('').reverse().join('');
    var numbered = parseFloat(reversed);
    

  var indexZero = function(p){
    for (var i=0; i<reversed.length; i++) {
      if (p<0 || p>1000){
      return 'Please enter correct number.';
    } else if (p>=20 && reversed[3] === '1') {
      return thousand;
    } else if (reversed[0] === '0') {
      return digits[0];
    } else if (reversed[0] === '1' ) {
      return digits[1];
    } else if (reversed[0] === '2' ) {
      return digits[2];
    } else if (reversed[0] === '3' ) {
      return digits[3];
    } else if (reversed[0] === '4' ) {
      return digits[4];
    } else if (reversed[0] === '5' ) {
      return digits[5];
    } else if (reversed[0] === '6' ) {
      return digits[6];
    } else if (reversed[0] === '7' ) {
      return digits[7];
    } else if (reversed[0] === '8' ) {
      return digits[8];
    } else if (reversed[0] === '9' ) {
      return digits[9];
    } 
 }
  }();
  
  var indexOne = function(p) {
    for (var i=0; i<reversed.length; i++) {
      if (reversed[1] === '0' ) {
      return 'end';
    } else if (reversed[1] === '1' ) {
      return 'correct this error';
    } else if (reversed[1] === '2' ) {
      return tens[2];
    } else if (reversed[1] === '3' ) {
      return tens[3];
    } else if (reversed[1] === '4' ) {
      return tens[4];
    } else if (reversed[1] === '5' ) {
      return tens[5];
    } else if (reversed[1] === '6' ) {
      return tens[6];
    } else if (reversed[1] === '7' ) {
      return tens[7];
    } else if (reversed[1] === '8' ) {
      return tens[8];
    } else if (reversed[1] === '9' ) {
      return tens[9];
    }
    }
  }();
  
  var indexTwo = function(p) {
    for (var i=0; i<reversed.length; i++) {
      if (reversed[2] === '0' ) {
      return '';
    } else if (reversed[2] === '1' ) {
      return digits[1]+' '+hundred;
    } else if (reversed[2] === '2' ) {
      return digits[2]+' '+hundred;
    } else if (reversed[2] === '3' ) {
      return digits[3]+' '+hundred;
    } else if (reversed[2] === '4' ) {
      return digits[4]+' '+hundred;
    } else if (reversed[2] === '5' ) {
      return digits[5]+' '+hundred;
    } else if (reversed[2] === '6' ) {
      return digits[6]+' '+hundred;
    } else if (reversed[2] === '7' ) {
      return digits[7]+' '+hundred;
    } else if (reversed[2] === '8' ) {
      return digits[8]+' '+hundred;
    } else if (reversed[2] === '9' ) {
      return digits[9]+' '+hundred;
    }
    }
  }();
    
  console.log(indexTwo + ' '+indexOne+' '+indexZero);
}

showNumbersName(132);


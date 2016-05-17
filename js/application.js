
var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];

var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var hundred = 'hundred';
var thousand = 'thousand';


function showNumbersName(p) {
    
    if(p >=0 && p <=20) {
    console.log(digits[p]);
    }
    else{
      console.log('wrong number');
    }
  
}

showNumbersName(19);
function palindrome(kata) {
    var ceiled = Math.ceil(kata.length/2);
    for (var i = 0; i < ceiled; i++){ 
        if(kata[i] !== kata[kata.length-i-1]) {
            return false;
        } else if (kata[i] === kata[kata.length-i-1] && i+1 === ceiled) {
            return true;
        }
    }
}
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('dead')); // false
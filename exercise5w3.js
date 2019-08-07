function palindrome(kata) {
    for (var i = 0; i < kata.length/2; i++){ 
        if(kata[i] !== kata[kata.length-i-1]) {
            return false;
        } 
    }
    return true;
}

// function palindrome(kata) {
//     var temp = '';
//     for(var i = kata.length-1; i >= 0; i--) {
//         temp += kata[i];
//     }
//     if(temp == kata) {
//         return true;
//     } else {
//         return false;
//     }
// }

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('dead')); // false
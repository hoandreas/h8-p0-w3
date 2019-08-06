function angkaPalindrome(num) {
    var str = num.toString();

    for(i = 0; i < str.length/2; i++) {
        var firstChar = str[i];
        var lastChar = str[str.length-i-1]
        if(firstChar !== lastChar) {
            console.log(firstChar);
            console.log(lastChar);
            return false;
        } else {
            return true;
        }
    }
    
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
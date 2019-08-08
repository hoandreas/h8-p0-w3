function angkaPalindrome(num) {
    while(true) {
        num++;
        var str = num.toString();
        var temp = '';
        for (var i = 0; i < str.length; i++) { 
            temp = str[i] + temp;
        }
        if (str == temp) {
            return parseInt(temp);
        }
    }
}

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(9)); // 11
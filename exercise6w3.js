function angkaPalindrome(num) {
    if ((num < 10)&&(num > 0)) {
        return num + 1
    } else {
        while(true){
            num++;
            var str = num.toString();
            var temp = '';
            for(var i = str.length-1 ; i >= 0 ; i--){
                temp+=str[i]

                if (str == temp) {
                    return parseInt(temp);
                }
            }
        }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
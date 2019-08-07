function pasanganTerbesar(num) {
    var strNum = num.toString();
    var max = 0;

    for(var i = 0; i < strNum.length; i++) {
        var check = strNum[i] + strNum[i + 1];
        if(check > max) {
            max = check;
        }
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
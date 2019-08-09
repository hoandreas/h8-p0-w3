function targetTerdekat(arr) {
    var indexO = arr.indexOf('o');
    var count = 0;
    
    for(var i = indexO+1; i < arr.length; i++) {
        count++;
        if(arr[i] === 'x') {
            return count;
        }
    }
    count = 0;
    for(var i = indexO-1; i >= 0; i--) {
        count++;
        if(arr[i] === 'x') {
            return count;
        }
    }
    return 0;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat(['o', ' ', ' ', ' ', ' ', ' ', ' ', 'x'])); // 7
  console.log(targetTerdekat(['x', ' ', ' ', ' ', ' ', ' ', ' ', 'o'])); // 7
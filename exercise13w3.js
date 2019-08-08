function targetTerdekat(arr) {
    var countO = arr.indexOf('o');
    var countX = arr.indexOf('x');
    var closestDistance = countX - countO;
    // console.log('o', countO);
    // console.log('x', countX);
    if(countX == -1) {
        return 0;
    } else if(countO > countX) {
        return 1;
    } else {
        return closestDistance;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat(['o', ' ', ' ', ' ', ' ', ' ', ' ', 'x'])); // 7
  console.log(targetTerdekat(['x', ' ', ' ', ' ', ' ', ' ', ' ', 'o'])); // 1
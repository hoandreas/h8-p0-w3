function splitKata(kalimat) {
  var temp = '';
  var word = [];
  for(var i = 0; i < kalimat.length; i++) {
    if(kalimat[i] !== ' ') {
      temp += kalimat[i];
    }
    if((kalimat[i+1] == ' ' || i == kalimat.length-1) && temp ) {
      word.push(temp);
      temp = ''
    }
  }
  return word;
}

function hitungJumlahKata(kalimat) {
  var wordsArray = splitKata(kalimat)
  return wordsArray.length;
}

  // TEST CASES
  console.log(hitungJumlahKata('I have a          dream  ')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing ')); // 4
  console.log(hitungJumlahKata('         I      ')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log(hitungJumlahKata('')); // 0

  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log(splitKata('I have a          dream  ')); // 4
  console.log(splitKata('Never eat shredded wheat or cake')); // 6
  console.log(splitKata('A song to sing ')); // 4
  console.log(splitKata('         I      ')); // 1
  console.log(splitKata('I believe I can code')); // 5
  console.log(splitKata('')); // 0

  
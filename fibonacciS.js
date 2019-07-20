function testingSequence(x) {
  var a1 = 0;
  var a2 = 1;
  var fibonacciArray = [];

  while(a2 < x) {
      fibonacciArray.push(a2);
      a2 += a1;
      a1 = a2 - a1;
  }
  
  return fibonacciArray;
}

document.write(testingSequence(6));
console.log(testingSequence(6));



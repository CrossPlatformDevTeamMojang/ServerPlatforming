function* gen() { 
2    yield 1;3    yield 2;4    yield 3;5  }6  7  var g = gen(); // "Generator { }"
function* idMaker() {
 2      var index = 0; 3      while(true) 4          yield index++; 5  } 6   7  var gen = idMaker(); // "Generator { }" 8   9  console.log(gen.next().value); // 010  console.log(gen.next().value); // 111  console.log(gen.next().value); // 212  // ...

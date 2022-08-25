function fib(x) {
  let a = 0, b = 1, c = x;
  
  for(let i = 2; i <= x; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c;
};


console.log(fib(20))
function isPrime(x) 
{
    if (x <= 1) { return false; }
  
    for (let i = 2; i < x; i++)
        if (x % i === 0) { return false; }
  
    return true;
}

console.log(isPrime(10000000000000));
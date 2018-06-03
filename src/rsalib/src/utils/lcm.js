/**
 * Uses Euclidean algorithm to compute Greatest Common Divisor 
 * @param {number} a 
 * @param {number} b 
 */
const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
}


/**
 * Generates Lowest Common Multiple
 * @param {number} a 
 * @param {number} b 
 */
const lcm = (a, b) => {
    return (a * b)/gcd(a, b)
}

/**
 * For now, copied from this example
 * Credit https://github.com/rsandor/number-theory/blob/master/lib/inverse_mod.js
 * and https://en.wikipedia.org/wiki/Modular_multiplicative_inverse#Computation
 * @param {*} a 
 * @param {*} n 
 */
const inverseMod = (a, n) => {
    if (a < 0) {
      a = (a % n) + n;
    }
  
    var t = 0;
    var newt = 1;
    var r = n;
    var newr = a;
  
    while(newr !== 0) {
      var quotient = Math.floor(r/newr);
      var oldt = t;
      t = newt;
      newt = oldt - quotient * newt;
  
      var oldr = r;
      r = newr;
      newr = oldr - quotient * newr;
    }
  
    if(r > 1) { return NaN };
  
    return (t > 0) ? t : (t+n);
  };

/**
 * Calculates all the coprimes between the starting number, a, and the totient, the given prime
 * Because in this example there are a finite number of coprimes - we can just generate them all and pick one randomly
 * @param {number} a 
 * @param {number} totient 
 */
const calcCoprime = (a, totient) => {
    let listOfCoprimes = []
    for (let i = a; i < totient; i++) {
        if ((gcd(i, totient) === 1))  listOfCoprimes.push(i)
    }
    return listOfCoprimes[Math.floor(Math.random() * listOfCoprimes.length)]
}

export {
    gcd,
    lcm,
    inverseMod,
    calcCoprime
}
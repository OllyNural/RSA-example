import primes from './primes.json'

/**
 * Very complex prime number selector
 * Selects a random prime number from a list of primes between 1000 and 5000
 * Very secure, the best
 */
const getPrime = () => {
    let rn = Math.floor(Math.random() * primes.length)
    return primes[rn]
}

export default getPrime
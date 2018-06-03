import { lcm, gcd, calcCoprime } from './lcm'

describe('lcm', () => {
    test('', () => {
        expect(lcm(48, 180)).toBe(720)
    })
})

describe('gcd', () => {
    test('', () => {
        expect(gcd(48, 180)).toBe(12)
    })

    test('', () => {
        expect(gcd(180, 48)).toBe(12)
    })

    test('', () => {
        expect(gcd(56, 15)).toBe(1)
    })
})

describe('calcCoprime', () => {
    test('Should calc coprime correctly', () => {
        let totient = 2924246 // lcm(4787 -1, 1223 - 1)
        expect(typeof calcCoprime(2000, totient)).toBe('number')
    })

    test('', () => {
        let totient = 121968 // lcm(1009 -1, 3389 - 1) 
        expect(typeof calcCoprime(2000, totient)).toBe('number')
    })
})
import getPrime from './getPrime'

describe('', () => {
    test('', () => {
        for (let i = 0; i < 2000; i++) {
            expect(typeof getPrime()).toBe('number')
        }
    })
})
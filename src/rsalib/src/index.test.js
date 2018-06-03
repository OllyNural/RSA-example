import { keyGen } from './'

describe('keyGen', () => {

    const mockUtils = {
        getPrime: jest.fn(),
        lcm: jest.fn(),
        calcCoprime: jest.fn()
    }

    beforeAll(() => {
        jest.mock('./utils', () => mockUtils)
    })

    beforeEach(() => {
        mockUtils.getPrime.mockReset().mockReturnValue(5)
        mockUtils.lcm.mockReset().mockReturnValue(10)
        mockUtils.calcCoprime.mockReset().mockReturnValue(15)
    })

    test('Basic test', () => {
        keyGen()
    })
})
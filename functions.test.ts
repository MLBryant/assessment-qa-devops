const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(Array.isArray(shuffleArray([1, 2, 3, 4, 5, 6]))).toBeTruthy()
    })
    test('shuffleArray should return an array with all the same items in it', () => {
        expect(shuffleArray([1, 2, 3, 4, 5, 6]).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6])
    })
})
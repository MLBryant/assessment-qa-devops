const {shuffleArray} = require('./utils')

let testArray = ['apple', 'banana', 'strawberry', 'plumb', 'cherry', 'pineapple', 'blueberry']

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(Array.isArray(shuffleArray(testArray))).toBeTruthy()
    })
    test('shuffleArray should return an array with all the same items in it', () => {
        expect(shuffleArray(testArray).sort()).toEqual(testArray.sort())
    })
})
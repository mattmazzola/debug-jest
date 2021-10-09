import { add } from './index'

describe('add', () => {
    test('given number a and b return a + b', () => {
        expect(add(1,1)).toEqual(2)
    })
})
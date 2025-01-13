import { findClosestNumber } from "../closestToZero"

test('Find closest number to Zero', () => {
    expect(findClosestNumber([-4,-2,1,4,8])).toEqual(1)
    expect(findClosestNumber([2,-1,1])).toEqual(1)
})
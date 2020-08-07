import { toRoman } from './roman'

describe('integer to roman numeral converter', () => {
  test('should throw error for negative number', () => {
    expect(() => {
      toRoman(-1)
    }).toThrow(new RangeError('Number out of range for Roman numerals.'))
  })

  test('should throw error for numbers larger than 3999', () => {
    expect(() => {
      toRoman(4000)
    }).toThrow(new RangeError('Number out of range for Roman numerals.'))
  })

  test('should return I for 1', () => {
    expect(toRoman(1)).toEqual('I')
  })

  test('should return V for 5', () => {
    expect(toRoman(5)).toEqual('V')
  })

  test('should return XXXIV for 34', () => {
    expect(toRoman(34)).toEqual('XXXIV')
  })
})

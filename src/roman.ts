export function toRoman (n: number): string {
  if (n < 0 || n > 3999) {
    throw new RangeError('Number out of range for Roman numerals.')
  }
  var ret: string
  var digit: number
  var mult = 1000
  for (let i = 4; i >= 1; i--) {
    digit = n / mult
    if (digit > 0) {
      ret += getRomanNumeral(i - 1, digit)
    }
    mult = mult / 10
  }
  return ret
}

function getRomanNumeral (place: number, digit: number): string {
  const placeSymbols = ['I', 'X', 'C', 'M']
  const placeHalfSymbols = ['V', 'L', 'D']
  var ret: string
  if (digit >= 1 && digit <= 3) {
    for (let i = 0; i < digit; i++) {
      ret += placeSymbols[place]
    }
    return ret
  } else if (digit === 4) {
    return placeSymbols[place] + placeHalfSymbols[place]
  } else if (digit > 4 && digit < 9) {
    ret = placeHalfSymbols[place]
    for (let i = 0; i < digit - 5; i++) {
      ret += placeSymbols[place]
    }
    return ret
  } else {
    return placeSymbols[place] + placeSymbols[place + 1]
  }
}

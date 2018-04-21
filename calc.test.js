// @flow
import Calc from './calc'

describe('sum', () => {
  const calc = new Calc()
  it('1 + 2', () => {
    expect(calc.sum(1, 2)).toBe(3)
  })
  it('1 + 3', () => {
    expect(calc.sum(1, 3)).toBe(4)
  })
})
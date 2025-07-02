import { Column } from './column'

describe('Column', () => {
  it('should be able to create a column', () => {
    const column = new Column([1, 2, 3, 4, 15])

    expect(column).toBeTruthy()
    expect(() => new Column([1, 2, 3, 4])).toThrow()
    expect(() => new Column([1, 2, 3, 4, 5, 6])).toThrow()
  })
})

import { Bingo } from './bingo'

describe('Bingo', () => {
  it('should be able to create a bingo', () => {
    const bingo = new Bingo({
      name: 'Festa de São José 2025',
      date: new Date(),
    })

    expect(bingo).toBeTruthy()
  })
})

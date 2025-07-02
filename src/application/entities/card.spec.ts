import { Card } from './card'
import { Column } from './column'

describe('Card', () => {
  it('should be able to create a card', () => {
    const card = new Card({
      bingoId: 'binngo-id',
      number: 10001,
      columnB: new Column([1, 2, 3, 4, 15]),
      columnI: new Column([16, 17, 18, 19, 30]),
      columnN: new Column([31, 32, 33, 34, 45]),
      columnG: new Column([51, 52, 53, 54, 60]),
      columnO: new Column([61, 62, 63, 74, 75]),
    })

    expect(card).toBeTruthy()
  })
})

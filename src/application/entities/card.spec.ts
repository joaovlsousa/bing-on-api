import { makeCard } from '@test/factories/card-factory'

describe('Card', () => {
  it('should be able to create a card', () => {
    const card = makeCard()

    expect(card).toBeTruthy()
  })

  it('should be able to sell to card', () => {
    const card = makeCard()
    card.sell({
      buyerName: 'Fake Name',
      buyerAddress: 'Fake Address',
      buyerPhone: 'Fake Phone',
    })

    expect(card.hasSaled).toEqual(true)
  })

  it('should be not able to sell to card', () => {
    const card = makeCard()
    card.sell({
      buyerName: 'Fake Name',
      buyerAddress: 'Fake Address',
      buyerPhone: 'Fake Phone',
    })

    expect(() => {
      card.sell({
        buyerName: 'Fake Name',
        buyerAddress: 'Fake Address',
        buyerPhone: 'Fake Phone',
      })
    }).toThrow()
  })
})

import { NotFoundException } from '@nestjs/common'
import { InMemoryCardsRepository } from '@test/repositories/in-memory-cards-repository'
import { SaveCards } from './save-cards'
import { SellCards } from './sell-cards'

describe('Sell cards', () => {
  it('should be able to sell cards', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)
    const sellCards = new SellCards(cardsRepository)

    await saveCards.execute({
      bingoId: 'fake-id',
      quantity: 500,
    })

    await sellCards.execute({
      bingoId: 'fake-id',
      buyerAddress: 'Fake Address',
      buyerName: 'Fake Name',
      buyerPhone: 'Fake Phone',
      cardsNumbers: [1001, 1002, 1005],
    })

    expect(cardsRepository.cards[0].hasSaled).toEqual(true)
    expect(cardsRepository.cards[1].hasSaled).toEqual(true)
    expect(cardsRepository.cards[4].hasSaled).toEqual(true)
  })

  it('should not be able to save all cards', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)
    const sellCards = new SellCards(cardsRepository)

    await saveCards.execute({
      bingoId: 'fake-id',
      quantity: 500,
    })

    expect(
      sellCards.execute({
        bingoId: 'fake-id',
        buyerAddress: 'Fake Address',
        buyerName: 'Fake Name',
        buyerPhone: 'Fake Phone',
        cardsNumbers: [1001, 1700, 1002, 2000, 1005],
      })
    ).rejects.toThrow(NotFoundException)
  })
})

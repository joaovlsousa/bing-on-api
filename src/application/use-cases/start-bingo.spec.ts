import { InMemoryCardsRepository } from '@test/repositories/in-memory-cards-repository'
import { SaveCards } from './save-cards'
import { SellCards } from './sell-cards'
import { StartBingo } from './start-bingo'

describe('Start bingo', () => {
  it('should be able to start a bingo', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)
    const sellCards = new SellCards(cardsRepository)
    const startBingo = new StartBingo(cardsRepository)

    const bingoId = 'fake-id'

    await saveCards.execute({
      bingoId,
      quantity: 500,
    })

    await sellCards.execute({
      bingoId,
      buyerAddress: 'Fake Address',
      buyerName: 'Fake Name',
      buyerPhone: 'Fake Phone',
      cardsNumbers: [1001, 1002, 1003, 1004, 1005],
    })

    await startBingo.execute({
      bingoId,
    })

    expect(cardsRepository.cards).toHaveLength(5)
    expect(cardsRepository.cards[0].hasSaled).toEqual(true)
    expect(cardsRepository.cards[4].number).toEqual(1005)
  })
})

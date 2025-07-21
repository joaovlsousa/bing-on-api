import { InMemoryCardsRepository } from '@test/repositories/in-memory-cards-repository'
import { GetAllCardsNotSaled } from './get-all-cards-not-saled'
import { SaveCards } from './save-cards'

describe('Get all cards not saled', () => {
  it('should be able to get all cards not saled', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)
    const getAllCardsNotSaled = new GetAllCardsNotSaled(cardsRepository)

    await saveCards.execute({
      bingoId: 'fake-id',
      quantity: 500,
    })

    const { cards } = await getAllCardsNotSaled.execute({
      bingoId: 'fake-id',
    })

    expect(cards).toHaveLength(cardsRepository.cards.length)
    expect(cards[0].hasSaled).toEqual(false)
  })
})

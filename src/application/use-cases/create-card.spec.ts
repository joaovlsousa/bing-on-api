import { Column } from '@application/entities/column'
import { InMemoryCardsRepository } from '@test/repositories/in-memory-cards-repository'
import { CreateCard } from './create-card'

describe('Create card', () => {
  it('should be able to create a card', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const createCard = new CreateCard(cardsRepository)

    const { card } = await createCard.execute({
      bingoId: 'fake-bingo-id',
      number: 1001,
      columnB: new Column([1, 2, 3, 4, 15]),
      columnI: new Column([16, 22, 23, 24, 30]),
      columnN: new Column([31, 32, 33, 34, 45]),
      columnG: new Column([46, 52, 53, 54, 60]),
      columnO: new Column([61, 62, 63, 64, 75]),
    })

    expect(cardsRepository.cards).toHaveLength(1)
    expect(cardsRepository.cards[0]).toEqual(card)
  })
})

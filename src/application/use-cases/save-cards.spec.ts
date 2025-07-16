import { BadRequestException } from '@nestjs/common'
import { InMemoryCardsRepository } from '@test/repositories/in-memory-cards-repository'
import { SaveCards } from './save-cards'

describe('Save cards', () => {
  it('should be able to save cards', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)

    await saveCards.execute({
      bingoId: 'fake-id',
      quantity: 500,
    })

    expect(cardsRepository.cards).toHaveLength(500)

    await saveCards.execute({
      bingoId: 'fake-id',
      quantity: 500,
    })

    expect(cardsRepository.cards).toHaveLength(1000)
    expect(cardsRepository.cards[500].number).toEqual(1500)
  })

  it('should not be able to save cards', async () => {
    const cardsRepository = new InMemoryCardsRepository()
    const saveCards = new SaveCards(cardsRepository)

    expect(
      saveCards.execute({
        bingoId: 'fake-id',
        quantity: 1200,
      })
    ).rejects.toThrow(BadRequestException)
  })
})

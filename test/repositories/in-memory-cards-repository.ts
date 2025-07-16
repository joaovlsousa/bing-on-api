import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = []

  async saveMany(cards: Card[]): Promise<void> {
    this.cards.push(...cards)
  }

  async findLastByBingoId(bingoId: string): Promise<Card | null> {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const card = this.cards[i]

      if (card.bingoId === bingoId) {
        return card
      }
    }

    return null
  }
}

import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = []

  async saveMany(cards: Card[]): Promise<void> {
    this.cards.push(...cards)
  }

  async countByBingoId(bingoId: string): Promise<number> {
    return this.cards.filter((card) => card.bingoId === bingoId).length
  }
}

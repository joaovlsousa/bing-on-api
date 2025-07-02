import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = []

  async create(card: Card): Promise<void> {
    this.cards.push(card)
  }
}

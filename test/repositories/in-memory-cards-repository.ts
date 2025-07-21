import { Card } from '@application/entities/card'
import {
  CardsRepository,
  FindByNumberProps,
} from '@application/repositories/cards-repository'

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = []

  async findByNumber(props: FindByNumberProps): Promise<Card | null> {
    const card = this.cards.find(
      (card) => card.number === props.number && card.bingoId === props.bingoId
    )

    if (!card) {
      return null
    }

    return card
  }

  async findAllNotSaled(bingoId: string): Promise<Card[]> {
    return this.cards.filter(
      (card) => card.bingoId === bingoId && card.hasSaled === false
    )
  }

  async countByBingoId(bingoId: string): Promise<number> {
    return this.cards.filter((card) => card.bingoId === bingoId).length
  }

  async createMany(cards: Card[]): Promise<void> {
    this.cards.push(...cards)
  }

  async save(card: Card): Promise<void> {
    const index = this.cards.findIndex((item) => item.id === card.id)

    if (index >= 0) {
      this.cards[index] = card
    }
  }
}

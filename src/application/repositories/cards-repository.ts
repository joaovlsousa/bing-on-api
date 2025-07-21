import { Card } from '@application/entities/card'

export abstract class CardsRepository {
  abstract saveMany(cards: Card[]): Promise<void>
  abstract countByBingoId(bingoId: string): Promise<number>
  abstract findAllNotSaled(bingoId: string): Promise<Card[]>
}

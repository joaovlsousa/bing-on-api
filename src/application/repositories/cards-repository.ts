import { Card } from '@application/entities/card'

export abstract class CardsRepository {
  abstract saveMany(cards: Card[]): Promise<void>
  abstract countByBingoId(bingoId: string): Promise<number>
}

import { Card } from '@application/entities/card'

export abstract class CardsRepository {
  abstract saveMany(cards: Card[]): Promise<void>
  abstract findLastByBingoId(bingoId: string): Promise<Card | null>
}

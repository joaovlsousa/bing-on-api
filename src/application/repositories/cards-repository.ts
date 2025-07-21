import { Card } from '@application/entities/card'

export interface FindByNumberProps {
  number: number
  bingoId: string
}

export abstract class CardsRepository {
  abstract countByBingoId(bingoId: string): Promise<number>
  abstract findAllNotSaled(bingoId: string): Promise<Card[]>
  abstract findByNumber(props: FindByNumberProps): Promise<Card | null>
  abstract createMany(cards: Card[]): Promise<void>
  abstract save(card: Card): Promise<void>
}

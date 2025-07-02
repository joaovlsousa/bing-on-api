import { Card } from '@application/entities/card'

export abstract class CardsRepository {
  abstract create(card: Card): Promise<void>
}

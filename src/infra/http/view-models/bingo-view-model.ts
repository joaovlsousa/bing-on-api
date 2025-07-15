import { Bingo } from '@application/entities/bingo'

export class BingoViewModel {
  static toHTTP(bingo: Bingo) {
    return {
      id: bingo.id,
      name: bingo.name,
      date: bingo.date,
      createdAt: bingo.createdAt,
    }
  }
}

import { Bingo } from '@application/entities/bingo'
import { Bingo as RawBingo } from '@prisma/client'

export class PrismaBingoMapper {
  static toPrisma(bingo: Bingo) {
    return {
      id: bingo.id,
      name: bingo.name,
      date: bingo.date,
      createdAt: bingo.createdAt,
      updatedAt: bingo.updatedAt ?? undefined,
    }
  }

  static toDomain(raw: RawBingo): Bingo {
    return new Bingo(
      {
        date: raw.date,
        name: raw.name,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id
    )
  }
}

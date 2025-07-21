import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'
import { PrismaCardMapper } from '../mappers/prisma-card-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaCardsRepository implements CardsRepository {
  constructor(private prisma: PrismaService) {}

  async countByBingoId(bingoId: string): Promise<number> {
    const quantityCards = await this.prisma.card.count({
      where: {
        bingoId,
      },
    })

    return quantityCards
  }

  async saveMany(cards: Card[]): Promise<void> {
    const raw = cards.map(PrismaCardMapper.toPrisma)

    await this.prisma.card.createMany({
      data: raw,
    })
  }
}

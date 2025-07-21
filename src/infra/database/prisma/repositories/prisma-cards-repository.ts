import { Card } from '@application/entities/card'
import {
  CardsRepository,
  FindByNumberProps,
} from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'
import { PrismaCardMapper } from '../mappers/prisma-card-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaCardsRepository implements CardsRepository {
  constructor(private prisma: PrismaService) {}

  async findByNumber(props: FindByNumberProps): Promise<Card | null> {
    const raw = await this.prisma.card.findFirst({
      where: {
        bingoId: props.bingoId,
        number: props.number,
      },
    })

    if (!raw) {
      return null
    }

    return PrismaCardMapper.toDomain(raw)
  }

  async findAllNotSaled(bingoId: string): Promise<Card[]> {
    const raw = await this.prisma.card.findMany({
      where: {
        bingoId,
        hasSaled: false,
      },
    })

    return raw.map(PrismaCardMapper.toDomain)
  }

  async countByBingoId(bingoId: string): Promise<number> {
    const quantityCards = await this.prisma.card.count({
      where: {
        bingoId,
      },
    })

    return quantityCards
  }

  async save(card: Card): Promise<void> {
    const raw = PrismaCardMapper.toPrisma(card)

    await this.prisma.card.update({
      where: {
        id: card.id,
      },
      data: raw,
    })
  }

  async createMany(cards: Card[]): Promise<void> {
    const raw = cards.map(PrismaCardMapper.toPrisma)

    await this.prisma.card.createMany({
      data: raw,
    })
  }
}

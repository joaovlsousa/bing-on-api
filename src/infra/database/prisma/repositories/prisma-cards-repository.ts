import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'
import { PrismaCardMapper } from '../mappers/prisma-card-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaCardsRepository implements CardsRepository {
  constructor(private prisma: PrismaService) {}

  async create(card: Card): Promise<void> {
    const raw = PrismaCardMapper.toPrisma(card)

    await this.prisma.card.create({
      data: raw,
    })
  }
}

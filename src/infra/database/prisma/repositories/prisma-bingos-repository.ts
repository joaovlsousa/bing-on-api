import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable } from '@nestjs/common'
import { PrismaBingoMapper } from '../mappers/prisma-bingo-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaBingosRepository implements BingosRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Bingo[]> {
    const bingos = await this.prisma.bingo.findMany()

    return bingos.map(PrismaBingoMapper.toDomain)
  }

  async findById(bingoId: string): Promise<Bingo | null> {
    const bingo = await this.prisma.bingo.findUnique({
      where: {
        id: bingoId,
      },
    })

    if (!bingo) {
      return null
    }

    return PrismaBingoMapper.toDomain(bingo)
  }

  async save(bingo: Bingo): Promise<void> {
    await this.prisma.bingo.update({
      where: {
        id: bingo.id,
      },
      data: PrismaBingoMapper.toPrisma(bingo),
    })
  }

  async create(bingo: Bingo): Promise<void> {
    await this.prisma.bingo.create({
      data: PrismaBingoMapper.toPrisma(bingo),
    })
  }
}

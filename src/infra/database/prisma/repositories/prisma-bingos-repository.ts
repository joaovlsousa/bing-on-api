import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaBingosRepository implements BingosRepository {
  constructor(private prisma: PrismaService) {
    console.log({ prisma: this.prisma })
  }

  async create(bingo: Bingo): Promise<void> {
    console.log({ bingo })

    await this.prisma.bingo.create({
      data: {
        id: bingo.id,
        name: bingo.name,
        date: bingo.date,
        createdAt: bingo.createdAt,
      },
    })
  }
}

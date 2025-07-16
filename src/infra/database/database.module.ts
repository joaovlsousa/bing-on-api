import { BingosRepository } from '@application/repositories/bingos-repository'
import { CardsRepository } from '@application/repositories/cards-repository'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaBingosRepository } from './prisma/repositories/prisma-bingos-repository'
import { PrismaCardsRepository } from './prisma/repositories/prisma-cards-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: BingosRepository,
      useClass: PrismaBingosRepository,
    },
    {
      provide: CardsRepository,
      useClass: PrismaCardsRepository,
    },
  ],
  exports: [BingosRepository, CardsRepository],
})
export class DatabaseModule {}

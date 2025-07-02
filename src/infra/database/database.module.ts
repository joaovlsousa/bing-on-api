import { BingosRepository } from '@application/repositories/bingos-repository'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaBingosRepository } from './prisma/repositories/prisma-bingos-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: BingosRepository,
      useClass: PrismaBingosRepository,
    },
  ],
  exports: [BingosRepository],
})
export class DatabaseModule {}

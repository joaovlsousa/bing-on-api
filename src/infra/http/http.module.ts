import { CreateBingo } from '@application/use-cases/create-bingo'
import { UpdateBingo } from '@application/use-cases/update-bingo'
import { DatabaseModule } from '@infra/database/database.module'
import { Module } from '@nestjs/common'
import { BingosController } from './controllers/bingos.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [BingosController],
  providers: [CreateBingo, UpdateBingo],
})
export class HttpModule {}

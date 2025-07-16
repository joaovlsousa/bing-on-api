import { CreateBingo } from '@application/use-cases/create-bingo'
import { GetAllBingos } from '@application/use-cases/get-all-bingos'
import { GetBingo } from '@application/use-cases/get-bingo'
import { SaveCards } from '@application/use-cases/save-cards'
import { UpdateBingo } from '@application/use-cases/update-bingo'
import { DatabaseModule } from '@infra/database/database.module'
import { Module } from '@nestjs/common'
import { BingosController } from './controllers/bingos.controller'
import { CardsController } from './controllers/cards.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [BingosController, CardsController],
  providers: [CreateBingo, UpdateBingo, GetAllBingos, GetBingo, SaveCards],
})
export class HttpModule {}

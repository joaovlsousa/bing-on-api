import { CreateBingo } from '@application/use-cases/create-bingo'
import { GetAllBingos } from '@application/use-cases/get-all-bingos'
import { GetAllCardsNotSaled } from '@application/use-cases/get-all-cards-not-saled'
import { GetBingo } from '@application/use-cases/get-bingo'
import { SaveCards } from '@application/use-cases/save-cards'
import { SellCards } from '@application/use-cases/sell-cards'
import { StartBingo } from '@application/use-cases/start-bingo'
import { UpdateBingo } from '@application/use-cases/update-bingo'
import { DatabaseModule } from '@infra/database/database.module'
import { Module } from '@nestjs/common'
import { BingosController } from './controllers/bingos.controller'
import { CardsController } from './controllers/cards.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [BingosController, CardsController],
  providers: [
    CreateBingo,
    UpdateBingo,
    GetAllBingos,
    GetBingo,
    StartBingo,
    SaveCards,
    GetAllCardsNotSaled,
    SellCards,
  ],
})
export class HttpModule {}

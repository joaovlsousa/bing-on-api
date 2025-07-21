import { GetAllCardsNotSaled } from '@application/use-cases/get-all-cards-not-saled'
import { SaveCards } from '@application/use-cases/save-cards'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SaveCardsDTO } from '../dtos/save-cards.dto'

@Controller('bingos/:bingoId/cards')
export class CardsController {
  constructor(
    private saveCards: SaveCards,
    private getAllCardsNotSaled: GetAllCardsNotSaled
  ) {}

  @Post()
  async save(@Body() body: SaveCardsDTO, @Param('bingoId') bingoId: string) {
    const { quantity } = body

    await this.saveCards.execute({
      bingoId,
      quantity,
    })
  }

  @Get()
  async getAll(@Param('bingoId') bingoId: string) {
    const { cards } = await this.getAllCardsNotSaled.execute({
      bingoId,
    })

    return cards
  }
}

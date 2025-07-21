import { SaveCards } from '@application/use-cases/save-cards'
import { Body, Controller, Param, Post } from '@nestjs/common'
import { SaveCardsDTO } from '../dtos/save-cards.dto'

@Controller()
export class CardsController {
  constructor(private saveCards: SaveCards) {}

  @Post('bingos/:bingoId/cards')
  async save(@Body() body: SaveCardsDTO, @Param('bingoId') bingoId: string) {
    const { quantity } = body

    await this.saveCards.execute({
      bingoId,
      quantity,
    })
  }
}

import { GetAllCardsNotSaled } from '@application/use-cases/get-all-cards-not-saled'
import { SaveCards } from '@application/use-cases/save-cards'
import { SellCards } from '@application/use-cases/sell-cards'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SaveCardsDTO } from '../dtos/save-cards.dto'
import { SellCardsDTO } from '../dtos/sell-cards.dto'

@Controller('bingos/:bingoId/cards')
export class CardsController {
  constructor(
    private saveCards: SaveCards,
    private getAllCardsNotSaled: GetAllCardsNotSaled,
    private sellCards: SellCards
  ) {}

  @Post()
  async save(@Body() body: SaveCardsDTO, @Param('bingoId') bingoId: string) {
    const { quantity } = body

    await this.saveCards.execute({
      bingoId,
      quantity,
    })
  }

  @Post('sell')
  async sell(@Body() body: SellCardsDTO, @Param('bingoId') bingoId: string) {
    const { buyerAddress, buyerName, buyerPhone, cardsNumbers } = body

    await this.sellCards.execute({
      bingoId,
      buyerAddress,
      buyerName,
      buyerPhone,
      cardsNumbers,
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

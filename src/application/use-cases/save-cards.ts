import { Card } from '@application/entities/card'
import { Column } from '@application/entities/column'
import { CardsRepository } from '@application/repositories/cards-repository'
import { GenerateCard } from '@helpers/generate-card'
import { verifyCardsQuantityRequested } from '@helpers/verify-cards-quantity-requested'
import { BadRequestException, Injectable } from '@nestjs/common'

interface SaveCardsRequest {
  bingoId: string
  quantity: number
}

@Injectable()
export class SaveCards {
  constructor(private cardsRepository: CardsRepository) {}

  async execute(request: SaveCardsRequest): Promise<void> {
    const { bingoId, quantity } = request

    const isCorrectQuantity = verifyCardsQuantityRequested(quantity)

    if (!isCorrectQuantity) {
      throw new BadRequestException('Incorrect quantity')
    }

    const lastCard = await this.cardsRepository.findLastByBingoId(bingoId)
    const cards: Card[] = []
    let cardNumber = lastCard?.number ?? 1001

    for (let i = 0; i < quantity; i++) {
      const columnB = new Column(GenerateCard.generateColumnB())
      const columnI = new Column(GenerateCard.generateColumnI())
      const columnN = new Column(GenerateCard.generateColumnN())
      const columnG = new Column(GenerateCard.generateColumnG())
      const columnO = new Column(GenerateCard.generateColumnO())

      cards.push(
        new Card({
          bingoId,
          number: cardNumber,
          columnB,
          columnI,
          columnN,
          columnG,
          columnO,
        })
      )

      cardNumber++
    }

    await this.cardsRepository.saveMany(cards)
  }
}

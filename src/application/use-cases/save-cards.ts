import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'
import { verifyCardsQuantityRequested } from '@helpers/verify-cards-quantity-requested'
import { BadRequestException, Injectable } from '@nestjs/common'
import { makeCard } from '@test/factories/card-factory'

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

    const quantityCards = await this.cardsRepository.countByBingoId(bingoId)
    const cards: Card[] = []
    let cardNumber = quantityCards + 1001

    for (let i = 0; i < quantity; i++) {
      cards.push(
        makeCard({
          bingoId,
          number: cardNumber,
        })
      )

      cardNumber++
    }

    await this.cardsRepository.createMany(cards)
  }
}

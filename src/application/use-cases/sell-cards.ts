import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable, NotFoundException } from '@nestjs/common'

interface SellCardsRequest {
  buyerName: string
  buyerAddress: string
  buyerPhone: string
  bingoId: string
  cardsNumbers: number[]
}

@Injectable()
export class SellCards {
  constructor(private cardsRepository: CardsRepository) {}

  async execute(request: SellCardsRequest): Promise<void> {
    const { bingoId, buyerAddress, buyerName, buyerPhone, cardsNumbers } =
      request

    const cardsNumbersNotFound: number[] = []

    for (const cardNumber of cardsNumbers) {
      const card = await this.cardsRepository.findByNumber({
        bingoId,
        number: cardNumber,
      })

      if (!card) {
        cardsNumbersNotFound.push(cardNumber)

        continue
      }

      card.sell({
        buyerAddress,
        buyerName,
        buyerPhone,
      })

      await this.cardsRepository.save(card)
    }

    if (cardsNumbersNotFound.length) {
      throw new NotFoundException(
        `Cards with numbers ${cardsNumbersNotFound.join(', ')} not found`
      )
    }
  }
}

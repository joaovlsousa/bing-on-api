import { Card } from '@application/entities/card'
import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'

interface GetAllCardsNotSaledRequest {
  bingoId: string
}

interface GetAllCardsNotSaledResponse {
  cards: Card[]
}

@Injectable()
export class GetAllCardsNotSaled {
  constructor(private cardsRepository: CardsRepository) {}

  async execute(
    request: GetAllCardsNotSaledRequest
  ): Promise<GetAllCardsNotSaledResponse> {
    const { bingoId } = request

    const cards = await this.cardsRepository.findAllNotSaled(bingoId)

    return {
      cards,
    }
  }
}

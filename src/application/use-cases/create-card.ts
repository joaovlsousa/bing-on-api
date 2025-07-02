import { Card } from '@application/entities/card'
import { Column } from '@application/entities/column'
import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'

interface CreateCardRequest {
  bingoId: string
  columnB: Column
  columnI: Column
  columnN: Column
  columnG: Column
  columnO: Column
  number: number
  buyerAddress?: string
  buyerName?: string
  buyerPhone?: string
}

interface CreateCardResponse {
  card: Card
}

@Injectable()
export class CreateCard {
  constructor(private cardsRepository: CardsRepository) {}

  async execute(request: CreateCardRequest): Promise<CreateCardResponse> {
    const {
      bingoId,
      number,
      columnB,
      columnI,
      columnN,
      columnG,
      columnO,
      buyerAddress,
      buyerName,
      buyerPhone,
    } = request

    const card = new Card({
      bingoId,
      number,
      columnB,
      columnI,
      columnN,
      columnG,
      columnO,
      buyerAddress,
      buyerName,
      buyerPhone,
    })

    await this.cardsRepository.create(card)

    return {
      card,
    }
  }
}

import { CardsRepository } from '@application/repositories/cards-repository'
import { Injectable } from '@nestjs/common'

interface StartBingoRequest {
  bingoId: string
}

@Injectable()
export class StartBingo {
  constructor(private cardsRepository: CardsRepository) {}

  async execute(request: StartBingoRequest): Promise<void> {
    const { bingoId } = request

    await this.cardsRepository.removeAllNotSaled(bingoId)
  }
}

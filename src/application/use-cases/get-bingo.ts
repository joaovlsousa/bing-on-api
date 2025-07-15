import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable, NotFoundException } from '@nestjs/common'

interface GetBingoRequest {
  bingoId: string
}
interface GetBingoResponse {
  bingo: Bingo
}

@Injectable()
export class GetBingo {
  constructor(private bingosRepository: BingosRepository) {}

  async execute(request: GetBingoRequest): Promise<GetBingoResponse> {
    const { bingoId } = request

    const bingo = await this.bingosRepository.findById(bingoId)

    if (!bingo) {
      throw new NotFoundException('Bingo not found')
    }

    return {
      bingo,
    }
  }
}

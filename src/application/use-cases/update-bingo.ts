import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable, NotFoundException } from '@nestjs/common'

interface UpdateBingoRequest {
  bingoId: string
  name: string
  date: Date
}

interface UpdateBingoResponse {
  bingo: Bingo
}

@Injectable()
export class UpdateBingo {
  constructor(private bingosRepository: BingosRepository) {}

  async execute(request: UpdateBingoRequest): Promise<UpdateBingoResponse> {
    const { bingoId, date, name } = request

    const isBingoExists = await this.bingosRepository.findById(bingoId)

    if (!isBingoExists) {
      throw new NotFoundException('Bingo not found')
    }

    const bingo = new Bingo(
      {
        date,
        name,
        createdAt: isBingoExists.createdAt,
        updatedAt: new Date(),
      },
      bingoId
    )

    await this.bingosRepository.save(bingo)

    return {
      bingo,
    }
  }
}

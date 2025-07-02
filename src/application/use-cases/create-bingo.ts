import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable } from '@nestjs/common'

interface CreateBingoRequest {
  name: string
  date: Date
}

interface CreateBingoResponse {
  bingo: Bingo
}

@Injectable()
export class CreateBingo {
  constructor(private bingosRepository: BingosRepository) {}

  async execute(request: CreateBingoRequest): Promise<CreateBingoResponse> {
    const { date, name } = request

    const bingo = new Bingo({
      date,
      name,
    })

    await this.bingosRepository.create(bingo)

    return {
      bingo,
    }
  }
}

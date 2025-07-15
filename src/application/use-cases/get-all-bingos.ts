import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'
import { Injectable } from '@nestjs/common'

interface GetAllBingosResponse {
  bingos: Bingo[]
}

@Injectable()
export class GetAllBingos {
  constructor(private bingosRepository: BingosRepository) {}

  async execute(): Promise<GetAllBingosResponse> {
    const bingos = await this.bingosRepository.findAll()

    return {
      bingos,
    }
  }
}

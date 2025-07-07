import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'

export class InMemoryBingosRepository implements BingosRepository {
  public bingos: Bingo[] = []

  async findAll(): Promise<Bingo[]> {
    return this.bingos
  }

  async findById(bingoId: string): Promise<Bingo | null> {
    const bingo = this.bingos.find((item) => item.id === bingoId)

    if (!bingo) {
      return null
    }

    return bingo
  }

  async save(bingo: Bingo): Promise<void> {
    const index = this.bingos.findIndex((item) => item.id === bingo.id)

    if (index >= 0) {
      this.bingos[index] = bingo
    }
  }

  async create(bingo: Bingo): Promise<void> {
    this.bingos.push(bingo)
  }
}

import { Bingo } from '@application/entities/bingo'
import { BingosRepository } from '@application/repositories/bingos-repository'

export class InMemoryBingosRepository implements BingosRepository {
  public bingos: Bingo[] = []

  async create(bingo: Bingo): Promise<void> {
    this.bingos.push(bingo)
  }
}

import { Bingo } from '@application/entities/bingo'

export abstract class BingosRepository {
  abstract create(bingo: Bingo): Promise<void>
  abstract findAll(): Promise<Bingo[]>
  abstract findById(bingoId: string): Promise<Bingo | null>
  abstract save(bingo: Bingo): Promise<void>
}

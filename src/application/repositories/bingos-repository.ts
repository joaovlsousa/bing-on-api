import { Bingo } from '@application/entities/bingo'

export abstract class BingosRepository {
  abstract create(bingo: Bingo): Promise<void>
}

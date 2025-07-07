import { Bingo, BingoProps } from '@application/entities/bingo'

type Override = Partial<BingoProps>

export function makeBingo(override: Override = {}) {
  return new Bingo({
    name: 'Bingo teste',
    date: new Date(),
    ...override,
  })
}

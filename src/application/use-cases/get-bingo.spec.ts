import { NotFoundException } from '@nestjs/common'
import { makeBingo } from '@test/factories/bingo-factory'
import { InMemoryBingosRepository } from '@test/repositories/in-memory-bingos-repository'
import { CreateBingo } from './create-bingo'
import { GetBingo } from './get-bingo'

describe('Get bingo', () => {
  it('should be able to get a bingo', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)
    const getBingo = new GetBingo(bingosRepository)

    await createBingo.execute(makeBingo())
    await createBingo.execute(makeBingo())
    const { bingo } = await createBingo.execute(makeBingo())

    const { bingo: bingoFound } = await getBingo.execute({ bingoId: bingo.id })

    expect(bingoFound).toBeTruthy()
    expect(bingoFound.id).toEqual(bingo.id)
  })

  it('should not be able to get a bingo', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)
    const getBingo = new GetBingo(bingosRepository)

    await createBingo.execute(makeBingo())
    await createBingo.execute(makeBingo())

    expect(getBingo.execute({ bingoId: 'fake-id' })).rejects.toThrow(
      NotFoundException
    )
  })
})

import { NotFoundException } from '@nestjs/common'
import { makeBingo } from '@test/factories/bingo-factory'
import { InMemoryBingosRepository } from '@test/repositories/in-memory-bingos-repository'
import { CreateBingo } from './create-bingo'
import { UpdateBingo } from './update-bingo'

describe('Update bingo', () => {
  it('should be able to update a bingo', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)
    const updateBingo = new UpdateBingo(bingosRepository)

    const { bingo } = await createBingo.execute(makeBingo())

    const { bingo: bingoUpdated } = await updateBingo.execute({
      bingoId: bingo.id,
      date: new Date(),
      name: 'Bingo updated',
    })

    expect(bingosRepository.bingos[0].name).toEqual(bingoUpdated.name)
    expect(bingosRepository.bingos[0].date).toEqual(bingoUpdated.date)
  })

  it('should not be able to update a bingo', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)
    const updateBingo = new UpdateBingo(bingosRepository)

    await createBingo.execute(makeBingo())

    expect(
      updateBingo.execute({
        bingoId: 'invalid-id',
        name: 'Bingo updated',
        date: new Date(),
      })
    ).rejects.toThrow(NotFoundException)
  })
})

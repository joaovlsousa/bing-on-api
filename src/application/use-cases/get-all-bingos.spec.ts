import { makeBingo } from '@test/factories/bingo-factory'
import { InMemoryBingosRepository } from '@test/repositories/in-memory-bingos-repository'
import { CreateBingo } from './create-bingo'
import { GetAllBingos } from './get-all-bingos'

describe('Get all bingos', () => {
  it('should be able to get all bingos', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)
    const getAllBingos = new GetAllBingos(bingosRepository)

    await createBingo.execute(makeBingo())
    await createBingo.execute(makeBingo())
    await createBingo.execute(makeBingo())

    const { bingos } = await getAllBingos.execute()

    expect(bingos).toHaveLength(bingosRepository.bingos.length)
  })
})

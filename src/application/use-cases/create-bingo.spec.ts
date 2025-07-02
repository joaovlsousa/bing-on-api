import { InMemoryBingosRepository } from '@test/repositories/in-memory-bingos-repository'
import { CreateBingo } from './create-bingo'

describe('Create bingo', () => {
  it('should be able to create a bingo', async () => {
    const bingosRepository = new InMemoryBingosRepository()
    const createBingo = new CreateBingo(bingosRepository)

    const { bingo } = await createBingo.execute({
      name: 'Festa de São José 2025',
      date: new Date(),
    })

    expect(bingosRepository.bingos).toHaveLength(1)
    expect(bingosRepository.bingos[0]).toEqual(bingo)
  })
})

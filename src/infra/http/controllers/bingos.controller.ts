import { CreateBingo } from '@application/use-cases/create-bingo'
import { Body, Controller, Post } from '@nestjs/common'
import { CreateBingoDTO } from '../dtos/create-bingo.dto'

@Controller('bingos')
export class BingosController {
  constructor(private createBingo: CreateBingo) {}

  @Post()
  async create(@Body() body: CreateBingoDTO) {
    const { date, name } = body

    const { bingo } = await this.createBingo.execute({
      name,
      date,
    })

    return {
      id: bingo.id,
      name: bingo.name,
      date: bingo.date,
      createdAt: bingo.createdAt,
      updatedAt: bingo.updatedAt,
    }
  }
}

import { CreateBingo } from '@application/use-cases/create-bingo'
import { UpdateBingo } from '@application/use-cases/update-bingo'
import { Body, Controller, Param, Post, Put } from '@nestjs/common'
import { SaveBingoDTO } from '../dtos/create-bingo.dto'

@Controller('bingos')
export class BingosController {
  constructor(
    private createBingo: CreateBingo,
    private updateBingo: UpdateBingo
  ) {}

  @Post()
  async create(@Body() body: SaveBingoDTO) {
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

  @Put(':bingoId')
  async update(@Body() body: SaveBingoDTO, @Param('bingoId') bingoId: string) {
    const { date, name } = body

    const { bingo } = await this.updateBingo.execute({
      bingoId,
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

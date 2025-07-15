import { CreateBingo } from '@application/use-cases/create-bingo'
import { GetAllBingos } from '@application/use-cases/get-all-bingos'
import { GetBingo } from '@application/use-cases/get-bingo'
import { UpdateBingo } from '@application/use-cases/update-bingo'
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { SaveBingoDTO } from '../dtos/save-bingo.dto'
import { BingoViewModel } from '../view-models/bingo-view-model'

@Controller('bingos')
export class BingosController {
  constructor(
    private createBingo: CreateBingo,
    private updateBingo: UpdateBingo,
    private getAllBingos: GetAllBingos,
    private getBingo: GetBingo
  ) {}

  @Get()
  async getAll() {
    const { bingos } = await this.getAllBingos.execute()

    return bingos.map(BingoViewModel.toHTTP)
  }

  @Get(':bingoId')
  async getOne(@Param('bingoId') bingoId: string) {
    const { bingo } = await this.getBingo.execute({ bingoId })

    return {
      bingo: BingoViewModel.toHTTP(bingo),
    }
  }

  @Post()
  async create(@Body() body: SaveBingoDTO) {
    const { date, name } = body

    const { bingo } = await this.createBingo.execute({
      name,
      date: new Date(date),
    })

    return {
      bingoId: bingo.id,
    }
  }

  @Put(':bingoId')
  async update(@Body() body: SaveBingoDTO, @Param('bingoId') bingoId: string) {
    const { date, name } = body

    const { bingo } = await this.updateBingo.execute({
      bingoId,
      name,
      date: new Date(date),
    })

    return {
      bingoId: bingo.id,
    }
  }
}

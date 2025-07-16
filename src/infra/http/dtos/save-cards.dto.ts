import { IsNotEmpty, IsNumber } from 'class-validator'

export class SaveCardsDTO {
  @IsNotEmpty()
  @IsNumber()
  quantity: number
}

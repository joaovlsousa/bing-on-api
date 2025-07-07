import { IsDateString, IsNotEmpty, MinLength } from 'class-validator'

export class SaveBingoDTO {
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @IsNotEmpty()
  @IsDateString()
  date: Date
}

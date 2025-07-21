import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class SellCardsDTO {
  @IsNotEmpty()
  @IsString()
  buyerName: string

  @IsNotEmpty()
  @IsString()
  buyerAddress: string

  @IsNotEmpty()
  @IsString()
  buyerPhone: string

  @IsNotEmpty()
  @IsArray()
  cardsNumbers: number[]
}

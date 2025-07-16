import { Card } from '@application/entities/card'
import { Column } from '@application/entities/column'
import { Card as RawCard } from '@prisma/client'

export class PrismaCardMapper {
  static toPrisma(card: Card) {
    return {
      id: card.id,
      number: card.number,
      bingoId: card.bingoId,
      amountOfNumbersMarked: card.amountOfNumbersMarked,
      columnB: card.columnB.value,
      columnI: card.columnI.value,
      columnN: card.columnN.value,
      columnG: card.columnG.value,
      columnO: card.columnO.value,
      buyerName: card.buyerName,
      buyerAddress: card.buyerAddress,
      buyerPhone: card.buyerPhone,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt ?? undefined,
    }
  }

  static toDomain(raw: RawCard): Card {
    return new Card(
      {
        bingoId: raw.bingoId,
        number: raw.number,
        columnB: new Column(raw.columnB),
        columnI: new Column(raw.columnI),
        columnN: new Column(raw.columnN),
        columnG: new Column(raw.columnG),
        columnO: new Column(raw.columnO),
        amountOfNumbersMarked: raw.amountOfNumbersMarked,
        hasSaled: raw.hasSaled,
        buyerAddress: raw.buyerAddress,
        buyerName: raw.buyerName,
        buyerPhone: raw.buyerPhone,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id
    )
  }
}

import { Card } from '@application/entities/card'

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
}

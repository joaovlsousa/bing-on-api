import { Card, CardProps } from '@application/entities/card'
import { Column } from '@application/entities/column'
import { GenerateCard } from '@helpers/generate-card'

type Override = Partial<CardProps>

export function makeCard(override: Override = {}) {
  const columnB = new Column(GenerateCard.generateColumnB())
  const columnI = new Column(GenerateCard.generateColumnI())
  const columnN = new Column(GenerateCard.generateColumnN())
  const columnG = new Column(GenerateCard.generateColumnG())
  const columnO = new Column(GenerateCard.generateColumnO())

  return new Card({
    bingoId: 'fake-id',
    number: 1001,
    columnB,
    columnI,
    columnN,
    columnG,
    columnO,
    ...override,
  })
}

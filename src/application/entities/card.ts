import { JoinBaseEntityProps } from '@helpers/join-base-entity-props'
import { Replace } from '@helpers/replace'
import { BaseEntity } from './base-entity'
import { Column } from './column'

interface CardProps {
  bingoId: string
  number: number
  hasSaled: boolean
  amountOfNumbersMarked: number
  columnB: Column
  columnI: Column
  columnN: Column
  columnG: Column
  columnO: Column
  buyerName?: string | null
  buyerAddress?: string | null
  buyerPhone?: string | null
}

export class Card extends BaseEntity {
  private props: CardProps

  constructor(
    props: JoinBaseEntityProps<
      Replace<
        CardProps,
        {
          hasSaled?: boolean
          amountOfNumbersMarked?: number
        }
      >
    >,
    id?: string
  ) {
    super(
      {
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
      },
      id
    )

    this.props = {
      ...props,
      hasSaled: props.hasSaled ?? false,
      amountOfNumbersMarked: props.amountOfNumbersMarked ?? 0,
    }
  }

  public get bingoId(): string {
    return this.props.bingoId
  }

  public get number(): number {
    return this.props.number
  }

  public get amountOfNumbersMarked(): number {
    return this.props.amountOfNumbersMarked
  }

  public get columnB(): Column {
    return this.props.columnB
  }

  public get columnI(): Column {
    return this.props.columnI
  }

  public get columnN(): Column {
    return this.props.columnN
  }

  public get columnG(): Column {
    return this.props.columnG
  }

  public get columnO(): Column {
    return this.props.columnO
  }

  public get buyerName(): string | null | undefined {
    return this.props.buyerName
  }

  public get buyerAddress(): string | null | undefined {
    return this.props.buyerAddress
  }

  public get buyerPhone(): string | null | undefined {
    return this.props.buyerPhone
  }
}

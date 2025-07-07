import { JoinBaseEntityProps } from '@helpers/join-base-entity-props'
import { BaseEntity } from './base-entity'

export interface BingoProps {
  name: string
  date: Date
}

export class Bingo extends BaseEntity {
  private props: BingoProps

  constructor(props: JoinBaseEntityProps<BingoProps>, id?: string) {
    super(
      {
        createdAt: props.createdAt,
        updatedAt: props.updatedAt,
      },
      id
    )

    this.props = {
      date: props.date,
      name: props.name,
    }
  }

  public get name(): string {
    return this.props.name
  }

  public get date(): Date {
    return this.props.date
  }
}

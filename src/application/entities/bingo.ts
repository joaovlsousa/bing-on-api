import { JoinBaseEntityProps } from '@helpers/join-base-entity-props'
import { BaseEntity } from './base-entity'

interface BingoProps {
  name: string
  date: Date
}

export class Bingo extends BaseEntity {
  private props: BingoProps

  constructor(props: JoinBaseEntityProps<BingoProps>) {
    super({
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    })

    this.props = props
  }

  public get name(): string {
    return this.props.name
  }

  public get date(): Date {
    return this.props.date
  }
}

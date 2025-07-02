import { generateId } from '@helpers/generate-id'
import { Replace } from '@helpers/replace'

export interface BaseEntityProps {
  createdAt: Date
  updatedAt?: Date | null
}

export class BaseEntity {
  private _id: string
  private baseProps: BaseEntityProps

  constructor(
    props: Replace<BaseEntityProps, { createdAt?: Date }>,
    id?: string
  ) {
    this._id = id ?? generateId()
    this.baseProps = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public get createdAt(): Date {
    return this.baseProps.createdAt
  }

  public get updatedAt(): Date | null | undefined {
    return this.baseProps.updatedAt
  }
}

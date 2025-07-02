import { BaseEntityProps } from '@application/entities/base-entity'
import { Replace } from './replace'

export type JoinBaseEntityProps<T> = T &
  Replace<BaseEntityProps, { createdAt?: Date }>

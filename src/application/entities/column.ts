export class Column {
  private readonly column: number[]

  public get value(): number[] {
    return this.column
  }

  private validateLength(column: number[]): boolean {
    return column.length === 5
  }

  constructor(column: number[]) {
    const isValidLength = this.validateLength(column)

    if (!isValidLength) {
      throw new Error('Column length is not valid')
    }

    this.column = column
  }
}

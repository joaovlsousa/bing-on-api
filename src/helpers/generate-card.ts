type ColumnType = 'b' | 'i' | 'n' | 'g' | 'o'

export class GenerateCard {
  public static generateColumnB(): number[] {
    return GenerateCard.generateColumn('b')
  }

  public static generateColumnI(): number[] {
    return GenerateCard.generateColumn('i')
  }

  public static generateColumnN(): number[] {
    return GenerateCard.generateColumn('n')
  }

  public static generateColumnG(): number[] {
    return GenerateCard.generateColumn('g')
  }

  public static generateColumnO(): number[] {
    return GenerateCard.generateColumn('o')
  }

  private static generateColumn(columnType: ColumnType): number[] {
    const column: number[] = []

    let minValueCondition: number
    let maxValueCondition: number

    switch (columnType) {
      case 'b':
        minValueCondition = 1
        maxValueCondition = 15

        break

      case 'i':
        minValueCondition = 16
        maxValueCondition = 30

        break

      case 'n':
        minValueCondition = 31
        maxValueCondition = 45

        break

      case 'g':
        minValueCondition = 46
        maxValueCondition = 60

        break
      case 'o':
        minValueCondition = 61
        maxValueCondition = 75

        break

      default:
        throw new Error('invalid column type')
    }

    for (let j = 0; j < 5; j++) {
      let number = Math.floor(Math.random() * maxValueCondition)

      while (number < minValueCondition || column.includes(number)) {
        number = Math.floor(Math.random() * maxValueCondition)
      }

      column.push(number)
    }

    column.sort((a, b) => a - b)

    return column
  }
}

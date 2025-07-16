const MIN_CARDS_QUANTITY = 500
const MAX_CARDS_QUANTITY = 2000

export function verifyCardsQuantityRequested(quantity: number): boolean {
  if (
    quantity > MAX_CARDS_QUANTITY ||
    quantity < MIN_CARDS_QUANTITY ||
    quantity % 500 !== 0
  ) {
    return false
  }

  return true
}

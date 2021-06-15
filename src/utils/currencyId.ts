import { Currency } from '@blocktree/uniswap-sdk-core'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'DEX'
  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}

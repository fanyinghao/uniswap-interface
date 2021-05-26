import { Currency, WETH9, Ether } from '@blocktree/uniswap-sdk-core'
import { supportedChainId } from './supportedChainId'

export function unwrappedToken(currency: Currency): Currency {
  if (currency.isNative) return currency
  const formattedChainId = supportedChainId(currency.chainId)
  if (formattedChainId && currency.equals(WETH9[formattedChainId])) return Ether.onChain(currency.chainId)
  return currency
}

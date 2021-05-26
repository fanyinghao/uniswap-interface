import { Token, Price } from '@blocktree/uniswap-sdk-core'
import { tickToPrice } from '@blocktree/uniswap-v3-sdk'

export function getTickToPrice(
  baseToken: Token | undefined,
  quoteToken: Token | undefined,
  tick: number | undefined
): Price<Token, Token> | undefined {
  if (!baseToken || !quoteToken || !tick) {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}

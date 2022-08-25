import { AlphaRouter } from '@uniswap/smart-order-router'
import { Token, TradeType, Percent } from '@uniswap/sdk-core'
import { CurrencyAmount } from "@uniswap/smart-order-router"
import { Protocol } from "@uniswap/router-sdk"
import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/hfLXQgHpfUFhtcW_KAQaypAneuHkkh5h")
const router = new AlphaRouter({ chainId: 1, provider: provider as any})
let WETH = new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether')
let USDC = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
let wethAmount = CurrencyAmount.fromRawAmount(WETH, '10000000000000000');
let swapConfig = {
    slippageTolerance: new Percent(3, 1000)
}
let partialRoutingConfig = {
    protocols: [Protocol.V3],
    distributionPercent: 100
}

const func = async () => {
    const route = await router.route(wethAmount, USDC, TradeType.EXACT_INPUT, swapConfig as any, partialRoutingConfig as any);
    console.log(route)
}

func()
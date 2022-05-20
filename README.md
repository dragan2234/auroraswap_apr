# auroraswap_apr

This is a small app which calculates APR of the auroraswap pools. Put your pool index number in the line number 16.

This still needs futher development as numbers are not 100% correct.

Formula is:

AnnualTokenEmission = BRLPerBlock / 1e18 * NumOfSecondsInaYear(31556926) / BlockTime(1.1seconds)
PoolEmissionShare = allocPointOfThePool / totalAllocPoints
PoolRewardValuePerYear = AnnualTokenEmission * PoolEmissionShare * BRLprice;
APR = PoolRewardValuePerYear / Liquidity * 100

Liquidity is taken from DexScreener API. And this is the number which is probably not correct but I had troubles getting the TVL from the pools.

Liquidity is almost always similar to the TVL, but for example in pool No1 (NEAR-WETH) number is different and that's why in that case we have different result.

But in almost all other cases number is similar and we have same result as on https://vfat.tools/aurora/auroraswap/ .

Price is taken from CoinGecko API.

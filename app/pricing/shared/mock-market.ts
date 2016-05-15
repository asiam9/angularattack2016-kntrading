import {Market} from './market';
import {SYMBOLS} from './mock-market-symbols';


export var MarketData: Market = {
	"id": "DAUBI",
	"name": "Mr. Nice",
 	"marketStatusUrl":"../app/pricing/market/status.png",
  "marketImageUrl":"../app/pricing/market/market.png",
	"summary": {
		"mainIndexValue": 686112,
		"mainIndexDirectionUrl":"../app/pricing/market/down.png",
		"change": 20.04,
		"changePercentage": 0.29,
		"changeDirection": "-",
		"turnOver": 154029350313,
		"totalVolumeTraded": 5029858765,
		"numberOfTrades": 5951,
		"traded": 32,
		"up": 22,
		"down": 9
	},
	"symbols": SYMBOLS
}

import {Injectable} from '@angular/core';
import {SYMBOLS} from '../pricing/shared/mock-market-symbols';



@Injectable()
export class SymbolsService {
  getSymbolsList() {
      return Promise.resolve(SYMBOLS);
  }

  getSymbolById(symbolId:string){
    return SYMBOLS.filter(symbol=>symbol.id === symbolId)[0];
  }
}

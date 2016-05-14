import {Injectable} from '@angular/core';
import {SYMBOLS} from './mock-symbol';



@Injectable()
export class SymbolsService {
  getSymbolsList() {
      return Promise.resolve(SYMBOLS);
  }
}

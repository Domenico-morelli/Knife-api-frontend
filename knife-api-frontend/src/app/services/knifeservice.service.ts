import { MOCKEDKNIVES } from './../knife/mockedknifes';
import { Injectable } from '@angular/core';
import { KnifeInterface } from '../knife/knifeInterface';

@Injectable({
  providedIn: 'root'
})
export class KnifeserviceService {

  constructor() { }
  
  getKnivesArray(): KnifeInterface[]{
    return MOCKEDKNIVES;
  }


}

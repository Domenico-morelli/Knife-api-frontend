import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class KnifeFetcherServiceService {

  constructor(private HttpClient: HttpClient) { }

  getAvailableKnivesFromDB(){
    return this.HttpClient.get("http://localhost:8080/v2/knife/findByStatus?status=available")
  }
}

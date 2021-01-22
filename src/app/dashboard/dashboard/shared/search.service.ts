import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  readonly api_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  search_word(word:string){
    return this.http.get(this.api_url + word);
  }
}

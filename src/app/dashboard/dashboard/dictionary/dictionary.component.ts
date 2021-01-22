import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  constructor(private searchService: SearchService, private route: ActivatedRoute ) { }
  search_query:string;
  search_result;
  isLoading:boolean = false;
  wordNotFound:boolean = false;

  ngOnInit(): void {
    this.checkRouterWord();
  }

  search(){
    this.wordNotFound = false;
    this.search_result = [];
    if(this.search_query == null || this.search_query == ''){
      this.search_result = []
      return;
    }

    this.isLoading = true;

    this.searchService.search_word(this.search_query).subscribe((result)=>{
      this.search_result = result;
      // console.log(this.search_result);
      this.isLoading = false;
    },(err)=>{
      this.isLoading = false;
      this.wordNotFound = true;
    })
  }

  checkRouterWord(){
    this.route.paramMap.subscribe(res => {
      if(res.has('word')){
        this.search_query = res.get('word');
        this.search();
      }
    })
  }

}

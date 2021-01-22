import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.scss']
})
export class MeaningComponent implements OnInit {

  @Input() meaning: any;

  constructor() { }

  ngOnInit(): void {
  }

  playAudio(url){
    let audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

}

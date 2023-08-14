import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone:true,
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit,OnChanges {
  @Input() selectedHero!:Hero;

  constructor() { 
    // console.log(this.selectedHero);
  }

  ngOnInit() {
    // console.log(this.selectedHero);
  }
  ngOnChanges(){
   console.log(this.selectedHero);
  }

}
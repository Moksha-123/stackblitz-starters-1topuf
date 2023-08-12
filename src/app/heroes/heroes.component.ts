import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[HeroComponent,CommonModule]
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = HEROES;


  constructor() { 
    // console.log(this.heroes)
  }

  ngOnInit() {
    this.heroes= HEROES;
  }

}
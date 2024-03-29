import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent,HeroDetailsComponent]

})
export class AppComponent implements OnInit {

  constructor() { }
  selectedHero!:Hero;

  ngOnInit() {
  }
  onheroSelected(hero: Hero){
    console.log(hero);
    this.selectedHero = hero;
  }

}
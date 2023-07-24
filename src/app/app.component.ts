import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemonApp';



  
 



  constructor( private api: ApiService){  }

  @ViewChild('carrusel') carrusel!: ElementRef;


  ngOnInit(): void {
   
  }

  isActive(index: number){
    if(index === 1) {
      return true
    } else return false
  }

}



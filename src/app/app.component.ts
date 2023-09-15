import {Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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

  @HostListener('window:scroll', []) omWindowScroll() {
    this.scrollFunction();
  }


  ngOnInit(): void {
   
  }

  isActive(index: number){
    if(index === 1) {
      return true
    } else return false
  }


  scrollFunction(){
    const btn = document.getElementById('myBtn');
    
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
      btn!.style.display = 'block';
    } else {
      btn!.style.display = 'none'
    }

   

    
  
  }

  scrollToTop(pos = 0){
    if(pos != 0 ){
      document.body.scrollTop = 200; // For Safari
      document.documentElement.scrollTop = 400; // For Chrome, Firefox, IE and Opera
    }
    else {
      document.body.scrollTop = pos; // For Safari
      document.documentElement.scrollTop = pos; // For Chrome, Firefox, IE and Opera
    }
   
}

}



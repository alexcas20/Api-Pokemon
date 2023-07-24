import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [

      `
      .navbar-toggler{
        background-color: #FA6221
      }
      
      `

    
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [


    `

    

    hr{
      height: 20px;
      color: #fff;
      background-color: #fff;
    }

      .container-fluid{
        background-color: #FA6221;
     
      }


     
    
    
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

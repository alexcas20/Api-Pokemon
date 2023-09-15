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


      .icons i{
    color: #FFFFFF;
    cursor: pointer;
    font-size: 2rem;
    padding: 2rem 2rem 0 0;
    transition: all .2s ease-out;

  }

  .icons i:hover{
    
    color:#212529 ;
    transform: scale(1.3);
  }

     
    
    
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

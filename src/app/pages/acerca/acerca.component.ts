import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  dataAcerca : any;
  dataAbilities : any; 
  loading = false;
  dataMoves: any[] = [];


  //Stats
  hp: any;
  atck : any;
  defense: any;
  speed: any;


  constructor( private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

   
    const name = this.route.snapshot.paramMap.get('name');
  
    this.loading = true;
    setTimeout(() => {
      this.api.getPokemon(name!)
      .subscribe(data => {
      
       
        this.dataAcerca = data;
        this.dataMoves =  data.stats;

        

     

        //HP
          this.hp = this.dataMoves[0];
        

      


        //Attack
        this.atck = this.dataMoves[1];

       

        
        //Defense
        this.defense = this.dataMoves[2];

       

        
        //Attack
        this.speed = this.dataMoves[5];

        

        
       
        this.loading = false
       
      });
    },1000)
    


  }

}

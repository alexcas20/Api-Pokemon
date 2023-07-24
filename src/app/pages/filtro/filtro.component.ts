import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {


  dataTipos: any;
  listadoPokemons : any[] =[]; 
  listadoFinal : any[]= [];
  names: string[] = [];
  public page!: number;
  arregloFiltro: any[] = [];

  loading: any;

  tipoFlag: any;


  selectedIndex: any;

  selectFlag: number = 0;



  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.tiposPokemon()
      .subscribe(data => {
      
        this.dataTipos = data.results;
     


      
        
      });


      this.api.filterPokemon().subscribe(resp => {
        this.listadoPokemons= resp.results;
     
       

          this.listadoPokemons.forEach(el => {
            this.names.push(el.name);
          })

       

          this.names.forEach(el => {
            this.api.getPokemon(el)
              .subscribe(resp => {
                this.listadoFinal.push(resp);
                
              })
          })
         

      })

    
      



  }

 

  filtrar( elTipo:string){
    
  if(elTipo !== this.tipoFlag){
   
   

    this.loading = true;
    setTimeout(() => {

      const arregloFlag: any[] = [];
    this.listadoFinal.map(el => {
      el.types.find((p => {
        if(p.type.name === elTipo ){
          arregloFlag.push(el);
          this.tipoFlag = p.type.name;
          // this.arregloFiltro.push(el);
          
          
        }
        p.type.name === elTipo;
        
      }))
    })

    
    this.arregloFiltro = arregloFlag;
    this.loading = false;

    if(this.arregloFiltro.length <= 0){
      Swal.fire({
        title:'Pokemons not found',
        text:`0 results for Pokemos of type ${elTipo}`
      })

    

      
      
    }
    



    
  
    

    
    },2000)
    
  } else{
    Swal.fire({
      position: 'center',
      icon: 'question',
      title: 'You have already selected this type of pokemons!',
      showConfirmButton: false,
      timer: 1500
    })
  }
    
    
}

setIndex(index: number){
 
  if(index == 18 || index == 19){
   
    this.selectedIndex = 0;
    
  }
  this.selectedIndex = index;
}



}
  
   


  


    
  


  





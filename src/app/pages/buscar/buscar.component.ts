import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  listadoPokemons : any[] = []; 
  input: string = '';
  nRandom : number = 0;
  arregloP :any[] =[];
  dataBusqueda!: any;
  loading:boolean = false;

  listaStorage: any;

  

  public page!: number;

 
datos: any[] =[]
  busqueda: boolean = false;

  copiaListadoPokemons: any[] =[];

  hayBusqueda = false;


  constructor(private api: ApiService) { }

  ngOnInit(): void {

    
   
    for(let i =1 ; i<=60; i++){
      this.nRandom = Math.round(Math.random()*1000);
      this.arregloP.push(this.nRandom);
    }

    this.arregloP.forEach(el => {
      this.api.getPokemonsListado(el)
      .subscribe( data => {
      
        this.listadoPokemons.push(data);
        
      
       

     
      })
    } )

    this.copiaListadoPokemons = this.listadoPokemons;

 


  }


  buscarTeclado(e: any){
    if(e.key == 'Enter'){
   
      this.buscar();
    }
     
    
  }

  buscar(){
   

  
   
  if(this.busqueda){
    alert('busqueda TRUE')
    
    this.busqueda = false;

  
  
  } 
    else {
      
      this.showLoader();

      setTimeout(() => {
        this.api.getPokemon(this.input.toLowerCase())
        .subscribe(dta => {
          this.busqueda  = true;
          this.loading = false;
          this.dataBusqueda = dta;
          
         
         
          
          
          
        }, error => {
           Swal.fire({
            icon: 'error',
            title: 'No pokemons found with that name',
            text: 'Please write a correct pokemon :)',
            
           }) 

           this.delBusqueda();
       
           
        })
        
    this.input = ''
  
  
  
   
      }, 1500)
   
   
  
    }




  
   
   
  
  }




  fnHayBusqueda(){
   this.hayBusqueda = true
  
   localStorage.setItem('busqueda','true')
  }

  showLoader(){
  this.loading= true
  }

  delBusqueda(){
    
  this.busqueda = false;
  this.loading = false;
  }


 



  refresh(){
    this.delBusqueda();
  }




 

}









import { HttpClient } from '@angular/common/http';
import {  EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://pokeapi.co/api/v2';

  datosPokemon: any;


  @Output()
    pokemonsEmmiter = new EventEmitter();

  constructor(private http: HttpClient) { }


  //Info pokemon inicio 

  getPokemonInicio(): Observable<any>{
    const direccion = `${this.url}/pokemon?limit=4&offset=0`;
    return this.http.get<any>(direccion)
      

  }

  getPokemonsListado(id:number):Observable<any>{
    const direccion = `${this.url}/pokemon/${id}/`;
    return this.http.get<any>(direccion);
  }



  getPokemon(name:string):Observable<any>{
    const direccion = `${this.url}/pokemon/${name}/`;
    return this.http.get<any>(direccion);
  }

  tiposPokemon():Observable<any>{
    const direccion = `${this.url}/type`;
    return this.http.get<any>(direccion);
  }

  //Filter
  filterPokemon(): Observable<any>{
    const direccion = `${this.url}/pokemon?limit=200&offset=0`
    return this.http.get<any>(direccion);
  }




  setListPokemon(listPokemon: any){
    this.datosPokemon = listPokemon;
    this.sendList();
  }

  sendList(){
    
    this.pokemonsEmmiter.emit(this.datosPokemon);

  

    localStorage.setItem('lista Pokemons', JSON.stringify(this.datosPokemon));

  }
  

  

  



}

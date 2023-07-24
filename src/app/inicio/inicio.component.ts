import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  pokemonsCarrusel = [
    {
      name: 'pikachu',
      img: './assets/img/pikachu.webp',
      info: 'Audaz y veloz'
    },
    {
      name: 'eevee',
      img: './assets/img/eevee.png',
      info: 'Rapido y tierno'
    },
    {
      name: 'squirtle',
      img: './assets/img/squirtle.png',
      info: 'Guapo'
    }
  
  ]
  
  
    pokemonsInicio = [
      {
        name: 'bulbasaur',
        img: './assets/img/bulbasaur.png',
        desc: 'Pokémon cuadrúpedo de color verde y manchas más oscuras de formas geométricas. Su cabeza representa cerca de un tercio de su cuerpo.'
      },
      {
        name: 'charmander',
        img: './assets/img/charmander.png',
        desc: 'Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola, cuya punta está envuelta en llamas.'
      },
      {
        name: 'pidgeotto',
        img: './assets/img/pidgeotto.png',
        desc: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km. Muy protector de su amplio territorio, este Pokémon picoteará ferozmente a los intrusos.'
      },
      {
        name: 'snorlax',
        img: './assets/img/snorlax.png',
        desc: 'Este Pokémon tiene un estómago a prueba de bomba, por lo que es capaz de ingerir incluso comida podrida o mohosa. No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. '
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

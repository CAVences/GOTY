import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe( response => {
      console.log(response)
      this.juegos = response
    })
  }

  votarJuego ( juego: Game ) {
    this.gameService.votarJuego( juego.id ).subscribe( (response: any) => {
      if(response.status) {
        Swal.fire('Gracias', response.message, 'success')
      } else {
        Swal.fire('Oops', response.message, 'error')
      }
    })
  }

}

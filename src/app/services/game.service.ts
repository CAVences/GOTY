import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.interface';

const base_url: string = environment.url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {
    if(this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http.get<Game[]>(`${base_url}/api/getGames`)
              .pipe(
                tap(
                  response => this.juegos = response
                )
              )
    }
  }

  votarJuego( id: string ) {
    return this.http.post(`${base_url}/api/game/${id}`, {})
            .pipe(
              catchError( error => {
                return of(error.error)
              })
            )
  }
}

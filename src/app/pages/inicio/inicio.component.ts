import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
    .pipe(
      map( (response: any[]) => response.map( ({name, votos}) => ({name, value: votos})))
    ).subscribe( response => {
      console.log(response)
      this.juegos = response
    })
  }

}

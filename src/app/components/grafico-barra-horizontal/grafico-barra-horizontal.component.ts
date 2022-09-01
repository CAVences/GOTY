import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent {
  @Input() results: any[] = [];
  public view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Votos';
  colorScheme: string = 'nightLights';

  constructor() {}

  onSelect(event: any) {
    console.log(event);
  }

}

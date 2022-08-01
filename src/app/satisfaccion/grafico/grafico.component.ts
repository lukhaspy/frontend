import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;



  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getSatisfaccionGrafico()
  }
  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
  get single() {
    return this.service.getSatisfaccionGraficoData();
  }



  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

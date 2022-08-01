import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Satisfaccion } from 'src/app/Modelo/Satisfaccion';
import { ServiceService } from 'src/app/Service/service.service';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

})
export class ListarComponent implements OnInit {

  satisfacciones: Satisfaccion[];
  constructor(protected service: ServiceService) { }
  showFormatedDate(date: any) {
    if (date) {
      var dateSlice = date.slice(0, 10)
      var hourSlice = date.slice(10)
      return dateSlice.split('-').reverse().join('/') + hourSlice
    }
  }
  ngOnInit(): void {
    this.service.getSatisfacciones().subscribe(data => {
      this.satisfacciones = data
    })
  }



}

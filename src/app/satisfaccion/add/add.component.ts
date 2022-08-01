import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Satisfaccion } from 'src/app/Modelo/Satisfaccion';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  modelSatisfaccion = new Satisfaccion();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  guardar(satisfaccion: Satisfaccion) {
    this.service.createSatisfaccion(satisfaccion)
  }


}

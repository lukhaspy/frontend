import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Satisfaccion } from '../Modelo/Satisfaccion';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient, private router: Router) { }

  api = 'https://backend.sitiospy.com'
  satisfaccionesData: any = []


  // MODULO SATISFACCION
  getSatisfaccionGrafico() {
    this.http.get(this.api + '/api/satisfaccion/grafico', { headers: this.getHeaders() }).subscribe(data => {
      this.satisfaccionesData = data
    })

  }
  getSatisfaccionGraficoData() {
    return this.satisfaccionesData
  }
  getSatisfacciones() {
    return this.http.get<Satisfaccion[]>(this.api + '/api/satisfaccion', { headers: this.getHeaders() })
  }
  createSatisfaccion(satisfaccion: Satisfaccion) {
    this.http.post<Satisfaccion>(this.api + '/api/satisfaccion', satisfaccion).subscribe(data => {
      Swal.fire({ title: '¡Gracias por su aporte!', html: '<a class="text-red-500" href="https://datapar.com.py">Visite nuestro sitio Web <i class="bi bi-box-arrow-up-right"></i> </a>', icon: 'success' })
    },
      error => {
        Swal.fire({ title: 'No se pudo completar la operación...', html: this.displayErrros(error.error) })
      })
  }

  // AUTH - LOGIN
  authLogin(form: FormGroup) {
    this.http.get(this.api + '/sanctum/csrf-cookie').subscribe(data => {
      this.http.post(this.api + '/api/login', form.getRawValue(), { withCredentials: true })
        .subscribe((res: any) => {
          localStorage.setItem('token', res.data.session_token)
          this.router.navigate(['/admin/satisfacciones']);
        }, (error) => {
          Swal.fire({
            html: this.displayErrros(error.error.errors),
            icon: 'error'
          })
        });
    })
  }
  authLoggedIn() {
    return !!localStorage.getItem('token')
  }
  authLogout() {
    localStorage.removeItem('token')
    this.router.navigate(['/satisfaccion'])
  }

  // RUTAS
  routeAdminSatisfacciones() {
    this.router.navigate(['admin/satisfacciones']);
  }
  routeClientSatisfaccion() {
    this.router.navigate(['satisfaccion']);
  }



  // HELPERS

  displayErrros(errors: any) {
    let err1 = Object.values(errors)
    let err2 = err1.flat();
    let addLinea = err2.map(item => {
      return '* ' + item + '<br>'
    })
    return addLinea.toString().replace(',', '');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }
}

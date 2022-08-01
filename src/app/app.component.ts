import { Component } from '@angular/core';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nivelSatisfaccionApp';
  constructor(protected service: ServiceService) { }
}

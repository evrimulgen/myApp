import { Component } from '@angular/core';
// import { appHeaderComponent } from '../components/defaultComponents/header/header.component';
import { footerComponent } from '../components/defaultComponents/footer/footer.component';
// Import router directives
// import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // ,directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'YoGems';
  description = 'Welcome...!';
}

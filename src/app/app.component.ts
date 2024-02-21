import { Component } from '@angular/core';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MidtermMeetAmbaliya';
  constructor(private router: Router) { }

  isInputRoute() {
    return this.router.url === '/input';
  }

  isOutputRoute() {
    return this.router.url === '/output';
  }
}

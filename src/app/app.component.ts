import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './services/auth/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chiforek-app';
  constructor(private router:Router, private translateService:TranslateService){
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem("lang") || "fr")
  }

  hasRoute(routes:string[]) :boolean{
    return routes.some(route => this.router.url == route);
  }

}

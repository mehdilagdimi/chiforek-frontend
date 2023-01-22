import { LocalStorageService } from 'src/app/services/auth/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-drop-down',
  templateUrl: './language-drop-down.component.html',
  styleUrls: ['./language-drop-down.component.css']
})
export class LanguageDropDownComponent implements OnInit {
  lang!:string;
  constructor(private localStorageService:LocalStorageService, private translateService:TranslateService) { }

  ngOnInit(): void {
    this.lang = this.localStorageService.get("lang") || "fr";
  }


  onLangChange(event:any){
    console.log(" event ", event.target.value)
    this.localStorageService.set("lang", event.target.value);
    window.location.reload();
  }

}

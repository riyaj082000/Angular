import { Component } from '@angular/core';
import { RiyaAuthServiceService } from './riya-auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RiyaCrudOperation';
  isUserLoggedIn = false;

  constructor(private authService: RiyaAuthServiceService) {}

  ngOnInit() {
     let storeData = localStorage.getItem("isUserLoggedIn");
   

     if( storeData != null && storeData == "true")
        this.isUserLoggedIn = true;
     else
     
        this.isUserLoggedIn = false;
  }
}

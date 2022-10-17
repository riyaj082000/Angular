import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiyaAuthServiceService } from '../riya-auth-service.service';

@Component({
  selector: 'app-riya-logout',
  templateUrl: './riya-logout.component.html',
  styleUrls: ['./riya-logout.component.css']
})
export class RiyaLogoutComponent implements OnInit {

  constructor(private authService : RiyaAuthServiceService, private router: Router) { }

   ngOnInit() {
      this.authService.logout();
      this.router.navigate(['/'])
      .then(() => {
         window.location.reload();
       });
   }

}

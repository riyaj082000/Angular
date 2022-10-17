import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RiyaAuthServiceService } from '../riya-auth-service.service';

@Component({
   selector: 'app-riya-login',
   templateUrl: './riya-login.component.html',
   styleUrls: ['./riya-login.component.css']
})
export class RiyaLoginComponent implements OnInit {

   userName: string;
   password: string;
   formData: FormGroup;
   error: boolean;

   constructor(private authService: RiyaAuthServiceService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl(""),
         password: new FormControl(""),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;
      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe(data => {
            console.log("Is Login Success: " + data);

            if (data) {
               // window.location.reload();
               this.router.navigate(['/show'])
                  .then(() => {
                     window.location.reload();
                  });
            }
            else {
               this.error = true;
            }

         });
   }

}

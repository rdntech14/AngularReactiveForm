import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registrationFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  onClick(){
    console.log("****** from onClick() ******");
    console.log(this.registrationFrom.value)
  }

  onSubmit(){
    console.log("******form onSbumit() ******");
    console.log(this.registrationFrom.value); //click F12 to see reasult
  }
}




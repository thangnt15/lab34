import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login1.component.html'
})
export class Login1Component {
  loginform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('0[0-9]{9}'), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  });
  
  infor: any = '';
  onSubmit() {
    let u = this.loginform.controls.username.value;
    let a = this.loginform.controls.address.value;
    let p = this.loginform.controls.phone.value;
    let e = this.loginform.controls.email.value;
    let c = this.loginform.controls.cmnd.value;
    const thongtin = (u && a && p && e && c)
    if (thongtin) {
      this.infor = `Username: ${u}, Address: ${a}, Phone: ${p}, Email: ${e}, CMND: ${c}`;
    }
  }
}
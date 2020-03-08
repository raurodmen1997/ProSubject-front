import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
    });
  }

  signIn(){
    window.alert('Usuario: ' + this.form.get('usuario').value + '\nContraseña: ' + this.form.get('contraseña').value)
  }

}

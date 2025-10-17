import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css'
})
export class FormularioRegistro {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
    email: ['', [, Validators.required, Validators.email]],
    });
  }
  mostrar(){
    if (this.formulario.invalid) {
      console.log("Formulario con errores")
    
    }else {
      console.log(this.formulario.value);
    }

  }

  resetear() {
    this.formulario.reset({
      nombre: '',
      email: ''
    })
    
  }

}

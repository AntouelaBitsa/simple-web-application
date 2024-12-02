import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgModule} from '@angular/core'
import { NgIf } from '@angular/common';
import { Users } from '../model/users.type';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  registrationForm!: FormGroup;
  formUser: any;
  userService = inject(ApiServiceService);

  constructor(private formBuilder: FormBuilder){
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      homeAdd: [''],
      workAdd: ['']
    });
  }

  onSubmit() {
    if(!this.registrationForm.valid){
      console.error('Form Invalid: ', this.registrationForm.value);
      return;
    }
    console.log('Inputs data: ',this.registrationForm.value);
    this.formUser = {
      name: this.registrationForm.get('name')?.value,
      surname: this.registrationForm.get('surname')?.value,
      gender: this.registrationForm.get('gender')?.value,
      birthDate: this.registrationForm.get('birthDate')?.value,
      homeAdd: { homeAddress: this.registrationForm.value.homeAdd },
      workAdd: { workAddress: this.registrationForm.value.workAdd }
    }
    console.log('form user: ',this.formUser);

    this.userService.registerUser(this.formUser).subscribe((regUser: any) =>{
      if(!regUser){
        console.error('Error during registration', regUser);
      }
      console.log('User registered successfully', regUser);
      this.registrationForm.reset();
    });
  }

}

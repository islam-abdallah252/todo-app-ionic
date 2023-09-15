import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  forgetForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  forgetPassword() {
    console.log(this.forgetForm.value)
    if (this.forgetForm.invalid) this.forgetForm.markAllAsTouched(); return

  }

}

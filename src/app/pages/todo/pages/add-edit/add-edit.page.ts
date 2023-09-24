import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.page.html',
  styleUrls: ['./add-edit.page.scss'],
})
export class AddEditPage implements OnInit {
  data: any;
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController

  ) { }

  ngOnInit() {
    console.log('add-edit page', this.data)
    this.getForm(this.data)
  }

  getForm(data: any) {
    this.form = this.formBuilder.group({
      title: [data ? data.title : '', [Validators.required]],
      completed: [data ? data.completed : false]
    })
  }
  submit() {
    const { title, completed } = this.form.value;
    if (this.data) {
      this.data.title = title;
      this.data.completed = completed;
    } else {
      this.data = {
        title: title,
        completed: completed,
        id: Math.floor(Math.random() * 100) + 1,
        userId: Math.floor(Math.random() * 100) + 1
      };
    }
    this.modalCtrl.dismiss(this.data);
  }
}

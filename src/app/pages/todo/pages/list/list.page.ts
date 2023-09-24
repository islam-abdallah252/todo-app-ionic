import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController, ToastController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';
import { AddEditPage } from '../add-edit/add-edit.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList, { static: false }) list!: IonList;
  lists: any;
  loaded: boolean = false;
  fakeList: any = new Array(15);
  loading = false;
  constructor(private todoService: TodoService, private toastController: ToastController, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('list page')
    this.getList()
  }
  getList() {
    this.loaded = true;
    this.todoService.getList().subscribe((res: any) => {
      this.lists = res.slice(0, 20);
      setTimeout(() => {
        this.loaded = false;
      }, 3000);
    })
  }


  closeSlide() {
    this.list.closeSlidingItems();
  }
  actions(type: any, list: any, index: any) {
    switch (type) {
      case 'delete':
        this.deleteItem(list.id, index);
        break;
      case 'edit':
        this.openModal(list, index)

        break;
      case 'done':
        this.completedItem(index)
        break;
      default:
        break;
    }
    console.log(type, list)
    this.closeSlide();
  }

  handleRefresh(event: any) {
    this.getList();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  deleteItem(id: any, index: any) {
    this.loading = true;
    this.todoService.delete(id).subscribe((res: any) => {
      this.lists.splice(index, 1)
      this.loading = false;
      this.showToast()

    })
  }

  completedItem(index: any) {
    this.loading = true;
    setTimeout(() => {
      this.lists[index].completed = true;
      this.loading = false;
    }, 2000);

  }


  async showToast(message: any = 'ToDo is Deleted Successfully') {
    const toast = await this.toastController.create({
      message: 'ToDo is Deleted Successfully',
      duration: 1500,
      position: 'top',

    });

    await toast.present();
  }

  async openModal(todo: any, index: any) {
    const modal = await this.modalCtrl.create({
      component: AddEditPage,
      componentProps: {
        data: todo
      },

    });
    modal.present();
    await modal.onWillDismiss().then((res: any) => {
      if (todo) {
        this.lists[index] = res.data;
        this.showToast('ToDo is Updated Successfully')
      } else {
        this.lists.unshift(res.data)
        this.showToast('ToDo is Added Successfully');
      }
    });
  }
}

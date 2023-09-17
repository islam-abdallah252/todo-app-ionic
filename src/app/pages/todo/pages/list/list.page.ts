import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';

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
  constructor(private todoService: TodoService) { }

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
        console.log('delete');
        this.lists.splice(index, 1)
        break;
      case 'edit':
        console.log('edit')
        break;
      case 'done':
        list.completed = true;
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
    }, 3000);
  }



}

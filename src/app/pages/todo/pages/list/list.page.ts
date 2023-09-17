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
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log('list page')
    this.getList()
  }
  getList() {
    this.todoService.getList().subscribe((res: any) => {
      this.lists = res.slice(0, 20);
      console.log(res)
    })
  }


  closeSlide() {
    this.list.closeSlidingItems();
  }
  actions(type: any, list: any) {
    switch (type) {
      case 'delete':
        console.log('delete')
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



}

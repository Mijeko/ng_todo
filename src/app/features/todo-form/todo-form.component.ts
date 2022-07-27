import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  isSccessAdd = false;

  constructor() {
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isSccessAdd = true;
    }, 4000);

  }

}

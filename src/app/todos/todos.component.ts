import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { FetchTasksAction } from '../store/actions/task.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchTasksAction());
  }

}

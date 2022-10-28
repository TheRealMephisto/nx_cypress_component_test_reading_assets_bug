import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@myorg/data';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor(
    // private readonly todosService: TodosService // uncomment this line, then the cypress component test will fail
    ) {}

  ngOnInit() {}
}
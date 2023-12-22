import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AddTodoFormComponent } from '../../add-todo-form/add-todo-form.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    AddTodoFormComponent,
    MatDividerModule,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: true,
      },
      {
        content: 'Second todo',
        completed: false,
      },
      {
        content: 'Third todo',
        completed: false,
      },
    ];
  }

  toggleCompleted(id: number): void {
    this.todos.map((todo, i) => {
      if (i === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((_, i) => i !== id);
  }

  addTodo(newTodo: string): void {
    let newTodoObject: Todo = {
      content: newTodo,
      completed: false,
    };

    this.todos.push(newTodoObject);
  }
}

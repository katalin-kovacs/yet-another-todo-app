import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss',
})
export class AddTodoFormComponent {
  @Output() addTodoEvent = new EventEmitter<string>();

  addTodoItem(value: string) {
    this.addTodoEvent.emit(value);
  }
}

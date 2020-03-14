import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { DocumentReference } from '@angular/fire/firestore';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
  }

  saveTodo() {
    // Validar el formulario
    if (this.todoForm.invalid) {
      return;
    }
 
    let todo: Todo = this.todoForm.value;
    todo.lastModifiedDate = new Date();
    todo.createdDate = new Date();
    this.todoService.saveTodo(todo)
      .then(response => this.handleSuccessfulSaveTodo(response, todo))
      .catch(err => console.error(err));
  }
 
 handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo) {
    // Enviar la información al todo-list
    this.activeModal.dismiss({ todo: todo, id: response.id });
 }

}

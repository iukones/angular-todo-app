import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
  }

  saveTodo() {
    // validar formulario
    if (this.todoForm.invalid) {
      return;
    }

    //Enviar data a Firebaseio

    
  }

}

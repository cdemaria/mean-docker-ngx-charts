import { Component, Input, OnChanges } from '@angular/core';

import { UsersService } from '../services/users.service';
import { EmitterService } from '../../emitter.service';

@Component({
  selector: 'user-form',
  template: `
  <div [style.margin-top.px]="10" class="row">
    <h3>Add new person</h3>
    <form class="form-inline">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" #name>
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" #age>
      </div>
      <button type="button" (click)="addPerson(name.value, age.value)" class="btn btn-primary">Add person</button>
    </form>
  </div>
  `
})
export class UserFormComponent implements  OnChanges {

  constructor(
    private usersService: UsersService
  ){}

  people: any[] = [];

  @Input() listId: string;
  @Input() editId: string;

  // Add one person via UsersSerivce -> API -> MongoDB
  addPerson(name, age) {
    this.usersService.addUser(name, age)
                     .subscribe(
                       response => {
                         console.log('response', response);
                         EmitterService.get(this.listId).emit();
                       },
                       err => {
                         console.log(err);
                       });
  }

  ngOnChanges(changes:any) {
    // Listen to the 'edit'emitted event so as populate the model
    // with the event payload

    // TODO: update this to work with editing of a user.
    // EmitterService.get(this.editId).subscribe((comment:Comment) => {
    //     this.model = comment
    //     this.editing = true;
    // });
  }

}

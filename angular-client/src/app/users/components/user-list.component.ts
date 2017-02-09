import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { UsersService } from '../services/users.service';
import { EmitterService } from '../../emitter.service';

@Component({
  selector: 'user-list',
  template: `
  <div [style.margin-top.px]="10" class="row">
    <h3>People</h3>
    <!-- Bootstrap Card -->
    <div [style.margin-right.px]="10" class="card card-block col-md-3" *ngFor="let person of people">
      <h4 class="card-title">{{person.name}}  {{person.age}}</h4>
    </div>
  </div>
  `
})
export class UserListComponent implements OnInit, OnChanges {

  constructor(
    private usersService: UsersService
  ){}

  people: any[] = [];

  @Input() listId: string;
  @Input() editId: string;

  ngOnInit() {
    this.getAllPeople();
  }

  // Get all users from MongoDB -> API -> UsersService
  getAllPeople() {
    this.usersService.getUsers()
                     .subscribe(
                       people => this.people = people,
                       err => {
                         console.log(err);
                       });
  }

  ngOnChanges(changes:any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    EmitterService.get(this.listId).subscribe( () =>
      this.getAllPeople());
  }

}

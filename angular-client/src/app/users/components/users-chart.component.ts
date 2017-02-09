import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

import { UsersService } from '../services/users.service';
import { EmitterService } from '../../emitter.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.css']
})
export class UsersChartComponent implements OnInit {

  @Input() listId: string;
  @Input() editId: string;

  // Declare empty list of people
  people: any[] = [];

  colorScheme = {
    domain: ['#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  };

  constructor(
    private http: Http,
    private usersService: UsersService
  ) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Get all users from the UsersService
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

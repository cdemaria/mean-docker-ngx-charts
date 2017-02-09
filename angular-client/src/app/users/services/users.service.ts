import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person } from '../../model/person';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UsersService {

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  constructor(private http: Http) { }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .map(res => res.json())
      .subscribe(() => {
        this.getUsers();
      })
  }

  addUser(name, age) : Observable<Person[]> {
    return this.http.post(`${this.API}/users`, {name, age})
                    .map(res => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get all users from the API
  getUsers() : Observable<Person[]>  {
    return this.http.get(`${this.API}/users`)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json.error || 'Server error'));
  }

}

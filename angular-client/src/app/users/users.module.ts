import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MdCardModule } from '@angular2-material/card';

import { UserFormComponent } from './components/user-form.component';
import { UserListComponent } from './components/user-list.component';
import { UsersChartComponent } from './components/users-chart.component';
import { UserComponent } from './components/index';

import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgxChartsModule,
    MdCardModule
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UsersChartComponent,
    UserComponent
  ],

  providers: [
      UsersService
  ],

  exports:[
    UserFormComponent,
    UserListComponent,
    UsersChartComponent,
    UserComponent,
    NgxChartsModule,
    MdCardModule
  ]

})
export class UsersModule {
}

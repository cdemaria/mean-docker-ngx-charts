// Imports
import { Component } from '@angular/core';
import { EmitterService } from '../../emitter.service';

@Component({
    selector: 'user-widget',
    template: `
      <div>
        <user-form [listId]="listId" [editId]="editId"></user-form>
        <users-chart [listId]="listId" [editId]="editId"></users-chart>
        <user-list [listId]="listId" [editId]="editId"></user-list>
      </div>
    `,
})
export class UserComponent {
    // Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';
 }

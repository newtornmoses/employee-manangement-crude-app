import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styles: []
})
export class AddMembersComponent implements OnInit {
added = false;
  model: any = {
  };
  constructor(private sc: BalanceService ) { }
  add() {
this.added = true;
  }
  salary;
  save(model) {

    this.sc.addmember(model);

    this.added = false;
    this.model = {
      name: name,
      department: '',
      salary: this.salary,
      date: ''};
  }
  ngOnInit() {
  }

}

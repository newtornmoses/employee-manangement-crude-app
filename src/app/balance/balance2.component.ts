import { Component, OnInit , Input} from '@angular/core';
import { BalanceService} from '../balance.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-balance2',
  templateUrl: './balance2.component.html',
  styles: []
})
export class Balance2Component implements OnInit  {

  members;
  constructor(private sv: BalanceService) {}

  sortName() {
this.members = _.orderBy(this.members , 'name', 'asc');
return this.members;

  }

  sortDep() {
    this.members = _.orderBy(this.members, 'department', 'asc');
    return this.members;
  }
  sortSalary() {
    this.members = _.orderBy(this.members, 'salary', 'asc');
    return this.members;
  }

  sortDate() {
    this.members = _.orderBy(this.members, 'date', 'asc');
    return this.members;
  }
  ngOnInit () {
this.members = this.sv.getmemmbers();
  }
}

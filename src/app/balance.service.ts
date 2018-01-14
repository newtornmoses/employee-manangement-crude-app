import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Members} from './interface';
import * as _ from 'lodash';

@Injectable()
export class BalanceService {
  private members: any  = [
  { name: 'mark sekambwe g', department: 'accountant', salary: 8900,
      date: '11 / 12 / 2017'
    },
  {
    name: 'arumu gam chinniah', department: 'cook', salary: 900,
    date: '02 / 10 / 2017'
},
  {
    name: 'DENIS', department: 'cook', salary: 3900,
    date: '02 / 10 / 2017'
  },
  {
    name: 'shatish salman', department: 'cleaner', salary: 650,
    date: '12 / 23 / 2015'
  },
  {
    name: 'kundos mark', department: 'cleanersupervisor', salary: 1650,
    date: '12 / 23 / 2014'
  },

  {
    name: 'lwanga moses', department: 'webdeveloper', salary: 40000,
    date: '08 / 10 / 2016'
  },

  {
    name: 'tablez singh', department: 'electrician', salary: 700,
    date: '04 / 29 / 2017'
  },
  {
    name: 'madrid man', department: 'writer', salary: 950,
    date: '12 / 30 / 2015'
  },
  {
    name: 'varkig abdul', department: 'electrician', salary: 1700,
    date: '01 / 09 / 2017'
  },
  {
    name: 'kenya salman', department: 'cleaner', salary: 650,
    date: '10 / 11 / 2015'
  },


];
  going: any = [] ;
  member;
  constructor() { }

  getmemmbers() {
    return this.members;
  }

  getgoingmembers(member) {
    for (let i = 0; i < this.members.length; i++) {
if (this.members.indexOf(this.members[i].name) === -1) {
this.going.push(member);
}
    }
return this.going;
  }



  getgoingt(member) {


      _.filter(this.members, (e) => {
        if (e.department !== 'clean') {
    // console.log(e.name);
    if (this.going.indexOf(e.name) === -1) {
      this.going.push(e);
    }else {
   return;
    }

         }
  } );

    // this.going.push(member);

    return this.going;
}



     addmember(model) {
this.going.push(model);

     }




}

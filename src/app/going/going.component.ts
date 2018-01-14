
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { BalanceService } from '../balance.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as Chart from 'chart.js';





@Component({
  selector: 'app-going',
  templateUrl: './going.component.html',
  styles: []
})

export class GoingComponent implements OnInit {
  @ViewChild('donut') donut: ElementRef;
  going: any = [];
  member;
  members;
  nofiles ;
  noduplicates;
  nodup = false;
  nofile = false;
  firstgrp;
  total;
  totalsalary = 0;
  search ;
  content;
  counti;
  result;
  name;

  constructor(private sc: BalanceService ) {}



// remove duplicates on click
  removeDups(member) {

    const initial = this.sc.getgoingt(member);
    for (let i = 0; i < this.going.length; i++) {
  const k = _.indexOf(this.going[i], 1);

 if (!k) {

   this.nofile = true;
   this.nofiles = 'removing duplicates ....';
return;
 }else {

  this.going.splice(member, 1);
// this.remaining.splice(mem)

   this.nofile = true;
   this.nofiles = (this.going.length ) + ' ' + ' files';


   setTimeout( () => {
     this.nofiles = ' ';
     this.nofile = false;

   }, 1000 * 10);


  }
    }

return this.going;
}

// date remaining
dateRemain() {
  const d = _.each(this.going)

  .map(data => {
   const mo = moment(data.date, 'MM-DD-YYYY').add(2, 'years').fromNow();
    console.log(mo);
    return mo;
    });
return Array[d] ;
}

// total salary

getTotal() {
  let seen = 0;
 for (let i = 0; i < this.going.length; i++) {

   seen += Number(this.going[i].salary);

 }


  // console.log(seen);
return seen;
}



// get count
getcount() {

   this.counti = _.countBy(this.going, 'department');


 // console.log(this.counti);

  return this.counti;
}



// map names

getnames() {
  const keyz = Object.values(this.going)
    .map(value => {
      return _.uniq(value.name);
    });
  // console.log(keyz);
  return keyz;
}



// order by name
  getlist( member ) {

    this.going = _.orderBy(this.going,  'name', 'asc');

return this.going;
}
  // order by date
  getlist5(member) {

    this.going = _.orderBy(this.going, 'date', 'asc');

    return this.going;
  }

  // order by dept
  getlist2(member) {

    this.going = _.orderBy(this.going, 'department', 'asc');

    return this.going;
  }
 // order by salary
  getlist3(member) {

    this.going = _.orderBy(this.going, 'salary', 'asc');

    return this.going;
  }

// search

searchtxt(search) {

  this.content =  _.find(this.going, function (o) {

 const nm =   o.department.includes(search);


    if (nm) {
      // console.log(o.name);

    }


    return nm;
    // return this.going;
  });

}

totalFiles() {
  this.total = this.going.length;
  return this.total;
}

gettime() {
const t = new Date().getDate();
// console.log(t);
}


// export to excell
  export() {
const tb = document.getElementById('mytable');
const html = tb.outerHTML;
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));

  }



  ngOnInit() {

this.firstgrp = this.sc.getgoingt(this.member);
    this.going = this.firstgrp;
// console.log('initialised');
    this.totalFiles();
    this.getTotal();

     this.getcount();
// search
     this.getnames() ;
     this.dateRemain();
    // console.log( 'start of day from now' + ' ' + moment().startOf( 'day').fromNow());
     // console.log(moment("11-23-2016", "MM-DD-YYYY").format());
     // console.log(moment("11-23-2016", "MM-DD-YYYY").add(2, 'years').format('LL'));
     // console.log((moment("11-23-2018", "MM-DD-YYYY").fromNow()));





    }





  }

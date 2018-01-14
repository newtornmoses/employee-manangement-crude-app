import { Members } from './interface';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BalanceService} from './balance.service';
import { GoingComponent} from './going/going.component';
import { routing} from './routes.router';
import { DashbordComponent } from './dashbord/dashbord.component';

import { Balance2Component } from './balance/balance2.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { HeaderComponent} from './header/header.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';



@NgModule({
  declarations: [

    AppComponent,

    GoingComponent,
    DashbordComponent,
    Balance2Component,
    AddMembersComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Routes, RouterModule} from '@angular/router';
import { Balance2Component} from './balance/balance2.component';
import { GoingComponent } from './going/going.component';


  const MyRoutes: Routes = [
    { path: '', redirectTo: '/going' , pathMatch: 'full'},
    { path: 'balance2', component: Balance2Component },
    { path: 'going', component:  GoingComponent },

  ];

 export const routing = RouterModule.forRoot(MyRoutes);

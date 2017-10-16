import {Routes} from "@angular/router";
import {AIHomeComponent} from "./home/home.component";
import {basicComponent} from "./layout/main/basic.component";
import {blankComponent} from "./layout/main/blank.component";



export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'home', component: AIHomeComponent}
    ]
  },
  {
    path: '', component: blankComponent,
    
  },

  // Handle all other routes
  {path: '**',    component: AIHomeComponent }
];
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { IdcardComponent } from './idcard/idcard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
  ,
  {
    path:'idcard/:id',
    component:IdcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

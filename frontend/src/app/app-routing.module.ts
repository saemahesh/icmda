import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { IdcardComponent } from './idcard/idcard.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MembershipComponent } from './membership/membership.component';
import { MembersEthicsComponent } from './members-ethics/members-ethics.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IcmdaPageComponent } from './icmda-page/icmda-page.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { MusicComponent } from './music/music.component';
import { DanceComponent } from './dance/dance.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

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
    path:'dashboard',
    component:DashboardComponent
  }
  ,
  {
    path:'idcard/:id',
    component:IdcardComponent
  },
  {
    path:'committee-members',
    component:CommitteeMembersComponent
  },
  {
    path:'activities',
    component:ActivitiesComponent
  },
  {
    path:'membership',
    component:MembershipComponent
  },
  {
    path:'members-ethics',
    component:MembersEthicsComponent
  },
  {
    path:'support-us',
    component:SupportUsComponent
  },  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'icmda',
    component:IcmdaPageComponent
  },
  {
    path:'competition-registration',
    component:EventRegisterComponent
  },
  {
    path:'event-guidelines-music',
    component:MusicComponent
  },
  {
    path:'guidelines',
    component:DanceComponent
  },
  {
    path:'users-details',
    component: UsersDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

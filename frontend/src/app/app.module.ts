import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { IdcardComponent } from './idcard/idcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';
import { SidebarDirective } from 'src/sidebar.directive';
import { ActivitiesComponent } from './activities/activities.component';
import { MembersEthicsComponent } from './members-ethics/members-ethics.component';
import { MembershipComponent } from './membership/membership.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IcmdaPageComponent } from './icmda-page/icmda-page.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { MusicComponent } from './music/music.component';
import { DanceComponent } from './dance/dance.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlineRegistrationComponent } from './online-registration/online-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    IdcardComponent,
    DashboardComponent,
    CommitteeMembersComponent,
    SidebarDirective,
    ActivitiesComponent,
    MembersEthicsComponent,
    MembershipComponent,
    SupportUsComponent,
    ContactUsComponent,
    IcmdaPageComponent,
    EventRegisterComponent,
    MusicComponent,
    DanceComponent,
    UsersDetailsComponent,
    OnlineRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UcWidgetModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

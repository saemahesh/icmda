import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
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
import { SendEmailsComponent } from './send-emails/send-emails.component';
import { SendEmailsFormComponent } from './send-emails-form/send-emails-form.component';
import { KuchipudiEventComponent } from './kuchipudi-event/kuchipudi-event.component';
import { ViewPaymentCodesComponent } from './view-payment-codes/view-payment-codes.component';
import { PrizeDistributionComponent } from './prize-distribution/prize-distribution.component';
import { UpdateOnlineCompetitionComponent } from './update-online-competition/update-online-competition.component';
import { OnlineCompetitions2021Component } from './online-competitions2021/online-competitions2021.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SubmitVideoComponent } from './submit-video/submit-video.component';

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
    OnlineRegistrationComponent,
    SendEmailsComponent,
    SendEmailsFormComponent,
    KuchipudiEventComponent,
    ViewPaymentCodesComponent,
    PrizeDistributionComponent,
    UpdateOnlineCompetitionComponent,
    OnlineCompetitions2021Component,
    SubmitVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UcWidgetModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }

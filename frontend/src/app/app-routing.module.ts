import { PrizeDistributionComponent } from "./prize-distribution/prize-distribution.component";
import { ViewPaymentCodesComponent } from "./view-payment-codes/view-payment-codes.component";
import { KuchipudiEventComponent } from "./kuchipudi-event/kuchipudi-event.component";
import { SendEmailsFormComponent } from "./send-emails-form/send-emails-form.component";
import { SendEmailsComponent } from "./send-emails/send-emails.component";
import { OnlineRegistrationComponent } from "./online-registration/online-registration.component";
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
import { UpdateOnlineCompetitionComponent } from "./update-online-competition/update-online-competition.component";
import { OnlineCompetitions2021Component } from "./online-competitions2021/online-competitions2021.component";
import { SubmitVideoComponent } from "./submit-video/submit-video.component";
import { UploadWinningsComponent } from "./upload-winnings/upload-winnings.component";
import { FindTeacherComponent } from "./find-teacher/find-teacher.component";
import { MembershipBenefitsComponent } from "./membership-benefits/membership-benefits.component";
import { MusicDirectoryComponent } from "./music-directory/music-directory.component";
import { GuinnessCertificateComponent } from "./guinness-certificate/guinness-certificate.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { RemindmeComponent } from "./remindme/remindme.component";
import { Season2Component } from "./season2/season2.component";
import { GuideBharatComponent } from "./guide-bharat/guide-bharat.component";
import { GuideKuchipudiComponent } from "./guide-kuchipudi/guide-kuchipudi.component"
import { GuideInstrumentComponent } from "./guide-instrument/guide-instrument.component";
import { GuideRhythmComponent } from "./guide-rhythm/guide-rhythm.component";
import { FusionCompetitionsComponent } from "./fusion-competitions/fusion-competitions.component";
import { GuideVocalComponent } from './guide-vocal/guide-vocal.component';
import { KuchipudiEvent2021Component } from "./kuchipudi-event2021/kuchipudi-event2021.component";
import { SubmitTicketComponent } from "./submit-ticket/submit-ticket.component";
import { HelpDeskComponent } from "./help-desk/help-desk.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'notify-me',
    component: RemindmeComponent
  },
  {
    path:"submit-ticket",
    component:SubmitTicketComponent
  },
  {
    path:"help-desk",
    component:HelpDeskComponent
  },
  {
    path: 'season2/register',
    component: Season2Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  ,
  {
    path: 'idcard/:id',
    component: IdcardComponent
  },
  {
    path: 'guidelines/bharathanatyam',
    component: GuideBharatComponent
  },
  {
    path: 'guidelines/kuchipudi',
    component: GuideKuchipudiComponent
  },
  {
    path: 'guidelines/instruments',
    component: GuideInstrumentComponent
  },
  {
    path: 'guidelines/rhythm',
    component: GuideRhythmComponent
  },
  {
    path: 'guidelines/vocal',
    component: GuideVocalComponent
  },
  {
    path: 'fusion-competitions-2021',
    component: FusionCompetitionsComponent
  },
  {
    path: 'committee-members',
    component: CommitteeMembersComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'member-benefits',
    component: MembershipBenefitsComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'find-teacher',
    component: FindTeacherComponent
  },
  {
    path: 'musicians-directory',
    component: MusicDirectoryComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'return-refund-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'members-ethics',
    component: MembersEthicsComponent
  },
  {
    path: 'support-us',
    component: SupportUsComponent
  }, {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'icmda',
    component: IcmdaPageComponent
  },
  {
    path: 'online-competition-season1',
    component: EventRegisterComponent
  },
  {
    path: 'online-competition-2021/register',
    component: EventRegisterComponent
  },
  {
    path: 'online-competition-2021/update',
    component: EventRegisterComponent
  },
  {
    path: 'online-competition-2021',
    component: OnlineCompetitions2021Component
  },
  {
    path: 'upload-winner-photos',
    component: UploadWinningsComponent
  },
  {
    path: 'submit-video',
    component: SubmitVideoComponent
  },
  {
    path: 'event-guidelines-music',
    component: MusicComponent
  },
  {
    path: 'guidelines',
    component: DanceComponent
  },
  {
    path: 'users-details',
    component: UsersDetailsComponent
  },
  {
    path: 'kuchipudi-event-registration',
    component: OnlineRegistrationComponent
  },
  {
    path: 'send-emails',
    component: SendEmailsComponent
  },
  {
    path: 'create-payment-code',
    component: SendEmailsFormComponent
  },
  {
    path: 'kuchipudi-event',
    component: KuchipudiEventComponent
  },
  {
    path: 'view-payment-codes',
    component: ViewPaymentCodesComponent
  },
  {
    path: 'prize-distribution',
    component: PrizeDistributionComponent
  },
  {
    path:'kuchipudi/event',
    component:KuchipudiEvent2021Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

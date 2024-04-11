import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/Dashboard/Dashboard.component';
import { FacilitiesComponent } from './Components/Facilities/Facilities.component';
import { MyBookingComponent } from './Components/My-Booking/My-Booking.component';
import { ProfilesComponent } from './Components/Profiles/Profiles.component';
import { AdministrationComponent } from './Components/Administration/Administration.component';
import { GroundsComponent } from './Components/Grounds/Grounds.component';
import { SupportComponent } from './Components/Support/Support.component';
import { SettingComponent } from './Components/Setting/Setting.component';
import { SearchComponent } from './Components/search/search.component';
import { DetailsComponent } from './Components/details/details.component';
import { OverviewComponent } from './Components/details/overview/overview.component';
import { ServicesComponent } from './Components/details/services/services.component';
import { SlotsComponent } from './Components/details/slots/slots.component';
import { RulesComponent } from './Components/details/rules/rules.component';

export const routes: Routes = [
    {path:'Dashboard',component:DashboardComponent},
    {path:'Facilities',component:FacilitiesComponent},
    {path:'MyBooking',component:MyBookingComponent},
    {path:'Profile',component:ProfilesComponent},
    {path:'Administration', component:AdministrationComponent},
    {path:'Grounds',component:GroundsComponent},
    {path:'Support',component:SupportComponent},
    {path:'Setting',component:SettingComponent},
    {path:'search',component:SearchComponent},
    { path: 'details', component: DetailsComponent, children: [
        { path: 'overview', component: OverviewComponent },
        { path: 'service', component: ServicesComponent },
        { path: 'slots', component: SlotsComponent },
        { path: 'rules', component: RulesComponent }
      ]}
    
];

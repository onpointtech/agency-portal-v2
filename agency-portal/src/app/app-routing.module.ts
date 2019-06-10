import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageOneComponent } from './main/page-one/page-one.component';
import { PageTwoComponent } from './main/page-two/page-two.component';
import { HomeComponent } from './main/home/home.component';
import { ClaimantSearchComponent } from './main/claimant-search/claimant-search.component';
import { ClaimantOverviewComponent } from './main/claimant-overview/claimant-overview.component';
import { ClaimantProfileComponent } from './main/claimant-profile/claimant-profile.component';
import { ClaimantRegistrationComponent } from './main/claimant-registration/claimant-registration.component';
import { ClaimComponent } from './main/claim/claim.component';


const routes: Routes = [  
  {  
     path:'',
     redirectTo:'login',
     pathMatch:'full'
  },
  {  
     path:'login',
     component:LoginComponent
  },
  {  
     path:'main',
     component:MainComponent,
     children:[  
        {  
           path:'page-one',
           component:PageOneComponent
        },
        {  
           path:'page-two',
           component:PageTwoComponent
        },
        {  
           path:'home',
           component:HomeComponent
        },
        {
          path:'claim',
          component: ClaimComponent
        },
        {
          path:'claimant-overview',
          component:ClaimantOverviewComponent
        },
        {
          path:'claimant-profile',
          component:ClaimantProfileComponent
        },
        {
          path:'claimant-registration',
          component:ClaimantRegistrationComponent
        },
        {
          path:'claimant-search',
          component:ClaimantSearchComponent
        },
        {  
           path:'**',
           redirectTo:'home'
        },

     ]
  },
  {  
     path:'**',
     redirectTo:'login',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

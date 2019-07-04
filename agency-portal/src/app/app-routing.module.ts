import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ClaimantSearchComponent } from './main/claimant-search/claimant-search.component';
import { ClaimantOverviewComponent } from './main/claimant-overview/claimant-overview.component';
import { ClaimantProfileComponent } from './main/claimant-profile/claimant-profile.component';
import { ClaimantRegistrationComponent } from './main/claimant-registration/claimant-registration.component';
import { ClaimComponent } from './main/claim/claim.component';
import { AppAuthGuard } from './app.authguard';

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
     canActivate: [AppAuthGuard],
     children:[
        {  
           path:'home',
           component:HomeComponent,
        },
        {
          path:'claimant-overview/:claimantId',
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
          path:'claimant-search/:claimantInfo',
          component:ClaimantSearchComponent
        },
        {
          path:'claim/:claimantId',
          component: ClaimComponent
        },
        {  
           path:'**',
           redirectTo:'home'
        }
     ],
     runGuardsAndResolvers: 'always'
  },
  {  
     path:'**',
     redirectTo:'login',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }

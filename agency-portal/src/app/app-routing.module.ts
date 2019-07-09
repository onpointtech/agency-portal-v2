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
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

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
          path:'home',
          component:HomeComponent,
          canActivate: [AppAuthGuard]
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
          component:ClaimantRegistrationComponent,
          canActivate: [AppAuthGuard],
          data: {roles: ['asdasdas', 'asdasda']}
        },
        {
          path:'claimant-search/:claimantInfo',
          component:ClaimantSearchComponent,
          canActivate: [AppAuthGuard],
          data: {roles: ['ClaimsTaker', 'asdasda']}
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
    path:'not-authorized',
    component:NotAuthorizedComponent,
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

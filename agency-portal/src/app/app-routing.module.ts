import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageOneComponent } from './main/page-one/page-one.component';
import { PageTwoComponent } from './main/page-two/page-two.component';
import { HomeComponent } from './main/home/home.component';
import { OptimumFormComponent } from './main/optimum-form/optimum-form.component'

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
         path:'optimum-form',
         component:OptimumFormComponent
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

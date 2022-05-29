import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LangagesComponent } from './modules/langages/langages.component';
import { NewlangageComponent } from './modules/newlangage/newlangage.component';
import { EditComponent } from './modules/edit/edit.component';
import { AddqcmComponent } from './modules/addqcm/addqcm.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'langages',
    component: LangagesComponent
  },{
    path: 'edit/:id',
    component:EditComponent 
  },{
    path: 'addqcm',
    component:AddqcmComponent 
  },{
    path: 'newlangages',
    component: NewlangageComponent
    
  }]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

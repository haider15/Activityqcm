import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatIconModule, MatInputModule, MatListModule, MatExpansionPanelTitle } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { LangagesComponent } from 'src/app/modules/langages/langages.component';
import { CardsComponent } from 'src/app/modules/cards/cards.component';
import {MatButtonModule} from '@angular/material/button';
import { NewlangageComponent } from 'src/app/modules/newlangage/newlangage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddqcmComponent } from 'src/app/modules/addqcm/addqcm.component';
import { ReponseComponent } from 'src/app/modules/reponse/reponse.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LangagesComponent,
    CardsComponent,
    NewlangageComponent,
    EditComponent,
    AddqcmComponent,
    ReponseComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule
  
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }

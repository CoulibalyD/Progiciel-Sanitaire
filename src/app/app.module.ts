import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnelService } from './personnel.service';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel/personnel.component';
import { MaterielComponent } from './materiel/materiel.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './fragment/footer/footer.component';
import { HeaderComponent } from './fragment/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RdvComponent } from './Docteur/rdv-Denstiste/rdv.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { AnswerRdvComponent } from './answer-rdv/answer-rdv.component';
import { RdvCardiologueComponent } from './Docteur/rdv-cardiologue/rdv-cardiologue.component';
import { RdvPediatreComponent } from './Docteur/rdv-pediatre/rdv-pediatre.component';
import { RdvGeneralisteComponent } from './Docteur/rdv-generaliste/rdv-generaliste.component';
import { RdvOphtalmologueComponent } from './Docteur/rdv-ophtalmologue/rdv-ophtalmologue.component';
import { RdvGeniquologueComponent } from './Docteur/rdv-geniquologue/rdv-geniquologue.component';
import { SpaceComponent } from './space/space.component';
import { ToastrModule } from 'ngx-toastr';
import { ChartComponent } from './chart/chart.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ListeConsultationComponent } from './ListeConsultation/consultation-cardiologue/liste-consultation.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ConsultationDentisteComponent } from './ListeConsultation/consultation-dentiste/consultation-dentiste.component';
import { ConsultationGeneralisteComponent } from './ListeConsultation/consultation-generaliste/consultation-generaliste.component';
import { ConsultationGynecologueComponent } from './ListeConsultation/consultation-gynecologue/consultation-gynecologue.component';
import { ConsultationOphtalmologueComponent } from './ListeConsultation/consultation-ophtalmologue/consultation-ophtalmologue.component';
import { ConsultationPediatreComponent } from './ListeConsultation/consultation-pediatre/consultation-pediatre.component';



const routes: Routes = [
  {path:'home',component:HomeComponent },
  {path:'',component:HomeComponent},
  {path:'personnel',component:PersonnelComponent},
  {path:'admin',component:AdminComponent},
  {path:'labo',component:MaterielComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'map',component:MapComponent},
  {path:'rdv',component:RdvComponent},
  {path:'priseRdv',component:PriseRdvComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Answer',component:AnswerRdvComponent},
  {path:'pediatre',component:RdvPediatreComponent},
  {path:'ophtalmologue',component:RdvOphtalmologueComponent},
  {path:'genicoloque',component:RdvGeniquologueComponent},
  {path:'generaliste',component:RdvGeneralisteComponent},
  {path:'cardioloque',component:RdvCardiologueComponent},
  {path:'space',component:SpaceComponent},
  {path:'consultation',component:ConsultationComponent},
  {path:'listConsCardio',component:ListeConsultationComponent},
  {path:'listConsDentiste',component:ConsultationDentisteComponent},
  {path:'listConsGeneralist',component:ConsultationGeneralisteComponent},
  {path:'listConsOphtalmo',component:ConsultationOphtalmologueComponent},
  {path:'listConsPediatre',component:ConsultationPediatreComponent},
  {path:'listConsGyneco',component:ConsultationGynecologueComponent},
  {path:'statistique',component:ChartComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PersonnelComponent,
    MaterielComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MapComponent,
    InscriptionComponent,
    ConnexionComponent,
    DashboardComponent,
    RdvComponent,
    PriseRdvComponent,
    AnswerRdvComponent,
    RdvCardiologueComponent,
    RdvPediatreComponent,
    RdvGeneralisteComponent,
    RdvOphtalmologueComponent,
    RdvGeniquologueComponent,
    SpaceComponent,
    ChartComponent,
    ConsultationComponent,
    ListeConsultationComponent,
    EntrepriseComponent,
    ConsultationDentisteComponent,
    ConsultationGeneralisteComponent,
    ConsultationGynecologueComponent,
    ConsultationOphtalmologueComponent,
    ConsultationPediatreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    NotifierModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.variableApiKey}`
    })
  ],
  exports:[RouterModule],
  providers: [PersonnelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

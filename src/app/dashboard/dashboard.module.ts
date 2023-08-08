import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material.module';
import { MenuComponent } from './dashboard/menu/menu.component';
import { DictionaryComponent } from './dashboard/dictionary/dictionary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from './dashboard/shared/search.service';
import { HttpClientModule } from '@angular/common/http';
import { MeaningComponent } from './dashboard/dictionary/meaning/meaning.component';
// import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [DashboardComponent, MenuComponent, DictionaryComponent, MeaningComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[SearchService]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DictionaryComponent } from './dashboard/dictionary/dictionary.component';
import {BooksComponent} from "./dashboard/books/books.component";

const routes: Routes = [
  //default to search path
  { path: '', component: DashboardComponent,
  children:[
    { path: '', redirectTo: 'dictionary', pathMatch: 'full'},
    { path: 'dictionary', component: DictionaryComponent},
    { path: 'dictionary/:word', component: DictionaryComponent},

    { path: 'books', component: BooksComponent}
] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

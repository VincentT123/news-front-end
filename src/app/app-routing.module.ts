import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './composants/categorie/categorie.component';
import { HomeComponent } from './composants/home/home.component';
import { UneactuComponent } from './composants/uneactu/uneactu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/uneactu/:id', component: UneactuComponent},
  { path: 'categorie', component: CategorieComponent },
  { path: 'categorie/:categ', component: CategorieComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

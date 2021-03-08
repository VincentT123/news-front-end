import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './composants/categorie/categorie.component';
import { HomeComponent } from './composants/home/home.component';
import { RechercheComponent } from './composants/recherche/recherche.component';
import { UneactuComponent } from './composants/uneactu/uneactu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/uneactu/:id', component: UneactuComponent },
  { path: 'uneactu/:id', component: UneactuComponent },
  { path: 'recherche/:motcle', component: RechercheComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'categorie/:categ', component: CategorieComponent },
  { path: 'categorie/Politique/uneactu/:id', component: UneactuComponent },
  { path: 'categorie/International/uneactu/:id', component: UneactuComponent },
  { path: 'categorie/Société/uneactu/:id', component: UneactuComponent },
  { path: 'categorie/Culture/uneactu/:id', component: UneactuComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

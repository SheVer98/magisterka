import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FindComponent } from './components/pages/find/find.component';
import { ListComponent } from './components/pages/list/list.component';
import { DrawComponent } from './components/pages/draw/draw.component';
import { SingleComponent } from './components/pages/single/single.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';

const routes: Routes = [
  {path:'lista',component:ListComponent},
  {path:'lista/:searchTerm',component:ListComponent},
  {path:'', component:HomeComponent},
  {path:'znajdz', component:FindComponent},
  {path:'funkcje', component:DrawComponent},
  {path:'car/:id', component:SingleComponent},
  {path:'admin',component:StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

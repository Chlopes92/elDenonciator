import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from './pages/absence/absence.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"absence",
    component: AbsenceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

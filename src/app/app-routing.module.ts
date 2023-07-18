import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CauhoiComponent } from './my-folder/cauhoi/cauhoi.component';

const routes: Routes = [
  { path: 'cauhoi', component: CauhoiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

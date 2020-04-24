import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathcalcPage } from './mathcalc.page';

const routes: Routes = [
  {
    path: '',
    component: MathcalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathcalcPageRoutingModule {}

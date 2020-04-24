import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathcalcPageRoutingModule } from './mathcalc-routing.module';

import { MathcalcPage } from './mathcalc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathcalcPageRoutingModule
  ],
  declarations: [MathcalcPage]
})
export class MathcalcPageModule {}

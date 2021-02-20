import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScientificPageRoutingModule } from './scientific-routing.module';

import { ScientificPage } from './scientific.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScientificPageRoutingModule
  ],
  declarations: [ScientificPage]
})
export class ScientificPageModule {}

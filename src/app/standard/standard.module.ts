import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandardPageRoutingModule } from './standard-routing.module';

import { StandardPage } from './standard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandardPageRoutingModule
  ],
  declarations: [StandardPage]
})
export class StandardPageModule {}

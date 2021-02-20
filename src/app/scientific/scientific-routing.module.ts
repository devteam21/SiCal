import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScientificPage } from './scientific.page';

const routes: Routes = [
  {
    path: '',
    component: ScientificPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificPageRoutingModule {}

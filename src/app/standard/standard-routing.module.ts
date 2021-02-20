import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardPage } from './standard.page';

const routes: Routes = [
  {
    path: '',
    component: StandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolepComponent } from './rolep.component';

const routes:  Routes  = [
    {
        path: '',
        component: RolepComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolepPageRoutingModule {}
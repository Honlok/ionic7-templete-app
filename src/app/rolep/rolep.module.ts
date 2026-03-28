import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RolepComponent } from './rolep.component';
import { RolepPageRoutingModule } from './rolep-routing.module';


@NgModule({
  declarations: [RolepComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolepPageRoutingModule
  ]
})
export class RolepModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrinterListModalPage } from './printer-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PrinterListModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrinterListModalPage]
})
export class PrinterListModalPageModule {}

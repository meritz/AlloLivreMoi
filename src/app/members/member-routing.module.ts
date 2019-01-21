import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'printer-list-modal', loadChildren: './printer-list-modal/printer-list-modal.module#PrinterListModalPageModule' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }

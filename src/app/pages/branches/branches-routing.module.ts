import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './branches.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';

const routes: Routes = [
  {
    path: '', component: BranchesComponent,
    data: {
      title: 'branches',
      urls: [{ title: 'Home', url: '/' }, { title: 'Branches' }]
    },
  },
  {
    path: 'manage-branch',
    component: ManageBranchComponent,
    data: {
      title: 'Manage branch',
      urls: [{ title: 'Manage branch', url: '/branches' }, { title: 'Manage branch' }]
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }

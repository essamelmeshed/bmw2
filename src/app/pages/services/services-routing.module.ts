import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';

const routes: Routes = [
  {
    path: '', component: ServicesComponent,
    data: {
      title: 'Services',
      urls: [{ title: 'Home', url: '/' }, { title: 'Services' }]
    },
  },
  {
    path: 'manage-service',
    component: ManageServiceComponent,
    data: {
      title: 'Manage service',
      urls: [{ title: 'Manage service', url: '/services' }, { title: 'Manage service' }]
    },
  },
  {
    path: 'manage-card/:id',
    component: ManageServiceComponent,
    data: {
      title: 'Manage service',
      urls: [{ title: 'Manage service', url: '/services' }, { title: 'Manage service' }]
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

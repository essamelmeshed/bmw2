import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        loadChildren: "./starter/starter.module#StarterModule"
      },
      {
        path: "services",
        loadChildren: "./services/services.module#ServicesModule"
      },
      {
        path: "news",
        loadChildren: "./news/news.module#NewsModule"
      },
      {
        path: "branches",
        loadChildren: "./branches/branches.module#BranchesModule"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { ManageNewComponent } from './manage-new/manage-new.component';

const routes: Routes = [
  {
    path: '', component: NewsComponent,
    data: {
      title: 'news',
      urls: [{ title: 'Home', url: '/' }, { title: 'News' }]
    },
  },
  {
    path: 'manage-news',
    component: ManageNewComponent,
    data: {
      title: 'Manage news',
      urls: [{ title: 'Manage news', url: '/news' }, { title: 'Manage news' }]
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

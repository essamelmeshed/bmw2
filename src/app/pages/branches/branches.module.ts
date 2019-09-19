import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    BranchesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TagInputModule
  ],
  declarations: [BranchesComponent, ManageBranchComponent]
})
export class BranchesModule { }

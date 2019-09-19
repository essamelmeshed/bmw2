import { Component, OnInit } from '@angular/core';
import { FacadeService } from "./../../services/facade.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {


  branchesList = [];
  constructor(private router: Router, private facadeService: FacadeService) { }

  ngOnInit() {
    this.getBranches();
  }

  /**
   * add new branch
   *
   *
   */
  addNewBranch() {
    this.router.navigate(["branches/manage-branch"]);
  }

  /**
   * list all braches
   *
   *
   */
  getBranches() {
    this.facadeService.branchesService.list.subscribe(res => {
      this.branchesList = res.branchs;
    });
  }

  openModel(item) {

  }
}

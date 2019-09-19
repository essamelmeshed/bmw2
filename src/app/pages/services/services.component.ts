import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FacadeService } from "./../../services/facade.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  sercicesList = [];
  constructor(private router: Router, private facadeService: FacadeService) { }

  ngOnInit() {
    this.getServices();
  }

  /**
   * add new service
   *
   *
   */
  addNewService() {
    this.router.navigate(["services/manage-service"]);
  }

  /**
   * list all services
   *
   *
   */
  getServices() {
    this.facadeService.serviceService.list.subscribe(res => {
      this.sercicesList = res.services;
    });
  }


  toExcel() {
    this.facadeService.toExcelService.exportAsExcelFile(this.sercicesList, 'services');
  }

}

import { Component, OnInit } from "@angular/core";
import { FacadeService } from "./../../../services/facade.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import swal from "sweetalert";
import { Router } from "@angular/router";

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {


  formHeader: string = "Add service";
  formSubmitBtn: string = "Add";
  formSubmitBtnReset: string = "Add and save";
  cardId: number;
  edit: boolean = false;

  form: FormGroup;
  name = new FormControl("", Validators.required);
  description = new FormControl("", Validators.required);

  constructor(
    formBuilder: FormBuilder,
    private facadeService: FacadeService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
    });
  }

  ngOnInit() {
  }

  get controls() {
    return this.form.controls;
  }

  onSubmit() {

    if (!this.form.valid) {
      return;
    }

    this.facadeService.serviceService.create(this.form.value).subscribe(res => {
      swal({
        title: "Service created",
        icon: "success",
      });
    });
  }


}

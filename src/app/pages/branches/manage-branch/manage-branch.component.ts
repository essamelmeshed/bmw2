import { Component, OnInit } from "@angular/core";
import { FacadeService } from "./../../../services/facade.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import swal from "sweetalert";


@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.css']
})
export class ManageBranchComponent implements OnInit {


  formHeader: string = "Add service";
  formSubmitBtn: string = "Add";
  formSubmitBtnReset: string = "Add and save";
  cardId: number;
  edit: boolean = false;

  form: FormGroup;

  name = new FormControl("", Validators.required);
  address = new FormControl("", Validators.required);
  longitude = new FormControl("", Validators.required);
  latitude = new FormControl("", Validators.required);
  tel = new FormControl("", Validators.required);
  fax = new FormControl("", Validators.required);
  mobile = new FormControl("", Validators.required);
  openTime = new FormControl("", Validators.required);
  closeTime = new FormControl("", Validators.required);
  bookTimeFrom = new FormControl("", Validators.required);
  bookTimeTo = new FormControl("", Validators.required);
  daysOFF = new FormControl("", Validators.required);
  bookAfter = new FormControl("", Validators.required);
  soltDuration = new FormControl("", Validators.required);

  base64textString: string = '';

  days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(
    formBuilder: FormBuilder,
    private facadeService: FacadeService,
  ) {
    this.form = formBuilder.group({
      name: this.name,
      address: this.address,
      longitude: this.latitude,
      latitude: this.latitude,
      tel: this.tel,
      fax: this.fax,
      mobile: this.mobile,
      openTime: this.openTime,
      closeTime: this.closeTime,
      bookTimeFrom: this.bookTimeFrom,
      bookTimeTo: this.bookTimeTo,
      daysOFF: this.daysOFF,
      bookAfter: this.bookAfter,
      soltDuration: this.soltDuration
    });
  }

  ngOnInit() {
  }

  get controls() {
    return this.form.controls;
  }

  onSubmit() {
    // if (!this.form.valid) {
    //   return;
    // }

    let days = [];
    
    this.form.value['daysOFF'].map(item => {
      console.log(item);
      days.push(item.value);
    });

    this.form.value['daysOFF'] = days;

    this.facadeService.branchesService.create(this.form.value).subscribe(res => {
      swal({
        title: "Branch created",
        icon: "success",
      });
    });
  }


}

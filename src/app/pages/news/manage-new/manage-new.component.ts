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
  selector: 'app-manage-new',
  templateUrl: './manage-new.component.html',
  styleUrls: ['./manage-new.component.css']
})
export class ManageNewComponent implements OnInit {


  formHeader: string = "Add service";
  formSubmitBtn: string = "Add";
  formSubmitBtnReset: string = "Add and save";
  cardId: number;
  edit: boolean = false;

  form: FormGroup;

  header = new FormControl("", Validators.required);
  type = new FormControl("", Validators.required);
  from = new FormControl("", Validators.required);
  to = new FormControl("", Validators.required);
  details = new FormControl("", Validators.required);

  base64textString: string = '';

  constructor(
    formBuilder: FormBuilder,
    private facadeService: FacadeService,
  ) {
    this.form = formBuilder.group({
      header: this.header,
      type: this.type,
      from: this.type,
      to: this.type,
      details: this.details,
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

    this.form.value['picture'] = this.base64textString;

    switch (this.form.value['type']) {

      case 'news':
        this.facadeService.newsService.createNews(this.form.value).subscribe(res => {
          swal({
            title: "NFews created",
            icon: "success",
          });
        });
        break;

      case 'event':
        this.facadeService.newsService.createEvent(this.form.value).subscribe(res => {
          swal({
            title: "NFews created",
            icon: "success",
          });
        });
        break;

      case 'offer':
        this.facadeService.newsService.createOffer(this.form.value).subscribe(res => {
          swal({
            title: "NFews created",
            icon: "success",
          });
        });
        break;

      default:
        break;
    }

  }

  /**
   * 
   * @param event 
   */
  selectFile(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }


  handleReaderLoaded(e) {
    this.base64textString = 'data:image/png;base64,' + btoa(e.target.result);
  }
}

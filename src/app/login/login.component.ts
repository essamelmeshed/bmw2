import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from './../services/facade.service';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators
} from '@angular/forms';
import {
    displayFieldCss,
    isFieldValid,
    validateAllFormFields
} from './../helpers/validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    email = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);

    isFieldValid = isFieldValid;
    displayFieldCss = displayFieldCss;
    validateAllFormFields = validateAllFormFields;

    errors = [];

    constructor(public router: Router, private facadeService: FacadeService, private fb: FormBuilder) {
        this.form = this.fb.group({
            email: this.email,
            password: this.password
        })
    }

    ngOnInit() { }

    onSubmit() {

        this.errors = [];

        if (this.form.invalid) {
            return;
        }

        this.facadeService.loginService.signin(this.form.value).subscribe(res => {
            this.facadeService.loginService.setUser(res);
            this.router.navigate(['/']);
        }, err => {
            this.handleError(err);
        });
    }

    /**
     * 
     * @param error 
     */
    handleError(error: Response) {
        if (error.status == 500) {
            this.errors = error['error'].message.details;
        } else if (error.status == 400) {
            this.errors = [];
            this.errors.push({ message: error['error']['message'] });
        }
    }
}
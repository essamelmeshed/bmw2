/**
 * app interceptor
 *
 *
 *  @author Mustafa Omran <promustafaomran@hotmail.com>
 *
 */

import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
    HttpInterceptor,
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class AppInterceptor implements HttpInterceptor {

    constructor(private spinner: NgxSpinnerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinner.show();

        if (localStorage.getItem('user') !== null) {
            const user = JSON.parse(localStorage.getItem('user'));
            request = request.clone({ headers: request.headers.set('Authorization', `${user.token}`) });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                if (event instanceof HttpErrorResponse) {
                }
                this.spinner.hide();
                return event;
            }));


    }

}

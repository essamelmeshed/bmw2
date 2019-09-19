import { Injectable } from '@angular/core';
import { HttpClientService } from './../core/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClientService) { }

  /**
   * list users
   *
   */
  get list() {
    return this.http.get('list-users-employee');
  }

  /**
   * create new customer
   *
   *
   * @param body
   */
  create(body: any) {
    return this.http.post(body, 'customer/new');
  }


  update(body: any) {
    return this.http.post(body, 'update');
  }

  changePassword(body: any) {
    return this.http.post(body, 'change-password');
  }

}

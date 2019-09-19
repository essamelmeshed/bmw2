import { Injectable } from '@angular/core';
import { HttpClientService } from './../core/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClientService) { }

  /**
   * sign in
   *
   *
   * @param body
   */
  signin(body) {
    return this.http.post(body, "api/admin/login");
  }

  /**
   * set user 
   * 
   * @param user 
   */
  setUser(user: any) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * get user data
   * 
   * 
   */
  get user() {
    if (localStorage.getItem('user') !== null) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  /**
   * logout
   * 
   * 
   */
  logout() {
    if (localStorage.getItem('user')) {
      return localStorage.removeItem('user');
    }
  }
}

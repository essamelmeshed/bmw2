import { Injectable } from '@angular/core';
import { HttpClientService } from './../core/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClientService) { }

  /**
   * list services
   *
   *
   * @param page
   * @param size
   */
  get list() {
    return this.http.get("api/service");
  }

  /**
   * create new service
   *
   *
   * @param body
   */
  create(body) {
    return this.http.post(body, "api/service");
  }

}

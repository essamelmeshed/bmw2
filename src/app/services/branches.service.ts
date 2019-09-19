import { Injectable } from '@angular/core';
import { HttpClientService } from './../core/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClientService) { }

  /**
   * list branch
   *
   */
  get list() {
    return this.http.get("api/branch");
  }

  /**
   * create new branch
   *
   *
   * @param body
   */
  create(body) {
    return this.http.post(body, "api/branch");
  }

}

import { Injectable } from '@angular/core';
import { HttpClientService } from './../core/http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClientService) { }


  get listNews() {
    return this.http.get("api/news");
  }

  get listEvents() {
    return this.http.get("api/events");
  }

  get listOffers() {
    return this.http.get("api/offers");
  }

  /**
   * create new news
   *
   *
   * @param body
   */
  createNews(body) {
    return this.http.post(body, "api/news");
  }


/**
 * create new offer
 *
 *
 * @param body
 */
  createOffer(body) {
    return this.http.post(body, "api/offer");
  }

  /**
   * create new event
   *
   *
   * @param body
   */
  createEvent(body) {
    return this.http.post(body, "api/event");
  }

}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FacadeService } from "./../../services/facade.service";
import { App } from './../../models/app';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  newsList = [];
  offersList = [];
  eventsList = [];

  baseUrl: string;

  constructor(private router: Router, private facadeService: FacadeService) {
    this.baseUrl = App.baseUrl;
  }

  ngOnInit() {
    this.getNews();
    this.getOffers();
    this.getEvents();
  }

  /**
   * add new service
   *
   *
   */
  addNewService() {
    this.router.navigate(["news/manage-news"]);
  }

  /**
   * list all news
   *
   *
   */
  getNews() {
    this.facadeService.newsService.listNews.subscribe(res => {
      this.newsList = res.news;
    });
  }

  /**
   * list all offers
   *
   *
   */
  getOffers() {
    this.facadeService.newsService.listOffers.subscribe(res => {
      this.offersList = res.news;      
    });
  }


  /**
   * list all events
   *
   *
   */
  getEvents() {
    this.facadeService.newsService.listEvents.subscribe(res => {
      this.eventsList = res.news;
    });
  }

}

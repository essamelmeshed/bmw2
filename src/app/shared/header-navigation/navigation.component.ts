import { Component, AfterViewInit, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FacadeService } from './../../services/facade.service';
import { Router } from '@angular/router';

@Component({
  selector: "ap-navigation",
  templateUrl: "./navigation.component.html"
})

export class NavigationComponent implements AfterViewInit, OnInit {

  user;
  name: string;
  showHide: boolean;
  currentLang: string;

  constructor(private translateService: TranslateService,
    private router: Router,
    private facadeService: FacadeService) {
    this.showHide = true;
    this.currentLang = this.translateService.defaultLang;
  }

  notifications: Object[] = [];

  ngOnInit() {
    this.user = this.facadeService.loginService.user.user;
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  con() {
    console.log('hello');
  }

  switchLanguage(language: string) {
    this.currentLang = language;
    this.translateService.use(language);
  }

  ngAfterViewInit() {
    $(function () {
      $(".preloader").fadeOut();
    });

    var set = function () {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      var topOffset = 70;
      if (width < 1170) {
        $("body").addClass("mini-sidebar");
        $(".navbar-brand span").hide();
        $(".scroll-sidebar, .slimScrollDiv")
          .css("overflow-x", "visible")
          .parent()
          .css("overflow", "visible");
      } else {
        $("body").removeClass("mini-sidebar");
        $(".navbar-brand span").show();
      }

      var height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $(".page-wrapper").css("min-height", height + "px");
      }
    };
    $(window).ready(set);
    $(window).on("resize", set);

    $(".search-box a, .search-box .app-search .srh-btn").on(
      "click",
      function () {
        $(".app-search").toggle(200);
      }
    );

    (<any>$('[data-toggle="tooltip"]')).tooltip();

    (<any>$(".scroll-sidebar")).slimScroll({
      position: "left",
      size: "5px",
      height: "100%",
      color: "#dcdcdc"
    });

    $("body").trigger("resize");
  }

  logout() {
    this.facadeService.loginService.logout();
    this.router.navigate(['login']);
  }
}

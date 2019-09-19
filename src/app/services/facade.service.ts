import { Injectable, Injector } from '@angular/core';
import { LoginService } from './login.service';
import { ToExcelService } from './to-excel.service';
import { UsersService } from './users.service';
import { ServiceService } from './service.service';
import { NewsService } from './news.service';
import { BranchesService } from './branches.service';

@Injectable({
  providedIn: 'root'
})

export class FacadeService {

  private _loginService: LoginService;
  private _usersService: UsersService;
  private _toExcelService: ToExcelService;
  private _serviceService: ServiceService;
  private _newsService: NewsService;
  private _branchesService: BranchesService;


  constructor(private inject: Injector) { }



  public get loginService(): LoginService {
    if (!this._loginService) {
      this._loginService = this.inject.get(LoginService)
    }

    return this._loginService;
  }

  public get serviceService(): ServiceService {
    if (!this._serviceService) {
      this._serviceService = this.inject.get(ServiceService)
    }

    return this._serviceService;
  }

  public get branchesService(): BranchesService {
    if (!this._branchesService) {
      this._branchesService = this.inject.get(BranchesService)
    }

    return this._branchesService;
  }

  public get newsService(): NewsService {
    if (!this._newsService) {
      this._newsService = this.inject.get(NewsService)
    }

    return this._newsService;
  }

  public get toExcelService(): ToExcelService {
    if (!this._toExcelService) {
      this._toExcelService = this.inject.get(ToExcelService)
    }
    return this._toExcelService;
  }


  public get usersService(): UsersService {
    if (!this._usersService) {
      this._usersService = this.inject.get(UsersService)
    }
    return this._usersService;
  }


}
